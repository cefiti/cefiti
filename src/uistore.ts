import { observable, useStrict, action} from 'mobx';
import store from './store';

useStrict(true);

class UiStore {

  @observable exibeBase: boolean = false;
  //@observable exibeMapa: boolean = false;
  @observable searched: boolean = false;

  @action handleMenu = (i: string): void  => {
    if (i === 'Base') {this.exibeBase = !this.exibeBase; }
    //if (i === 'Mapa') {this.exibeMapa = !this.exibeMapa; };
    if (i === 'Nova') {
      store.clean();
      this.searched = false;
    }
  }

  @action handleSearch = (event: any): void => {
    this.searched = true;
    event.preventDefault();
  }

}

export const uiStore = new UiStore();
export default uiStore;
