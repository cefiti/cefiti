import * as React from 'react'
//import { component } from 'react';
import * as ReactDom from 'react-dom'
//import Mapa from './mapa';
import Base from './basex'
import Menu from './menu'
import Result from './result'
import Form from './form'
import { store, Store } from './store'
//import DevTools from 'mobx-react-devtools'
//        <DevTools />

//class App extends React.component <{store: any}, {}> {
//  render() {
interface AppStore {
  store: Store
}

const App = ({ store }: AppStore) => {
  return (
    <div id="resolucao">
      <div id="moldura-topo">
        <div id="topo">
          <div id="identificacao-ministerio">
            <span>
              <div id="imagemGov">
                <a
                  href="http://www.brasil.gov.br"
                  target="_blank"
                  id="brasilgov"
                />
              </div>
            </span>
          </div>
          <div id="identificacao-sistema" style={{ float: 'none' }}>
            <br />
            <div
              style={{
                float: 'right',
                color: '#fff',
                padding: '5px 10px 5px 15px',
              }}
            >
              Versão {store.appVersion}-{store.dbVersion}
            </div>
            <h1>CEFiTI</h1>
            <div
              style={{
                float: 'right',
                color: '#fff',
                padding: '5px 10px 5px 15px',
              }}
            >
              Data: {new Date().toLocaleDateString()}
            </div>
            <h2>
              Catálogo de Exigências Fitossanitárias para o Trânsito
              Interestadual
            </h2>
          </div>
          <div id="dados-login" />
        </div>
      </div>
      <div id="moldura-navegacao-global">
        <div id="navegacao-global">
          <Menu />
        </div>
      </div>

      <div id="corpo">
        <div id="conteúdo">
          <Form />
          <Result />
          <Base />
        </div>
        <br />
        <p className="small center">
          As informações apresentadas não substituem o texto legal vigente,
          publicado em Diário Oficial da União, e referem-se a requisitos
          fitossanitários, não dispensando outras exigências estabelecidas em
          normas específicas. No caso de interceptação de praga, serão adotados
          os procedimentos constantes do Decreto 24.114, de 12 de abril de 1934.
          Quando se tratar de material de multiplicação ou propagação vegetal
          deverá ser observada a Legislação de Sementes e Mudas.
        </p>
        <br />
        <p className="small red center ">
          Em caso de dúvida, sugestão de melhoria ou de correção, entrar em
          contato no e-mail abaixo.
        </p>
        <br />
        <div>
          <h5 className="center">
            Departamento de Sanidade Vegetal - DSV/SDA/MAPA
          </h5>
          <h5 className="center">
            Desenvolvido pelo SSV-MT -{' '}
            <a href="mailto:ssv-mt@agricultura.gov.br">
              ssv-mt@agricultura.gov.br
            </a>
          </h5>
        </div>
      </div>
    </div>
  )
  //}
}

ReactDom.render(<App store={store} />, document.getElementById('app'))
