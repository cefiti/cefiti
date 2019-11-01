import createStore, { immerable } from './createStore'
import './utils'

export class Store {
  [immerable] = true
  dbRegras: Regra[] = []
  dbHospedeiros: Hospedeiro[] = []
  dbPragas: Praga[] = []
  db: Db[] = []
  estados: Estado[] = []
  dados: Dados = { hospSci: '', hospVul: '', prod: '', orig: '', dest: '' }
  exibeBase: boolean = false
  searched: boolean = false

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

  get empty(): boolean {
    return this.result.length === 0
  }

  get origem() {
    return this.estados.filter(estado => estado.UF !== this.dados.dest || estado.UF === '')
  }

  get destino() {
    return this.estados.filter(estado => estado.UF !== this.dados.orig || estado.UF === '')
  }

  get gender(): string {
    return this.dados.hospSci.split(' ')[0]
  }

  get completed(): boolean {
    return (
      Boolean(this.dados.hospSci) &&
      Boolean(this.dados.hospVul) &&
      Boolean(this.dados.prod) &&
      Boolean(this.dados.orig) &&
      Boolean(this.dados.dest)
    )
  }

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

  clean(): void {
    this.dados.hospSci = ''
    this.dados.hospVul = ''
    this.dados.prod = ''
    this.dados.orig = ''
    this.dados.dest = ''
  }

  handleMenu(i: string): void {
    if (i === 'Base') {
      this.exibeBase = !this.exibeBase
    }
    if (i === 'Nova') {
      this.searched = false
    }
    if (i === 'Voltar') {
      this.searched = false
      this.clean()
    }
    if (i === 'Print') {
      window.print()
    }
    if (i === 'Download') {
      window.open('CEFiTI.zip')
    }
  }

  handleSearch(): void {
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
