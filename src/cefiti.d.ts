interface Estados {
  estado: string
  UF: string
}

interface Dados {
  hospSci: string
  hospVul: string
  prod: string
  orig: string
  dest: string
}

/*interface Exig {
  desc: string
  hosp: string[]
  part: string[]
  orig: string[]
  dest: string[]
  prag: string
  pragc: string
  exig: string[]
  proib: boolean
  files: [
    {
      leg: string
      link: string
    }
  ]
}*/

type Exig = Praga & Regra

interface Praga {
  prag: string
  hosp: string[]
  pragc: string
  files: [
    {
      leg: string
      link: string
    }
  ]
}

interface Regra {
  desc: string
  part: string[]
  orig: string[]
  dest: string[]
  prag: string
  exig: string[]
}

interface Hospedeiro {
  nomeVul: string
  nomeSci: string
}

interface Event {
  target: {
    name: string
    value: any
  }
}

export { Estados, Dados, Exig, Hospedeiro, Event, Praga, Regra }
