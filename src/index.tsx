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
import './css/main.css'
import './css/app.css'

//console.log(renderToString(<App />))

ReactDom.render(
  //<React.StrictMode>
  <App />,
  //</React.StrictMode>,
  document.getElementById('root')
)
//ReactDom.hydrate(<App />, document.getElementById('root'))


if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').then(() => {
    console.log('Service worker registered!');
  }).catch((error) => {
    console.warn('Error registering service worker:');
    console.warn(error);
  });
}