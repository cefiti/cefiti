import React from 'react'
import { store } from './store'
import { uiStore } from './uistore'
import { observer } from 'mobx-react-lite'

//const search: string = '+symptoms+OR+sintomas+OR+pest+OR+praga+OR+doença+OR+disease+OR+inseto+OR+insect+OR+fungi+OR+fungi+OR+bactéria';

function Result() {
  return (
    <div>
      <div className={store.completed && uiStore.searched ? '' : 'hidden'}>
        <br />
        <h3>
          Exigências Fitossanitárias para o trânsito de {store.dados.prod} de {store.dados.hospVul}{' '}
          <i>({store.dados.hospSci})</i> do {store.dados.orig} para {store.dados.dest}
        </h3>
        <div className={store.empty ? '' : 'hidden'}>
          <br />
          <br />
          <span className="empty">
            <div>SEM EXIGÊNCIAS PARA O TRÂNSITO</div>
          </span>
          <br />
        </div>
        <span>{uiStore.searched}</span>

        {store.result.map((item: Db, i: number) => {
          return (
            <div key={`${item.prag}${i}`}>
              <hr />
              <h4 className="h4" style={{ textAlign: 'left', float: 'left' }}>
                <i>{item.prag}</i> - {item.pragc}
              </h4>
              <a
                className="small"
                target="_blank"
                rel="noopener noreferrer"
                href={`https://www.google.com.br/search?site=imghp&tbm=isch&q=${item.prag}`}
                style={{ textAlign: 'right', float: 'right' }}
              >
                [FOTOS DA PRAGA]
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {'          '}
              <br />
              {// eslint-disable-next-line @typescript-eslint/no-unused-vars
              item.files.map((file, iii) => {
                return (
                  <div key={file.link.concat(iii.toString())}>
                    <a target="_blank" rel="noopener noreferrer" href={`leg/${file.link}`}>
                      {file.leg}
                    </a>
                    <br />
                  </div>
                )
              })}
              <span className="small underline">{item.desc}</span>
              {item.exig.map((exig, ii) => {
                return (
                  <div style={{ margin: '6px' }} key={exig.concat(ii.toString())}>
                    <span title={`De: ${item.orig} para ${item.dest}`}>
                      {ii + 1} - {exig}
                    </span>
                  </div>
                )
              })}
            </div>
          )
        })}

        <div className={store.empty ? 'hidden' : ''}>
          <hr />
          <h4 className="h4">TRÂNSITO NACIONAL DE PARTIDA IMPORTADA</h4>
          <div style={{ margin: '6px' }}>
            <span>
              1 – SE A PARTIDA AINDA NÃO FOI INTERNALIZADA PELO MAPA E ESTIVER EM TRÂNSITO A UMA
              ÁREA ALFANDEGADA NO INTERIOR DO BRASIL:
            </span>
            <br />
            <span>- Certificado Fitossanitário ou Certificado Fitossanitário de Reexportação;</span>
          </div>
          <div style={{ margin: '6px' }}>
            <span>
              2 – SE A PARTIDA JÁ FOI INTERNALIZADA PELO MAPA E ESTIVER EM TRÂNSITO AO PONTO DE
              DESTINO DECLARADO NA IMPORTAÇÃO:
            </span>
            <br />
            <span>
              - Cópia autenticada do Certificado Fitossanitário ou do Certificado Fitossanitário de
              Reexportação;{' '}
            </span>
            <br />
            <span>
              - Original ou cópia autenticada do Requerimento para Fiscalização de Produtos
              Agropecuários, emitido pelo MAPA;
            </span>
          </div>
          <div style={{ margin: '6px' }}>
            <span>
              3 – SE A PARTIDA JÁ FOI INTERNALIZADA PELO MAPA E ESTIVER SAINDO DO DESTINO DECLARADO
              NA IMPORTAÇÃO, EM DIREÇÃO A QUALQUER UF:
            </span>
            <br />
            <span>- Cumprir os requisitos fitossanitários para o trânsito interestadual.</span>
          </div>
          <hr />
          <h4 className="h4">TRÂNSITO NACIONAL DE PARTIDA EXPORTADA</h4>
          <div style={{ margin: '6px' }}>
            <span>
              1 – SE A PARTIDA JÁ ESTIVER COM CERTIFICADO FITOSSANITÁRIO NO INTERIOR DO BRASIL, EM
              TRÂNSITO PARA PONTO DE EGRESSO:
            </span>
            <span>- Certificado Fitossanitário.</span>
          </div>
          <hr />
          <h4 className="h4">LEGISLAÇÃO GERAL</h4>
          <a target="_blank" href="leg/IN28-2016.pdf" rel="noreferrer">
            Instrução Normativa MAPA Nº 28, de 24 de agosto de 2016
          </a>
          <br />
          <br />
          <a target="_blank" href="leg/IN38-2018.pdf" rel="noreferrer">
            Instrução Normativa MAPA Nº 38, de 01 de outubro de 2018
          </a>
          <br />
          <hr />
        </div>
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={uiStore.handleMenu.bind(undefined, 'Voltar')}
            className="form-button"
            disabled={false}
          >
            Voltar
          </button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button
            onClick={uiStore.handleMenu.bind(undefined, 'Nova')}
            className="form-button"
            disabled={false}
          >
            Nova Consulta
          </button>
        </div>
      </div>
    </div>
  )
}

export default observer(Result as React.SFC)

//                   {item.proib ? (<span className="alert"><div>TRÂNSITO PROIBIDO</div></span>) : ''}
