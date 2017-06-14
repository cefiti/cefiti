interface estados {
  estado: string
  UF: string
}

interface dados {
  hospSci: string
  hospVul: string
  prod: string
  orig: string
  dest: string
}

interface exig {
  desc: string
  hosp: string[]
  part: string[]
  orig: string[]
  dest: string[]
  prag: string
  pragc: string
  exig: string[]
  proib: boolean
  leg: string
  link: string
}

interface hospedeiro {
  nomeVul: string
  nomeSci: string
}

export { estados, dados, exig, hospedeiro }
