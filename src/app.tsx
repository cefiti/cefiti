import React from 'react'
import Base from './base'
import Menu from './menu'
import Result from './result'
import Form from './form'
import { Head } from './head'
import { Botton } from './botton'

export const App = () => (
  <div id="resolucao">
    <Head />
    <Menu />
    <div id="corpo">
      <div id="conteúdo">
        <Form />
        <Result />
        <Base />
      </div>
    </div>
    <Botton />
  </div>
)
