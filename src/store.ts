import createStore, { immerable } from './createStore'
import './utils'

export class Store {
  [immerable] = true
  dbRegras: Regra[] = []
  dbHospedeiros: Hospedeiro[] = []
  dbPragas: Praga[] = []
  db: Db[] = []
  estados: Estado[] = []
  dados = { hospSci: '', hospVul: '', prod: '', orig: '', dest: '' }
  exibeBase = false
  searched = false

  getDb({ regras, pragas, hospedeiros, estados }: ImportDb) {
    this.dbHospedeiros = hospedeiros
    this.dbRegras = regras
    this.dbPragas = pragas
    this.estados = estados
    this.db = this.dbRegras.map(regra => ({
      ...this.dbPragas.find(item => item.prag === regra.prag),
      ...regra,
    })) as Db[]
    return this
  }

  get hospedeirosPragas() {
    return this.dbPragas.flatMap(praga => praga.hosp)
  }

  get hospedeirosRegulamentados() {
    return this.dbHospedeiros.filter(hospedeiro =>
      this.hospedeirosPragas.includes(hospedeiro.nomeSci)
    )
  }

  get listaNomesSci() {
    return this.hospedeirosRegulamentados
      .map(v => v.nomeSci)
      .filter((i, x, a) => a.indexOf(i) === x)
      .sort((a, b) => a.localeCompare(b))
  }

  get listaNomesVul() {
    return this.hospedeirosRegulamentados
      .map(v => v.nomeVul)
      .filter((i, x, a) => a.indexOf(i) === x)
      .sort((a, b) => a.localeCompare(b))
  }

  get empty() {
    return this.result.length === 0
  }

  get origem() {
    return this.estados.filter(estado => estado.UF !== this.dados.dest || estado.UF === '')
  }

  get destino() {
    return this.estados.filter(estado => estado.UF !== this.dados.orig || estado.UF === '')
  }

  get gender() {
    return this.dados.hospSci.split(' ')[0]
  }

  get completed() {
    return (
      Boolean(this.dados.hospSci) &&
      Boolean(this.dados.hospVul) &&
      Boolean(this.dados.prod) &&
      Boolean(this.dados.orig) &&
      Boolean(this.dados.dest)
    )
  }

  get partes() {
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
      .sort((a, b) => a.localeCompare(b))
  }

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

  handleChanges(name: string, value: any) {
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

  clean() {
    this.dados.hospSci = ''
    this.dados.hospVul = ''
    this.dados.prod = ''
    this.dados.orig = ''
    this.dados.dest = ''
  }

  handleMenu(i: string) {
    if (i === 'Base') {
      this.exibeBase = !this.exibeBase
    }
    if (i === 'Nova') {
      this.searched = false
      this.clean()
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

  handleSearch() {
    if (process.env.NODE_ENV !== 'development') {
      window.ga('send', 'event', 'search', 'click', this.dados.hospSci)
      console.log('click', process.env.NODE_ENV, this.dados.hospSci)
    }
    this.searched = true
  }
}

const store = new Store()
const [useStore, ProviderStore] = createStore<Store>(store)
export { useStore, ProviderStore, store }
