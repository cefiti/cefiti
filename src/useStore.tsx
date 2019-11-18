import React, { createContext, useContext } from 'react'
import { store } from './store'

const ContextStore = createContext({} as typeof store)

export function useStore() {
  return useContext(ContextStore) as typeof store
}

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return <ContextStore.Provider value={store}>{children}</ContextStore.Provider>
}
