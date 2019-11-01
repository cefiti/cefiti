//import React from 'react'
//import { useImmer } from 'use-immer'
//import produce from 'immer'
import { uiStore } from './uistore'
import { store } from './store'
import createStore from './createStore'
//import { immerable } from 'immer'

const [useStore, ProviderStore] = createStore<Store>(store)
const [useUiStore, ProviderUiStore] = createStore<UiStore>(uiStore)

/* class Teste {
  [immerable] = true
  sel = ''
  valor = 'teste '
  update() {
    this.sel = this.valor
  }

  exibeBase: boolean = false
  //@observable exibeMapa: boolean = false;
  //@observable
  searched: boolean = false
  handleMenu(): void {
    this.exibeBase = !this.exibeBase
  }
}
const teste = new Teste()
const [useTeste, ProviderTeste] = createStore<Teste>(teste) */

export { useStore, ProviderStore, useUiStore, ProviderUiStore /* , useTeste, ProviderTeste */ }

//const value = useMemo(() => [state, dispatch], [state])
//const value = useMemo(() => ({state, setState}),[state])
