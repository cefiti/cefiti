import { store } from './store'
import { immerable } from 'immer'

/* type WindowGa = Window & {
  ga(send: string, event?: string, search?: string, category?: string, data?: string): void
} */

class UiStore {
  [immerable] = true
  exibeBase: boolean = false
  searched: boolean = false

  handleMenu(i: string): void {
    if (i === 'Base') {
      this.exibeBase = !this.exibeBase
    }
    if (i === 'Nova') {
      this.searched = false
    }
    if (i === 'Voltar') {
      this.searched = false
    }
    if (i === 'Print') {
      window.print()
    }
    if (i === 'Download') {
      window.open('CEFiTI.zip')
    }
    //if (i === 'Mapa') {this.exibeMapa = !this.exibeMapa; };
  }

  //@action
  handleSearch(/* event: React.MouseEvent<HTMLButtonElement> */): void {
    if (process.env.NODE_ENV !== 'development') {
      window.ga('send', 'event', 'search', 'click', store.dados.hospSci)
      console.log('click', process.env.NODE_ENV, store.dados.hospSci)
    }
    this.searched = true
  }
}

export const uiStore = new UiStore()
export { UiStore }
