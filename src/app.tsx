import React from 'react'
import Base from './base'
import Result from './result'
import Form from './form'
import { Head } from './head'
import { Botton } from './botton'
import { ProviderStore, ProviderUiStore } from './context'
import { setUseProxies } from 'immer'

setUseProxies(false)

export const App = () => {
  return (
    <ProviderStore>
      <ProviderUiStore>
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
      </ProviderUiStore>
    </ProviderStore>
  )
}
