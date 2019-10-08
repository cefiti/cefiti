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
