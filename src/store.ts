import { observable, computed, autorun } from 'mobx';
import './ArrayPlus'
import {db, hospedeiros} from './db'
import {exig,dados, estados } from './cefiti'

autorun(()=>{console.log('autorun')})

class Store {
  db = db;
  hospedeiros = hospedeiros;
  listaNomesSci = hospedeiros.unique('nomeSci')
  
  @observable exibeBase: boolean = false;
  @observable exibeMapa: boolean = false;
  
  @observable dados:dados = {
    hospSci: null,
    hospVul: null,
    prod: null,
    orig: null,
    dest: null
  }
  
  @computed get origem() { return this.estados.filter((estado)=> estado.UF !== this.dados.dest )};
  
  @computed get destino() { return this.estados.filter((estado)=> estado.UF !== this.dados.orig )}; 
  
  @computed get partes() {
    return db
      .filter((exig:exig) => exig.hosp.includes(this.dados.hospSci))
      .by('part')
      .flatten()
      .unique();
  }
  
  @computed get gender():string { return this.dados.hospSci.split(' ')[0] }
  
  @computed get result():exig[] {return db.filter((exig:exig) => {return (
        (
          exig.hosp.includes(this.dados.hospSci) ||
          exig.hosp.includes(this.gender + ' sp.') ||
          exig.hosp.includes(this.gender + ' spp.')
        ) &&
      exig.orig.includes(this.dados.orig) &&
      exig.dest.includes(this.dados.dest) &&
      exig.part.includes(this.dados.prod)
      );
    })
  } 
  
  
  estados:Array<estados> = [
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
}

export var store = new Store();
export default store;


/*  var normalize = function(str) {
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
  };*/