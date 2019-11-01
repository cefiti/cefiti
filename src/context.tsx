import { uiStore } from './uistore'
import { store } from './store'
import createStore from './createStore'

const [useStore, ProviderStore] = createStore<Store>(store)
const [useUiStore, ProviderUiStore] = createStore<UiStore>(uiStore)

export { useStore, ProviderStore, useUiStore, ProviderUiStore }
