import React from 'react'
import Base from './base'
import Result from './result'
import Form from './form'
import { Head } from './head'
import { Botton } from './botton'
import { ProviderStore } from './store'
import { setUseProxies } from 'immer'

setUseProxies(false)

export const App = () => {
  return (
    <ProviderStore>
      <div id="resolucao">
        <Head />
        <div id="corpo">
          <div id="conteúdo">
            <Form />
            <Result />
            <Base />
          </div>
        </div>
        <Botton />
      </div>
    </ProviderStore>
  )
}
