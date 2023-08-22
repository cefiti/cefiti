import { proxy, useState } from './useState.js'
import { store } from './store'

/* type WindowGa = Window & {
  ga(send: string, event?: string, search?: string, category?: string, data?: string): void
} */

class UiStore {
  exibeBase: boolean = false
  searched: boolean = false

  handleMenu(i: string) {
    if (i === 'Base') {
      this.exibeBase = !this.exibeBase
    }
    if (i === 'Nova') {
      store.clean()
      this.searched = false
    }
    if (i === 'Voltar') {
      this.searched = false
    }
    if (i === 'Print') {
      window.print()
    }
/*     if (i === 'Download') {
      window.open('CEFiTI.zip')
    } */
  }

  handleSearch(event: React.MouseEvent<HTMLButtonElement>) {
    if (!store.completed) {
      alert("Finalize a seleçao dos critérios para a consulta")
      event.preventDefault()
      return
    }
    if (process.env.NODE_ENV !== 'development') {
      window.ga('send', 'event', 'search', 'click', store.dados.hospSci)
      //console.log('click', process.env.NODE_ENV, store.dados.hospSci)
    }
    this.searched = true
    event.preventDefault()
  }
}

export const uiStore = proxy(new UiStore())

export function useUiStore(){
  return useState(uiStore)
}
