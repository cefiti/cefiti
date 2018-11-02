import { observable, computed, configure, action } from 'mobx'
import 'js-plus'
import { regras } from './dbRegras'
import { pragas } from './dbPragas'
import { hospedeiros } from './dbHospedeiros'
import estados from './estados'

configure({ enforceActions: 'observed' }) //useStrict(true)

export class Store {
  db = this.getDb()
  dbVersion = '23'
  appVersion = '4.3'
  hospedeiros = hospedeiros
  estados = estados
  listaNomesSci: string[] = hospedeiros.unique('nomeSci').sort((a, b) => a.localeCompare(b))
  listaNomesVul: string[] = hospedeiros.unique('nomeVul').sort((a, b) => a.localeCompare(b))

  @observable
  dados = { hospSci: '', hospVul: '', prod: '', orig: '', dest: '' }

  getDb() {
    return regras.map(regra => {
      const praga = pragas.find(item => item.prag === regra.prag)
      if (!praga) {
        throw Error('Dados da praga não cadastrados.')
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
      .flatten()
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
        const hospVulg = hospedeiros.find(hosp => hosp.nomeSci === event.target.value)
        this.dados.hospVul = hospVulg ? hospVulg.nomeVul : ''
        break
      case 'hospVul':
        const hospSci = hospedeiros.find(hosp => hosp.nomeVul === event.target.value)
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

export const store = new Store()
export default store
