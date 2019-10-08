import React from 'react'
import { useImmer } from 'use-immer'
import { uiStore as initialUiStore } from './uistore'
import { store as initialStore } from './store'

const ContextStore = React.createContext({} as Context)

function useStore() {
  const context = React.useContext(ContextStore)
  if (context === undefined) {
    throw new Error('useStore must be used within a Provider')
  }
  return context
}

const Provider = ({ children }: { children: React.ReactNode }) => {
  const [store, setStore] = useImmer(initialStore)
  const [uiStore, setUiStore] = useImmer(initialUiStore)
  const value = { store, setStore, uiStore, setUiStore }
  return <ContextStore.Provider value={value}>{children}</ContextStore.Provider>
}

export { useStore, Provider }
export default useStore

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
