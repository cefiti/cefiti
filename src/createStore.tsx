import React from 'react'
import { Draft } from 'immer'
//import { useImmer } from 'use-immer'
import produce, { setUseProxies } from 'immer'

setUseProxies(false)

export function useImmer<S = any>(
  initialValue: S | (() => S)
): [S, (f: (draft: Draft<S>) => void | S) => void]
export function useImmer(initialValue: any) {
  const [val, updateValue] = React.useState(initialValue)
  return [
    val,
    /* React.useCallback( */ (updater: any) => {
      const newValue = produce(updater)
      //sconsole.log(updater.toString(), newValue, val.dados)
      updateValue(newValue)
      console.log(val.dados)
    } /*, []), */,
  ]
}

export default function createStore<State>(initialState: State) {
  type TupleState = [State, (f: (draft: Draft<State>) => void | State) => void]

  const ContextStore = React.createContext({} as State)
  const ContextSetStore = React.createContext((() => {}) as ((
    f: (draft: Draft<State>) => void | State
  ) => void))

  /*   function useState() {
    return React.useContext(ContextStore)
  }

  function useSetState() {
    return React.useContext(ContextSetStore)
  } */

  function useStore() {
    const store = React.useContext(ContextStore) //useState()
    const setStore = React.useContext(ContextSetStore) //useSetState()
    const context: TupleState = [store, setStore]
    return context
  }

  const Provider = ({ children }: { children: React.ReactNode }) => {
    const [state, setState] = useImmer<State>(initialState)
    return (
      <ContextStore.Provider value={state}>
        <ContextSetStore.Provider value={setState}>{children}</ContextSetStore.Provider>
      </ContextStore.Provider>
    )
  }

  const result: [() => TupleState, ({ children }: { children: React.ReactNode }) => JSX.Element] = [
    useStore,
    Provider,
  ]
  return result
}

/*export function producer(target, prop, d) {
    // producer(fn)
    if (arguments.length === 1 && typeof target === "function") {
        return function producer(...args) {
            return produce(this, draft => {
                target.apply(draft, args)
            })
        }
    }
    // producer(prototype, "prop")
    // @producer fn
    const descriptor = d || Object.getOwnPropertyDescriptor(target, prop)
    if (!descriptor)
        throw new Error(
            `Property '${prop}' does not exist on the specified target (tip: make sure to pass 'Class.prototype', not just 'Class')`
        )
    const {value} = descriptor
    if (typeof value !== "function")
        throw new Error(
            `@producer should be used on methods only, got: ${typeof value}`
        )
    const newDescriptor = {
        ...descriptor,
        value: producer(value)
    }
    target[immerable] = true
    if (!d) Object.defineProperty(target, prop, newDescriptor)
    else return newDescriptor
}*/

/*
React.useEffect(() => {
  const getDb = async () => {
    const { regras, pragas, hospedeiros, estados } = await import('./db')
    setStore((d: Store) => {
      d.getDb({ regras, pragas, hospedeiros, estados })
    })
  }
  //setStore(d => {
  getDb()
  //d.loading = false
  //})
  console.log(store, 'hhh')
}, [])
*/

/* if (context === undefined) {
  throw new Error('useStore must be used within a Provider')
}
return context */
