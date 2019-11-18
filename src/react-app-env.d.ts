/// <reference types="react-scripts" />

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

type ImportDb = {
  regras: Regra[]
  pragas: Praga[]
  hospedeiros: Hospedeiro[]
  estados: Estado[]
}

interface Window {
  ga(send: string, event?: string, search?: string, category?: string, data?: string): void
}
