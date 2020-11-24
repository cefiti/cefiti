//import { observable, computed, configure, action, runInAction } from 'mobx'
import { proxy } from 'valtio'
//import '../assests/utils'



export class Store {
  dbRegras: Regra[] = []
  dbHospedeiros: Hospedeiro[] = []
  dbPragas: Praga[] = []
  db: Db[] = []
  estados: Estado[] = []

  dados: Dados = { hospSci: '', hospVul: '', prod: '', orig: '', dest: '' }

  async getDb() {
    const { regras, pragas, hospedeiros, estados } = await import('./db')
    //runInAction(() => {
    this.dbHospedeiros = hospedeiros
    this.dbRegras = regras
    this.dbPragas = pragas
    this.estados = estados
    this.db = this.dbRegras.map((regra) => ({
      ...this.dbPragas.find((item) => item.prag === regra.prag),
      ...regra,
    })) as Db[]
    //})
  }

  get hospedeirosPragas() {
    return this.dbPragas.flatMap((praga) => praga.hosp)
  }

  get hospedeirosRegulamentados() {
    return this.dbHospedeiros.filter((hospedeiro) =>
      this.hospedeirosPragas.includes(hospedeiro.nomeSci)
    )
  }

  get listaNomesSci() {
    return this.hospedeirosRegulamentados
      .map((v) => v.nomeSci)
      .filter((i, x, a) => a.indexOf(i) === x)
      .sort((a, b) => a.localeCompare(b))
  }

  get listaNomesVul() {
    return this.hospedeirosRegulamentados
      .map((v) => v.nomeVul)
      .filter((i, x, a) => a.indexOf(i) === x)
      .sort((a, b) => a.localeCompare(b))
  }

  get empty(): boolean {
    return this.result.length === 0
  }

  get origem() {
    return this.estados.filter((estado) => estado.UF !== this.dados.dest || estado.UF === '')
  }

  get destino() {
    return this.estados.filter((estado) => estado.UF !== this.dados.orig || estado.UF === '')
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
        (exigen) =>
          exigen.hosp.includes(this.dados.hospSci) ||
          exigen.hosp.includes(`${this.gender} sp.`) ||
          exigen.hosp.includes(`${this.gender} spp.`)
      )
      .flatMap((v) => v.part)
      .filter((i, x, a) => a.indexOf(i) === x)
      .concat([''])
      .sort((a: string, b: string) => a.localeCompare(b))
  }

  get result() {
    return this.db.filter((exigen) => {
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

  handleChanges(event: React.FormEvent<HTMLSelectElement>): void {
    const target = event.currentTarget
    switch (target.name) {
      case 'hospSci':
        const hospVulg = this.dbHospedeiros.find((hosp) => hosp.nomeSci === target.value)
        this.dados.hospVul = hospVulg ? hospVulg.nomeVul : ''
        break
      case 'hospVul':
        const hospSci = this.dbHospedeiros.find((hosp) => hosp.nomeVul === target.value)
        this.dados.hospSci = hospSci ? hospSci.nomeSci : ''
        break
      default:
        break
    }
    this.dados[target.name] = target.value
  }

  clean(): void {
    this.dados.hospSci = ''
    this.dados.hospVul = ''
    this.dados.prod = ''
    this.dados.orig = ''
    this.dados.dest = ''
  }
}

export const store = proxy(new Store())
store.getDb()
