import { observable, computed, configure, action } from 'mobx'
import 'js-plus'
import { regras, Regra } from './dbRegras'
import { pragas, Praga } from './dbPragas'
import { hospedeiros, Hospedeiro } from './dbHospedeiros'
import estados from './estados'

type Db = Praga & Regra

configure({ enforceActions: 'observed' }) //useStrict(true)

export class Store {
  dbRegras: Regra[]
  dbHospedeiros: Hospedeiro[]
  dbPragas: Praga[]
  db: Db[]
  dbVersion = '24'
  appVersion = '5.0'
  estados = estados
  listaNomesSci: string[]
  listaNomesVul: string[]

  @observable
  dados = { hospSci: '', hospVul: '', prod: '', orig: '', dest: '' }

  constructor(dbRegras: Regra[], dbHospedeiros: Hospedeiro[], dbPragas: Praga[]) {
    //console.log(dbPragas[0])
    this.dbRegras = dbRegras
    this.dbHospedeiros = dbHospedeiros
    this.dbPragas = dbPragas
    this.db = this.getDb()
    const hospedeirosPragas = this.dbPragas.flatMap(praga => praga.hosp)
    const hospedeirosRegulamentados = this.dbHospedeiros.filter(hospedeiro =>
      hospedeirosPragas.includes(hospedeiro.nomeSci)
    )
    this.listaNomesSci = hospedeirosRegulamentados
      .unique('nomeSci')
      .sort((a, b) => a.localeCompare(b))
    this.listaNomesVul = hospedeirosRegulamentados
      .unique('nomeVul')
      .sort((a, b) => a.localeCompare(b))
  }

  getDb() {
    return this.dbRegras.map(regra => {
      const praga = this.dbPragas.find(item => item.prag === regra.prag)
      if (!praga) {
        throw Error(`Dados da praga ${regra.prag} não cadastrados.`)
      } else {
        return { ...regra, ...praga }
      }
    })
  }

  @computed
  get empty(): boolean {
    return this.result.length === 0
  }

  @computed
  get origem() {
    return this.estados.filter(estado => estado.UF !== this.dados.dest || estado.UF === '')
  }

  @computed
  get destino() {
    return this.estados.filter(estado => estado.UF !== this.dados.orig || estado.UF === '')
  }

  @computed
  get gender(): string {
    return this.dados.hospSci.split(' ')[0]
  }

  @computed
  get completed(): boolean {
    return (
      Boolean(this.dados.hospSci) &&
      Boolean(this.dados.hospVul) &&
      Boolean(this.dados.prod) &&
      Boolean(this.dados.orig) &&
      Boolean(this.dados.dest)
    )
  }

  @computed
  get partes(): string[] {
    return this.db
      .filter(
        exigen =>
          exigen.hosp.includes(this.dados.hospSci) ||
          exigen.hosp.includes(this.gender + ' sp.') ||
          exigen.hosp.includes(this.gender + ' spp.')
      )
      .by('part')
      .flat()
      .unique()
      .concat([''])
      .sort((a: string, b: string) => a.localeCompare(b))
  }

  @computed
  get result() {
    return this.db.filter(exigen => {
      return (
        (exigen.hosp.includes(this.dados.hospSci) ||
          exigen.hosp.includes(this.gender + ' sp.') ||
          exigen.hosp.includes(this.gender + ' spp.')) &&
        exigen.orig.includes(this.dados.orig) &&
        exigen.dest.includes(this.dados.dest) &&
        exigen.part.includes(this.dados.prod)
      )
    })
  }

  @action
  handleChanges = (event: { target: { name: string; value: any } }): void => {
    switch (event.target.name) {
      case 'hospSci':
        const hospVulg = this.dbHospedeiros.find(hosp => hosp.nomeSci === event.target.value)
        this.dados.hospVul = hospVulg ? hospVulg.nomeVul : ''
        break
      case 'hospVul':
        const hospSci = this.dbHospedeiros.find(hosp => hosp.nomeVul === event.target.value)
        this.dados.hospSci = hospSci ? hospSci.nomeSci : ''
        break
      default:
        break
    }
    store.dados[event.target.name] = event.target.value
  }

  @action
  clean(): void {
    this.dados.hospSci = ''
    this.dados.hospVul = ''
    this.dados.prod = ''
    this.dados.orig = ''
    this.dados.dest = ''
  }
}

/* interface Dbbb {
  prag: string
  hosp: string[]
  pragc: string
  files: [
    {
      leg: string
      link: string
    }
  ]
  desc: string
  part: string[]
  orig: string[]
  dest: string[]
  exig: string[]
} */

export const store = new Store(regras, hospedeiros, pragas)
export default store

/*   getHospedeirosSci() {
    const hospedeirosPragas = this.dbPragas.flatMap(praga => praga.hosp)
    const hospedeirosRegulamentados = this.dbHospedeiros.filter(hospedeiro =>
      hospedeirosPragas.includes(hospedeiro.nomeSci)
    )
    console.log(
      hospedeirosPragas.count(),
      hospedeirosPragas //hospedeirosPragas,
        .unique()
        .count(),
      this.dbPragas.length,
      this.dbPragas
        .map(praga => praga.hosp)
        .flatten()
        .unique().length,
      this.dbHospedeiros.length,
      hospedeirosRegulamentados.length,
      this.dbHospedeiros.map(hospedeiro => hospedeiro.nomeSci).count(),
      this.dbHospedeiros
        .map(hospedeiro => hospedeiro.nomeVul)
        .unique()
        .count(),
      this.dbHospedeiros
        .map(hospedeiro => hospedeiro.nomeSci)
        .unique()
        .count()
    )
  } */
