//import { observable, computed, configure, action, runInAction } from 'mobx'
//import 'js-plus'
//import 'array-flat-polyfill'
import { /* produce, */ immerable } from 'immer'
import './utils'
//import { regras, pragas, hospedeiros, estados } from './db'

//configure({ enforceActions: 'observed' })

export class Store {
  [immerable] = true
  /* @observable */ dbRegras: Regra[] = []
  /* @observable */ dbHospedeiros: Hospedeiro[] = []
  /* @observable */ dbPragas: Praga[] = []
  /* @observable */ db: Db[] = []
  /* @observable */ estados: Estado[] = []

  //@observable
  dados: Dados = { hospSci: '', hospVul: '', prod: '', orig: '', dest: '' }
  /*  loading: boolean = false
  count = 0
  teste = 'asd' */

  getDb(db: { regras: Regra[]; pragas: Praga[]; hospedeiros: Hospedeiro[]; estados: Estado[] }) {
    const { regras, pragas, hospedeiros, estados } = db
    this.dbHospedeiros = hospedeiros
    this.dbRegras = regras
    this.dbPragas = pragas
    this.estados = estados
    this.db = this.dbRegras.map(regra => ({
      ...this.dbPragas.find(item => item.prag === regra.prag),
      ...regra,
    })) as Db[]
    //this.loading = false
    //console.log('getDb', this.db.length, this.db.length)
    return this
  }

  //@computed
  get hospedeirosPragas() {
    return this.dbPragas.flatMap(praga => praga.hosp)
  }

  //@computed
  get hospedeirosRegulamentados() {
    return this.dbHospedeiros.filter(hospedeiro =>
      this.hospedeirosPragas.includes(hospedeiro.nomeSci)
    )
  }

  //@computed
  get listaNomesSci() {
    return this.hospedeirosRegulamentados
      .map(v => v.nomeSci)
      .filter((i, x, a) => a.indexOf(i) === x)
      .sort((a, b) => a.localeCompare(b))
  }

  //@computed
  get listaNomesVul() {
    return this.hospedeirosRegulamentados
      .map(v => v.nomeVul)
      .filter((i, x, a) => a.indexOf(i) === x)
      .sort((a, b) => a.localeCompare(b))
  }

  //@computed
  get empty(): boolean {
    return this.result.length === 0
  }

  //@computed
  get origem() {
    return this.estados.filter(estado => estado.UF !== this.dados.dest || estado.UF === '')
  }

  //@computed
  get destino() {
    return this.estados.filter(estado => estado.UF !== this.dados.orig || estado.UF === '')
  }

  //@computed
  get gender(): string {
    return this.dados.hospSci.split(' ')[0]
  }

  //@computed
  get completed(): boolean {
    return (
      Boolean(this.dados.hospSci) &&
      Boolean(this.dados.hospVul) &&
      Boolean(this.dados.prod) &&
      Boolean(this.dados.orig) &&
      Boolean(this.dados.dest)
    )
  }

  //@computed
  get partes(): string[] {
    return this.db
      .filter(
        exigen =>
          exigen.hosp.includes(this.dados.hospSci) ||
          exigen.hosp.includes(`${this.gender} sp.`) ||
          exigen.hosp.includes(`${this.gender} spp.`)
      )
      .flatMap(v => v.part)
      .filter((i, x, a) => a.indexOf(i) === x)
      .concat([''])
      .sort((a: string, b: string) => a.localeCompare(b))
  }

  //@computed
  get result() {
    return this.db.filter(exigen => {
      return (
        (exigen.hosp.includes(this.dados.hospSci) ||
          exigen.hosp.includes(`${this.gender} sp.`) ||
          exigen.hosp.includes(`${this.gender} spp.`)) &&
        exigen.orig.includes(this.dados.orig) &&
        exigen.dest.includes(this.dados.dest) &&
        exigen.part.includes(this.dados.prod)
      )
    })
  }

  //@action
  //handleChanges = (event: React.FormEvent<HTMLSelectElement>): void => {
  handleChanges(name: string, value: any): void {
    switch (name) {
      case 'hospSci':
        const hospVulg = this.dbHospedeiros.find(hosp => hosp.nomeSci === value)
        this.dados.hospVul = hospVulg ? hospVulg.nomeVul : ''
        break
      case 'hospVul':
        const hospSci = this.dbHospedeiros.find(hosp => hosp.nomeVul === value)
        this.dados.hospSci = hospSci ? hospSci.nomeSci : ''
        break
      default:
        break
    }
    this.dados[name] = value
  }

  //@action
  clean(): void {
    this.dados.hospSci = ''
    this.dados.hospVul = ''
    this.dados.prod = ''
    this.dados.orig = ''
    this.dados.dest = ''
  }
}

const store = new Store()
//store.getDb()
export { store }
