import * as React from 'react';
import store from './store';
import {observer} from 'mobx-react';

function Result() {
  return (
    <div>
      <div className={store.empty ? '' : 'hidden'}>
          <span className="empty"><div>SEM EXIGÊNCIAS PARA O TRÂNSITO</div></span>
      </div>
      <div className={store.empty ? 'hidden' : ''}>
          <p className="center no-print">Se a espécie vegetal ou a parte da planta buscada não constar das respectivas listas, e a espécie não pertencer às
            famílias Arecaceae, ou Heliconiaceae, ou Pandanaceae, ou Strelitziaceae, ou Zingiberaceae, então conclui-se que
            não há nenhuma exigência fitossanitária para o trânsito interestadual</p>
          <br/>
          <h3 >Exigências Fitossanitárias para o trânsito de {store.dados.prod} de {store.dados.hospVul} <i>({store.dados.hospSci})</i> do {store.dados.orig} para {store.dados.dest}</h3>
          
          {store.result.map((item, i)=>{ return (
              <div key={i} className={store.proib ? 'hidden' : ''}>
                <hr/>
                <h4 className="h4"><i>{item.prag}</i> - {item.pragc}</h4> <a target="_blank" href={item.link}>{item.leg}</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a className="small" target="_blank" href="https://www.google.com.br/search?site=imghp&tbm=isch&q={item.prag}">[FOTOS DA PRAGA]</a>
                <br/>
                <br/>
                <span className="small underline">{item.desc}</span>
                {item.exig.map((exig, i)=>{ return (
                  <div style={{"margin":"6px"}} key={i}>
                    <span title={"De: "+item.orig+" para "+item.dest}>{i+1} - {exig}</span>
                  </div>
                )})}
              </div>
          )})}
          

        
          <div>
            <hr/>
            <h4 className="h4">TRÂNSITO INTERNACIONAL PELO TERRITÓRIO NACIONAL</h4>
            <div style={{"margin":"6px"}}>
              <span>1 – SE A PARTIDA IMPORTADA, AINDA NÃO FOI LIBERADA PELO MAPA, E ESTÁ EM TRÂNSITO A UM PORTO SECO (ÁREA ALFANDEGADA NO INTERIOR DO PAÍS): 
    - Certificado Fitossanitário ou Certificado Fitossanitário de Reexportação; 

                </span>
            </div>
            <div style={{"margin":"6px"}}>
              <span>2 – SE A PARTIDA IMPORTADA JÁ FOI LIBERADA PELO MAPA, E ESTÁ EM TRÂNSITO AO DESTINO FINAL: 
    - cópia autenticada do Certificado Fitossanitário ou do Certificado Fitossanitário de Reexportação;
    - original ou cópia autenticada do Termo de Fiscalização, emitido pelo MAPA. 
                </span>
            </div>
            <hr/>
            <h4 className="h4">LEGISLAÇÃO GERAL</h4>
            <a target="_blank" href="leg/IN54-2007.pdf">Instrução Normativa MAPA Nº 54, de 4 de dezembro de 2007</a>
            <br/>
            <br/>
            <a target="_blank" href="leg/IN59-2013.pdf">Instrução Normativa MAPA Nº 59, de 18 de dezembro de 2013</a>
          </div>

        </div>
      </div>
  )
}

export default observer(Result)

/*
          <div className={store.proib ? '' : 'hidden'}>
            <h4><i>{store.exigProib.prag}</i> - {store.exigProib.pragc} - <a target="_blank" href={store.exigProib.link}>{store.exigProib.leg}</a></h4>
            <span className="alert"><div>TRÂNSITO PROIBIDO</div></span>
          </div>
          */