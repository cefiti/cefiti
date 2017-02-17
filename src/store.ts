import { observable, computed,  useStrict, action} from 'mobx';
import 'js-plus';
import {exig, dados, estados, hospedeiro } from './cefiti';
//import {db, hospedeiros} from './db'

declare var db: exig[];
declare var hospedeiros: hospedeiro[];
declare var version: string;

useStrict(true);

class Store {
  db: exig[] = db;
  version = version;
  hospedeiros: hospedeiro[] = hospedeiros;
  listaNomesSci: string[]  = hospedeiros.unique('nomeSci').sort((a, b) => a.localeCompare(b));
  listaNomesVul: string[]  = hospedeiros.unique('nomeVul').sort((a, b) => a.localeCompare(b));

  @observable dados: dados = {hospSci: '', hospVul: '', prod: '', orig: '', dest: '' };

  @computed get empty(): boolean { return (this.result.length === 0); }
  @computed get origem(): estados[] { return this.estados.filter((estado) => (estado.UF !== this.dados.dest || estado.UF === '')); };
  @computed get destino(): estados[] { return this.estados.filter((estado) => (estado.UF !== this.dados.orig || estado.UF === '')); };
  @computed get gender(): string { return this.dados.hospSci.split(' ')[0]; }
  @computed get completed(): boolean { return (Boolean(this.dados.hospSci) && Boolean(this.dados.hospVul) && Boolean(this.dados.prod) &&
    Boolean(this.dados.orig) && Boolean(this.dados.dest)); }
  @computed get partes(): string[]  {
    return db
      .filter((exig: exig) => (exig.hosp.includes(this.dados.hospSci) || exig.hosp.includes(this.gender + ' sp.') || exig.hosp.includes(this.gender + ' spp.')))
      .by('part')
      .flatten()
      .unique()
      .concat([''])
      .sort((a, b) => a.localeCompare(b));
  }
  @computed get result(): exig[] { return db.filter((exig: exig) => {return (
      (exig.hosp.includes(this.dados.hospSci) || exig.hosp.includes(this.gender + ' sp.') || exig.hosp.includes(this.gender + ' spp.')) &&
      exig.orig.includes(this.dados.orig) &&
      exig.dest.includes(this.dados.dest) &&
      exig.part.includes(this.dados.prod));
    });
  }

  estados: Array<estados> = [
    {estado: '', UF: ''},
    {estado: 'Acre', UF: 'AC'}, {estado: 'Alagoas', UF: 'AL'}, {estado: 'Amazonas', UF: 'AM'},
    {estado: 'Amapá', UF: 'AP'}, {estado: 'Bahia', UF: 'BA'}, {estado: 'Ceará', UF: 'CE'},
    {estado: 'Distrito Federal', UF: 'DF'}, {estado: 'Espirito Santo', UF: 'ES'}, {estado: 'Goiás', UF: 'GO'},
    {estado: 'Maranhão', UF: 'MA'}, {estado: 'Minas Gerais', UF: 'MG'}, {estado: 'Mato Grosso do Sul', UF: 'MS'},
    {estado: 'Mato Grosso', UF: 'MT'}, {estado: 'Pará', UF: 'PA'}, {estado: 'Paraíba', UF: 'PB'},
    {estado: 'Pernambuco', UF: 'PE'}, {estado: 'Piauí', UF: 'PI'}, {estado: 'Paraná', UF: 'PR'},
    {estado: 'Rio de janeiro', UF: 'RJ'}, {estado: 'Rio Grande do Norte', UF: 'RN'},
    {estado: 'Rondônia', UF: 'RO'}, {estado: 'Roraima', UF: 'RR'}, {estado: 'Rio Grande do Sul', UF: 'RS'},
    {estado: 'Santa Catarina', UF: 'SC'}, {estado: 'Sergipe', UF: 'SE'}, {estado: 'São Paulo', UF: 'SP'},
    {estado: 'Tocantins', UF: 'TO'}
  ];

  @action handleChanges = (event: any): void => {
    switch (event.target.name) {
      case 'hospSci':
        store.dados.hospVul = store.hospedeiros.find(hosp => hosp.nomeSci === event.target.value).nomeVul;
        break;
      case 'hospVul':
        store.dados.hospSci = store.hospedeiros.find(hosp => hosp.nomeVul === event.target.value).nomeSci;
        break;
      default:
        break;
    }
    store.dados[event.target.name] = event.target.value;
  }

  @action clean (): void {
    this.dados.hospSci = '';
    this.dados.hospVul = '';
    this.dados.prod = '';
    this.dados.orig = '';
    this.dados.dest = '';
  };

}

export var store = new Store();
export default store;
