import React, { createContext, useContext, useCallback, useState } from 'react'
import { Draft } from 'immer'
//import { useImmer } from 'use-immer'
import produce, { setUseProxies } from 'immer'

setUseProxies(false)
type SetState<State> = (f: (draft: Draft<State>) => void | State) => void

export function useImmer<S = any>(initialValue: S | (() => S)): [S, SetState<S>]
export function useImmer(initialValue: any) {
  const [val, updateValue] = useState(initialValue)
  return [
    val,
    useCallback(updater => {
      updateValue(produce(updater))
    }, []),
  ]
}

export default function createStore<State>(initialState: State) {
  const ContextStore = createContext({} as State)
  const ContextSetStore = createContext((() => {}) as SetState<State>)

  function useStore() {
    return [useContext(ContextStore), useContext(ContextSetStore)] as [State, SetState<State>]
  }

  const Provider = ({ children }: { children: React.ReactNode }) => {
    const [state, setState] = useImmer<State>(initialState)
    return (
      <ContextStore.Provider value={state}>
        <ContextSetStore.Provider value={setState}>{children}</ContextSetStore.Provider>
      </ContextStore.Provider>
    )
  }

  const result: [
    () => [State, SetState<State>],
    ({ children }: { children: React.ReactNode }) => JSX.Element
  ] = [useStore, Provider]
  return result
}
