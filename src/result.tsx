import * as React from 'react';

var cat:any={};
var item:any={};

function Result() {
  return (
    <div>
        <p class="center no-print">Se a espécie vegetal ou a parte da planta buscada não constar das respectivas listas, e a espécie não pertencer às
          famílias Arecaceae, ou Heliconiaceae, ou Pandanaceae, ou Strelitziaceae, ou Zingiberaceae, então conclui-se que
          não há nenhuma exigência fitossanitária para o trânsito interestadual</p>
        <br/>
        <h3 ng-show={cat.init}>Exigências Fitossanitárias para o trânsito de {cat.select.part} de {cat.select.hosp.nomeVul} <i>({cat.select.hosp.nomeSci})</i> do {cat.select.orig} para {cat.select.dest}</h3>
        <div ng-repeat="item in cat.result track by $index" ng-hide="cat.proib">
          <hr/>
          <h4 class="h4"><i>{item.prag}</i> - {item.pragc}</h4> <a target="_blank" ng-href="{item.link}">{item.leg}</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a class="small" target="_blank" href="https://www.google.com.br/search?site=imghp&tbm=isch&q={item.prag}">[FOTOS DA PRAGA]</a>
          <br/>
          <br/>
          <span class="small underline">{item.desc}</span>
          <div ng-repeat="exig in item.exig" style="margin:6px;">
            <span title="De: {item.orig} para {item.dest}">{'$index+1'} - {'exig'}</span>
          </div>
        </div>
        <div ng-show="cat.proib">
          <h4><i>{cat.proibPrag}</i> - {cat.proibPragc} - <a target="_blank" ng-href="{cat.proibLink}">{cat.proibLeg}</a></h4>
          <span class="alert"><div>{cat.tp}</div></span>
        </div>
        <div ng-show="cat.empty">
          <span class="empty"><div>{cat.emp}</div></span>
        </div>
        <div ng-hide="!cat.init">
          <hr/>
          <h4 class="h4">TRÂNSITO INTERNACIONAL PELO TERRITÓRIO NACIONAL</h4>
          <div style="margin:6px;">
            <span>1 – SE A PARTIDA IMPORTADA, AINDA NÃO FOI LIBERADA PELO MAPA, E ESTÁ EM TRÂNSITO A UM PORTO SECO (ÁREA ALFANDEGADA NO INTERIOR DO PAÍS): 
  - Certificado Fitossanitário ou Certificado Fitossanitário de Reexportação; 

              </span>
          </div>
          <div style="margin:6px;">
            <span>2 – SE A PARTIDA IMPORTADA JÁ FOI LIBERADA PELO MAPA, E ESTÁ EM TRÂNSITO AO DESTINO FINAL: 
  - cópia autenticada do Certificado Fitossanitário ou do Certificado Fitossanitário de Reexportação;
  - original ou cópia autenticada do Termo de Fiscalização, emitido pelo MAPA. 
              </span>
          </div>
          <hr/>
          <h4 class="h4">LEGISLAÇÃO GERAL</h4>
          <a target="_blank" href="leg/IN54-2007.pdf">Instrução Normativa MAPA Nº 54, de 4 de dezembro de 2007</a>
          <br/>
          <br/>
          <a target="_blank" href="leg/IN59-2013.pdf">Instrução Normativa MAPA Nº 59, de 18 de dezembro de 2013</a>
        </div>
      </div>
  )
}