import React from 'react'
import store from './store'
import { observer } from 'mobx-react-lite'

const Head = () => (
  <div id="moldura-topo">
    <div id="topo">
      <div id="identificacao-ministerio">
        <span>
          <div id="imagemGov" />
          <a
            href="http://www.brasil.gov.br"
            target="_blank"
            rel="noopener noreferrer"
            id="brasilgov"
          >
            <div />
          </a>
        </span>
      </div>
      <div id="identificacao-sistema" style={{ float: 'none' }}>
        <br />
        <div style={{ float: 'right', color: '#fff', padding: '5px 10px 5px 15px' }}>
          Versão {store.appVersion}-{store.dbVersion}
        </div>
        <h1>CEFiTI</h1>
        <div style={{ float: 'right', color: '#fff', padding: '5px 10px 5px 15px' }}>
          Data: {new Date().toLocaleDateString()}
        </div>
        <h2>Catálogo de Exigências Fitossanitárias para o Trânsito Interestadual</h2>
      </div>
      <div id="dados-login" />
    </div>
  </div>
)

export default observer(Head as React.SFC)
