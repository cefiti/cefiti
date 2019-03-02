import React from 'react'
import ReactDom from 'react-dom'
import { App } from './app'

import './css/estilo-abas.css'
import './css/estilo-formulario.css'
import './css/estilo-impressao.css'
import './css/estilo-link.css'
import './css/estilo-menu.css'
import './css/estilo-tabela.css'
import './css/estilo-template.css'
import './css/app.css'

/* const browser = detect()

if (browser && browser.name === 'ie') {
  window.alert(`CEFiTI - Catálogo de Exigências Fitossanitárias para o Trânsito Interestadual
  
O navegador Internet Explorer não é suportado.
Utilize um dos navegadores a seguir: Google Chrome, Mozilla Firefox, Microsoft Edge ou Safari.`)
} else { */
//}

//const Main = () =>
//  browser && browser.name === 'ie' /*  && browser.version !== '11.0.0' */ ? <Browser /> : <App />

ReactDom.render(<App />, document.getElementById('root'))
