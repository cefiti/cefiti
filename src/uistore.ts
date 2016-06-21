import { observable, computed, autorun, useStrict, action, toJS} from 'mobx';
import store from './store'


useStrict(true)

class UiStore {
  
  @observable exibeBase: boolean = false;
  @observable exibeMapa: boolean = false;
  @observable searched:boolean = false;

  @action handleMenu = (i, event) => {
    if (i === 'Base') {this.exibeBase = !this.exibeBase};
    if (i === 'Mapa') {this.exibeMapa = !this.exibeMapa};
    if (i === 'Nova') {
      store.clean()
      this.searched = false;
    };
  }

  @action handleSearch = (event) => {
    this.searched = true;
    event.preventDefault(); 
  }
  
}

export var uiStore = new UiStore();
export default uiStore;