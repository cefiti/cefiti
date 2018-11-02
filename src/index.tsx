import React from 'react'
import ReactDom from 'react-dom'
import App from './app'
import Browser from './browser'

const { detect } = require('detect-browser')
const browser = detect()
console.log('Browser', browser)

const Main = () => (browser.name === 'ie' && browser.version !== '11.0.0' ? <Browser /> : <App />)
//const Main = () => <Browser />

ReactDom.render(<Main />, document.getElementById('root'))
