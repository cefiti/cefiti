import { observable, action, configure } from 'mobx'
import store from './store'

configure({ enforceActions: 'observed' }) //useStrict(true)

type WindowGa = Window & {
  ga(send: string, event?: string, search?: string, category?: string, data?: string): void
}

class UiStore {
  @observable
  exibeBase: boolean = false
  //@observable exibeMapa: boolean = false;
  @observable
  searched: boolean = false

  @action
  handleMenu = (i: string): void => {
    if (i === 'Base') {
      this.exibeBase = !this.exibeBase
    }
    //if (i === 'Mapa') {this.exibeMapa = !this.exibeMapa; };
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
    if (i === 'Download') {
      window.open('CEFiTI.zip')
    }
  }

  @action
  handleSearch = (event: React.MouseEvent<HTMLButtonElement>): void => {
    if (process.env.NODE_ENV !== 'development') {
      ;(window as WindowGa).ga('send', 'event', 'search', 'click', store.dados.hospSci)
      //console.log('click', process.env.NODE_ENV, store.dados.hospSci)
    }
    this.searched = true
    event.preventDefault()
  }
}

export const uiStore = new UiStore()
export default uiStore
