import React from 'react'
import ReactDom from 'react-dom'
import App from './app'
import Browser from './browser'

const { detect } = require('detect-browser')
const browser = detect()

const Main = () => (browser.name === 'ie' && browser.version !== '11.0.0' ? <Browser /> : <App />)

ReactDom.render(<Main />, document.getElementById('root'))
