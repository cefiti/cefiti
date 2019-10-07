/// <reference types="react-scripts" />

/* declare module 'detect-browser' {
  detect: () => Browser
  detectOS: any
  getNodeVersion: any
  parseUserAgent: any
}
 */

interface Dados {
  hospSci: string
  hospVul: string
  prod: string
  orig: string
  dest: string
}

interface Regra {
  desc: string
  part: string[]
  orig: string[]
  dest: string[]
  prag: string
  exig: string[]
}

interface Files {
  leg: string
  link: string
}

interface Praga {
  prag: string
  hosp: string[]
  pragc: string
  files: Files[]
}

interface Hospedeiro {
  nomeVul: string
  nomeSci: string
  count: number
  count_nameVul?: number
}

type Db = Praga & Regra

interface Estado {
  estado: string
  UF: string
}

type Store = import('./store').Store
type UiStore = import('./uistore').UiStore
type Draft = import('immer').Draft
type Stores = {
  store: Store
  setStore?: Draft<Store>
  uiStore?: UiStore
  setUiStore?: Draft<UiStore>
}

//declare global {
interface Window {
  ga(send: string, event?: string, search?: string, category?: string, data?: string): void
}
//}

/* type EventChange = { currentTarget: { name: keyof Dados; value: string } } & React.ChangeEvent<
  HTMLSelectElement
> */

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
