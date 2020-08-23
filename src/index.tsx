import React from 'react'
import ReactDom from 'react-dom'
//import { renderToString } from 'react-dom/server'
import { App } from './app'
//import * as serviceWorker from './serviceWorker'

/* import './css/estilo-abas.css'
import './css/estilo-formulario.css'
import './css/estilo-impressao.css'
import './css/estilo-link.css'
import './css/estilo-menu.css'
import './css/estilo-tabela.css'
import './css/estilo-template.css' */

//import './css/main.css'
//import './css/app.css'

/* const browser = detect()
if (browser && browser.name === 'ie') {
  window.alert(`CEFiTI - Catálogo de Exigências Fitossanitárias para o Trânsito Interestadual
O navegador Internet Explorer não é suportado.
Utilize um dos navegadores a seguir: Google Chrome, Mozilla Firefox, Microsoft Edge ou Safari.`)
} else { 
}
const Main = () =>-*/
//browser && browser.name === 'ie' /*  && browser.version !== '11.0.0' */ ? <Browser /> : <App />

//console.log(renderToString(<App />))

ReactDom.render(
  //<React.StrictMode>
  <App />,
  //</React.StrictMode>,
  document.getElementById('root')
)
//ReactDom.hydrate(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.register()
