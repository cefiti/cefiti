

/*global db, hospedeiros, angular */
'use strict';

var app = angular.module('app',[]);

app.filter('unique', function() {
  return function(input, hosp) {
    var unique = {};
    var uniqueList = [];
    var value;
    for(var i = 0; i < input.length; i++){
      if (hosp === 'part') { 
        value = input[i];
      } else {
        value = input[i].nomeSci;
      }
      if(typeof unique[value] === 'undefined'){
        unique[value] = '';
        uniqueList.push(input[i]);
      } else {
        if (hosp !== 'part' && hosp && input[i].nomeVul === hosp.nomeVul) {
          unique[value] = '';
          uniqueList.push(input[i]);
        }
      }
    }
    return uniqueList;
  };
});

app.filter('same', function() {
  return function(input, def) {
    var estados = [];
    for(var i = 0; i < input.length; i++){
      if (input[i].UF !== def) {
        estados.push(input[i]);
      }
    }
    return estados;
  };
});

app.controller('catCtrl', function(){
  var filt = [];
  this.date = new Date();
  this.map = true;
  this.init = false;
  this.part = [];
  this.result = [];
  this.db = db;
  this.select = {};
  this.hospedeiros = hospedeiros;
  this.tp = 'TRÂNSITO PROIBIDO';
  this.emp = 'SEM EXIGÊNCIAS PARA O TRÂNSITO';
  this.base = true;


  this.changes = function() {
    this.clear();
    var gender = splitName(this.select.hosp.nomeSci);
    filt = [];
    this.part = [];
    var lenDb = db.length;
    this.select.part = undefined;
    for (var i = 0; i < lenDb; i++) {
      if (db[i].hosp.indexOf(this.select.hosp.nomeSci) >= 0 ||
          db[i].hosp.indexOf(gender+' spp.') >= 0 ||
          db[i].hosp.indexOf(gender+' sp.') >= 0) {
        filt.push(db[i]);
        var lenDbPart = db[i].part.length;
        for (var j = 0; j < lenDbPart; j++) {
          this.part.push(db[i].part[j]);
        }
      }
     }
   };
  
  this.clear = function() {
    this.init = false;
    this.empty = false;
    this.proib = false;
    this.result = [];
  };

  this.search = function() {
    this.init = true;
    this.base = true;
    this.result = [];
    this.proib = false;
    var len = filt.length;
    for (var i = 0; i < len; i++) {
      if (filt[i].orig.indexOf(this.select.orig) >= 0 && 
          filt[i].dest.indexOf(this.select.dest) >= 0 && 
          filt[i].part.indexOf(this.select.part) >= 0 ) {
        this.result.push(filt[i]);
        if (filt[i].proib) {
          this.proib = true;
          this.proibPragc = filt[i].pragc;
          this.proibPrag = filt[i].prag;
          this.proibLeg = filt[i].leg;
          this.proibLink = filt[i].link;
        }
      }
    }
    //console.log(this.select.part);
    if (this.select.orig && 
        this.select.dest && 
        this.select.part && 
        this.select.part !== '' &&
        this.select.hosp.nomeSci && 
        this.result.length === 0) {
      this.empty = true;
    } else {
      this.empty = false;
    }
  };

  this.setBase = function() { this.base = !this.base;};
  
  this.setMap = function() { this.map = !this.map;};

  var splitName = function(name) {
    var splitedName = name.split(' ');
    return splitedName[0];
  };

  this.estados = [
    {estado: 'Acre', UF: 'AC'},{estado: 'Alagoas', UF: 'AL'},{estado: 'Amazonas', UF: 'AM'},
    {estado: 'Amapá', UF: 'AP'},{estado: 'Bahia', UF: 'BA'},{estado: 'Ceará', UF: 'CE'},
    {estado: 'Distrito Federal', UF: 'DF'},{estado: 'Espirito Santo', UF: 'ES'},{estado: 'Goiás', UF: 'GO'}, 
    {estado: 'Maranhão', UF: 'MA'},{estado: 'Minas Gerais', UF: 'MG'},{estado: 'Mato Grosso do Sul', UF: 'MS'},
    {estado: 'Mato Grosso', UF: 'MT'},{estado: 'Pará', UF: 'PA'},{estado: 'Paraíba', UF: 'PB'},
    {estado: 'Pernanbuco', UF: 'PE'},{estado: 'Piauí', UF: 'PI'},{estado: 'Paraná', UF: 'PR'},
    {estado: 'Rio de janeiro', UF: 'RJ'},{estado: 'Rio Grande do Norte', UF: 'RN'},
    {estado: 'Rondônia', UF: 'RO'},{estado: 'Roraima', UF: 'RR'},{estado: 'Rio Grande do Sul', UF: 'RS'},
    {estado: 'Santa Catarina', UF: 'SC'},{estado: 'Sergipe', UF: 'SE'},{estado: 'São Paulo', UF: 'SP'},
    {estado: 'Tocantins', UF: 'TO'}
  ];

  this.msgFamilias = 'Se a espécie pertencer à uma destas Famílias: "Arecaceae", "Heliconiaceae", "Musaceae",';
  this.msgFamilias += ' "Pandanaceae", "Strelitziaceae" ou "Zingiberaceae", fazer a consulta para a Espécie e';
  this.msgFamilias += ' para a Família, ou só para a Família se a espécie não estiver relacionada';
  
  
  var normalize = function(str) {
    return str.toLowerCase().
               replace(/\\s/g, "").
               replace(/[àáâãäå]/g, "a").
               replace(/æ/g, "ae").
               replace(/ç/g, "c").
               replace(/[èéêë]/g, "e").
               replace(/[ìíîï]/g, "i").
               replace(/ñ/g, "n").
               replace(/[òóôõö]/g, "o").
               replace(/œ/g, "oe").
               replace(/[ùúûü]/g, "u").
               replace(/[ýÿ]/g, "y").
               replace(/\\W/g, "");
  };  
  
  this.normalizedName = function(item) {
    return normalize(item.name);
  };
  
});

angular.module('select',[]).directive('select', function() {
  //http://stackoverflow.com/questions/12942681/how-to-fix-ie-select-issue-when-dynamically-changing-options
  return {
    restrict: 'E',
    require: '?ngModel',
    scope: false,
    link: function (scope, element, attrs, ngModel) {
      if (!ngModel) {return;}
      element.bind('change', function() {
        if (navigator.appVersion.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Windows') !== -1){
          this.parentNode.insertBefore(this, this);  
        }
      });
    }
  };
  
  //this.select = {hosp:{nomeVul:"Bananeira",nomeSci:"Musa spp."},part:"frutos",orig:"SP",dest:"AC"};
  //{hosp:{nomeSci:"Musa spp."}, part:"frutas", orig:"SP", dest:"AC"};
  //this.changes();
  
});





