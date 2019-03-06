/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
//import store from './store'
//import { observer } from 'mobx-react-lite'
import Menu from './menu'
import { version } from './../package.json'

export const Head = () => (
  <>
    <div id="moldura-topo" /* style={{ display: 'flex' }} */>
      <div id="topo">
        <div id="identificacao-ministerio">
          <span>
            <div id="imagemGov">
              <a
                href="http://www.brasil.gov.br"
                target="_blank"
                rel="noopener noreferrer"
                id="brasilgov"
              />
            </div>
          </span>
        </div>
        <div id="identificacao-sistema" style={{ float: 'none' }}>
          <br />
          <div style={{ float: 'right', color: '#fff', padding: '5px 10px 5px 15px' }}>
            <p>Versão {version}</p>
          </div>
          <h1>CEFiTI</h1>
          <div style={{ float: 'right', color: '#fff', padding: '5px 10px 5px 15px' }}>
            <p>Data: {new Date().toLocaleDateString()}</p>
          </div>
          <h2>Catálogo de Exigências Fitossanitárias para o Trânsito Interestadual</h2>
        </div>
        <div id="dados-login" />
      </div>
    </div>
    <Menu />
  </>
)
