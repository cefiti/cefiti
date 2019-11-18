import React from 'react'
import Base from './base'
import Result from './result'
import Form from './form'
import { Head } from './head'
import { Botton } from './botton'
import { Provider } from './useStore'

export const App = () => (
  <div id="resolucao">
    <Provider>
      <Head />
      <div id="corpo">
        <div id="conteúdo">
          <Form />
          <Result />
          <Base />
        </div>
      </div>
      <Botton />
    </Provider>
  </div>
)
