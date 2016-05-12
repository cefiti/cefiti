import { observable, computed } from 'mobx';
import './ArrayPlus'
import {db, hospedeiros} from './db'

interface estados {
  estado: string;
  UF: string;
}


interface dados {
  hospSci: string;
  hospVul: string;
  prod: string;
  orig: string;
  dest: string
}

class Store {
  db = db;
  hospedeiros = hospedeiros;
  
  listaNomesSci = hospedeiros.unique('nomeSci')
  
  @computed get origem() {
    return this.estados.filter((estado)=> estado.UF !== this.dados.dest )
  };
  
  @computed get destino(){
    return this.estados.filter((estado)=> estado.UF !== this.dados.orig )
  }; 
  
  @observable dados:dados = {
    hospSci: null,
    hospVul: null,
    prod: null,
    orig: null,
    dest: null
  }
  
  estados:Array<estados> = [
    {estado: 'Acre', UF: 'AC'},{estado: 'Alagoas', UF: 'AL'},{estado: 'Amazonas', UF: 'AM'},
    {estado: 'Amapá', UF: 'AP'},{estado: 'Bahia', UF: 'BA'},{estado: 'Ceará', UF: 'CE'},
    {estado: 'Distrito Federal', UF: 'DF'},{estado: 'Espirito Santo', UF: 'ES'},{estado: 'Goiás', UF: 'GO'}, 
    {estado: 'Maranhão', UF: 'MA'},{estado: 'Minas Gerais', UF: 'MG'},{estado: 'Mato Grosso do Sul', UF: 'MS'},
    {estado: 'Mato Grosso', UF: 'MT'},{estado: 'Pará', UF: 'PA'},{estado: 'Paraíba', UF: 'PB'},
    {estado: 'Pernanbuco', UF: 'PE'},{estado: 'Piauí', UF: 'PI'},{estado: 'Paraná', UF: 'PR'},
    {estado: 'Rio de janeiro', UF: 'RJ'},{estado: 'Rio Grande do Norte', UF: 'RN'},
    {estado: 'Rondônia', UF: 'RO'},{estado: 'Roraima', UF: 'RR'},{estado: 'Rio Grande do Sul', UF: 'RS'},
    {estado: 'Santa Catarina', UF: 'SC'},{estado: 'Sergipe', UF: 'SE'},{estado: 'São Paulo', UF: 'SP'},
    {estado: 'Tocantins', UF: 'TO'}
  ];
}

export var store = new Store();
export default store;