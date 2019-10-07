import React from 'react'
import Base from './base'
import Result from './result'
import Form from './form'
import { Head } from './head'
import { Botton } from './botton'
import { uiStore as initialUiStore } from './uistore'
import { store as initialStore } from './store'
import {useImmer} from 'use-immer';

export const App = () => {
  const [store, setStore] = useImmer(initialStore)
  const [uiStore, setUiStore] = useImmer(initialUiStore)
  return (  <div id="resolucao">
    <Head />
    <div id="corpo">
      <div id="conteúdo">
        <Form  {{...{store, setStore,uiStore, setUiStore}}}/>
        <Result  {{...{ store, setStore, uiStore, setUiStore} }} />
        <Base   {{...{ store, setStore, uiStore, setUiStore} }}/>
      </div>
    </div>
    <Botton />
  </div>
)}
