import { store } from './store'
//import { configure } from 'mobx'
import { regras } from './dbRegras'
import { pragas } from './dbPragas'
import { hospedeiros } from './dbHospedeiros'
import './utils'
import * as d3 from 'd3-array'
import { describe, it } from 'node:test'
//import 'jest'

//configure({ enforceActions: 'observed' }) //useStrict(true)

const estadosSemAC = [
  { estado: '', UF: '' },
  //{estado: 'Acre', UF: 'AC'},
  { estado: 'Alagoas', UF: 'AL' },
  { estado: 'Amazonas', UF: 'AM' },
  { estado: 'Amapá', UF: 'AP' },
  { estado: 'Bahia', UF: 'BA' },
  { estado: 'Ceará', UF: 'CE' },
  { estado: 'Distrito Federal', UF: 'DF' },
  { estado: 'Espirito Santo', UF: 'ES' },
  { estado: 'Goiás', UF: 'GO' },
  { estado: 'Maranhão', UF: 'MA' },
  { estado: 'Minas Gerais', UF: 'MG' },
  { estado: 'Mato Grosso do Sul', UF: 'MS' },
  { estado: 'Mato Grosso', UF: 'MT' },
  { estado: 'Pará', UF: 'PA' },
  { estado: 'Paraíba', UF: 'PB' },
  { estado: 'Pernambuco', UF: 'PE' },
  { estado: 'Piauí', UF: 'PI' },
  { estado: 'Paraná', UF: 'PR' },
  { estado: 'Rio de janeiro', UF: 'RJ' },
  { estado: 'Rio Grande do Norte', UF: 'RN' },
  { estado: 'Rondônia', UF: 'RO' },
  { estado: 'Roraima', UF: 'RR' },
  { estado: 'Rio Grande do Sul', UF: 'RS' },
  { estado: 'Santa Catarina', UF: 'SC' },
  { estado: 'Sergipe', UF: 'SE' },
  { estado: 'São Paulo', UF: 'SP' },
  { estado: 'Tocantins', UF: 'TO' },
]

describe('Store origem e destino', () => {
  it('origem AC', () => {
    store.dados.orig = 'AC'
    expect(store.destino).toEqual(estadosSemAC)
  })

  it('origem MT', () => {
    store.dados.orig = 'MT'
    expect(store.destino).not.toEqual(estadosSemAC)
  })

  it('destino AC', () => {
    store.dados.dest = 'AC'
    expect(store.origem).toEqual(estadosSemAC)
  })

  it('destino MT', () => {
    store.dados.dest = 'MT'
    expect(store.origem).not.toEqual(estadosSemAC)
  })
})

describe('Store hospedeiros nomeSci', () => {
  it('unique values Nome Vulgar', () => {
    //expect(store.listaNomesVul.length).toEqual(hospedeiros.length)
    expect(hospedeiros.map((v) => v.nomeVul).filter((i, x, a) => a.indexOf(i) !== x)).toEqual([])
    expect(
      hospedeiros.map((v) => v.nomeVul).filter((i, x, a) => a.indexOf(i) === x).length
    ).toEqual(hospedeiros.length)
  })
})

describe('Store partes', () => {
  it('de Acerola', () => {
    debugger
    store.dados.hospSci = 'Malpighia spp.'
    expect(store.partes).toEqual(['', 'frutos'])
  })

  it('de Banana', () => {
    store.dados.hospSci = 'Musa spp.'
    expect(store.partes).toEqual([
      '',
      'flores',
      'frutos',
      'material para pesquisa',
      'mudas',
      'rizomas',
    ])
  })

  it('de Citrus', () => {
    store.dados.hospSci = 'Citrus spp.'
    expect(store.partes).toEqual([
      '',
      'caules',
      'estacas',
      'flores',
      'folhas',
      'frutos',
      'gemas',
      'material de propagação',
      'mudas',
      'plantas',
      'raízes',
      'ramas',
      'ramos',
    ])
  })

  /* it('de Mandioca', () => {
    store.dados.hospSci = 'Manihot esculenta'
    expect(store.partes).toEqual(['', 'estaca', 'madeira', 'maniva'])
  }) */
})

describe('Store: gender', () => {
  it('Acacia sp.', () => {
    store.dados.hospSci = 'Acacia sp.'
    expect(store.gender).toBe('Acacia')
  })

  it('Acer macrophyllum', () => {
    store.dados.hospSci = 'Acer macrophyllum'
    expect(store.gender).toBe('Acer')
  })

  it('Betula lutea (synonym: alleghaniensis) ', () => {
    store.dados.hospSci = 'Betula lutea (synonym: alleghaniensis)'
    expect(store.gender).toBe('Betula')
  })
})

describe('Store filtro geral', () => {
  beforeAll(() => {
    store.dados.hospSci = 'Musa spp.'
    store.dados.prod = 'frutos'
    store.dados.orig = 'MG'
    store.dados.dest = 'MT'
  })

  it('Musa spp. count', () => {
    expect(store.result.length).toBe(3)
  })
  it('Musa spp. legis', () => {
    expect(store.result.flatMap((v) => v.files).map((v) => v.link)).toEqual([
      'IN17-2009.pdf',
      'IN17-2005.pdf',
      'IN17-2005.pdf',
    ])
  })

  it('Musa spp. pragas', () => {
    expect(store.result.map((v) => v.pragc)).toEqual([
      'MOKO-DA-BANANEIRA',
      'SIGATOKA NEGRA',
      'SIGATOKA NEGRA',
    ])
  })

  it('Eugenia uniflora', () => {
    store.dados.hospSci = 'Eugenia uniflora'
    store.dados.prod = 'frutos'
    store.dados.orig = 'PI'
    store.dados.dest = 'DF'
    expect(store.result.length).toBe(1)
  })

  it('Malus spp.', () => {
    store.dados.hospSci = 'Malus spp.'
    store.dados.prod = 'frutos'
    store.dados.orig = 'SC'
    store.dados.dest = 'MT'
    expect(store.result.length).toBe(1)
    expect(store.result.flatMap((v) => v.files).map((v) => v.link)).toEqual(['IN20-2013.pdf'])
    expect(store.result.map((v) => v.pragc)).toEqual(['CANCRO EUROPEU DAS POMÁCEAS'])
  })

  it('Citrus sinensis sementes SP->ES', () => {
    store.dados.hospSci = 'Citrus sinensis'
    store.dados.prod = 'sementes'
    store.dados.orig = 'SP'
    store.dados.dest = 'ES'
    expect(store.result.length).toBe(0)
    //expect(store.result.by('files').flatten().by('link')).toEqual(['PORT291-1997.pdf', 'IN53-2008.pdf'])
    //expect(store.result.by('pragc')).toEqual(['CANCRO CÍTRICO', 'GREENING'])
  })

  it('Citrus sinensis sementes RS->ES', () => {
    store.dados.hospSci = 'Citrus sinensis'
    store.dados.prod = 'material de propagação'
    store.dados.orig = 'RS'
    store.dados.dest = 'ES'
    expect(store.result.length).toBe(2)
    expect(store.result.flatMap((v) => v.files).map((v) => v.link)).toEqual([
      'IN03-2008.pdf',
      'IN21-2018.pdf',
    ])
    expect(store.result.map((v) => v.pragc)).toEqual(['PINTA-PRETA-DOS-CITROS', 'CANCRO CÍTRICO'])
  })

  it('Citrus sinensis mudas SP->ES', () => {
    store.dados.hospSci = 'Citrus sinensis'
    store.dados.prod = 'mudas'
    store.dados.orig = 'SP'
    store.dados.dest = 'ES'
    expect(store.result.length).toBe(3)
    expect(store.result.flatMap((v) => v.files).map((v) => v.link)).toEqual([
      'IN53-2008.pdf',
      'IN03-2008.pdf',
      'IN21-2018.pdf',
    ])
    expect(store.result.map((v) => v.pragc)).toEqual([
      'GREENING',
      'PINTA-PRETA-DOS-CITROS',
      'CANCRO CÍTRICO',
    ])
    expect(store.result).toMatchSnapshot()
  })
})

describe('Sync between NomeVulg and NomeSci', () => {
  it('should define NomeVulg based in NomeSci', () => {
    // @ts-ignore
    const e: EventChange = { currentTarget: { name: 'hospSci', value: 'Musa spp.' } }
    store.handleChanges(e)
    //store.dados.hospSci = 'Musa spp.'
    expect(store.dados.hospVul).toEqual('Banana')
  })
  it('should define NomeSci  based in NomeVulg ', () => {
    // @ts-ignore
    store.handleChanges({ currentTarget: { name: 'hospVul', value: 'Banana' } })
    //store.dados.hospVul = 'Banana'
    expect(store.dados.hospSci).toEqual('Musa spp.')
  })
})

test('Check normalization of db ', () => {
  regras.map((regra) => {
    const praga = pragas.find((item) => item.prag === regra.prag)
    if (!praga) {
      expect(regra.prag).toEqual(praga)
      //throw Error(`Dados da praga ${regra.prag} não cadastrados.`)
    }
    return regra
  })
})

test('duplicates nomeVul', () => {
  const countDupli = A-rray.from(
    d3.rollup(
      hospedeiros,
      (v) => ({ countNomeVulg: v.length }),
      (k) => k.nomeVul
    ),
    ([key, values]) => ({ nomeVulg: key, ...values })
  )
  expect(countDupli.filter((v) => !v.countNomeVulg)).toEqual([])
})

test('should join Pragas and Regras', () => {
  regras.forEach((regra) => {
    const praga = pragas.find((item) => item.prag === regra.prag)
    expect(praga).toBeDefined()
  })
})

//`Store filtro geral Citrus sinensis mudas SP->ES 1`] = 
const snap = [
   {
    "desc": "DE UF com ocorrência de Greening PARA UF reconhecida pelo MAPA como livre da ocorrência de Greening",
    "dest":  [
      "AC",
      "AL",
      "AM",
      "AP",
      "BA",
      "CE",
      "DF",
      "ES",
      "GO",
      "MA",
      "MS",
      "MT",
      "PA",
      "PB",
      "PE",
      "PI",
      "RJ",
      "RN",
      "RO",
      "RR",
      "RS",
      "SC",
      "SE",
      "TO",
    ],
    "exig":  [
      'PTV;\n Obs.: Partida apreendida pela fiscalização de defesa sanitária vegetal, em \ndesacordo com o previsto nesta Instrução Normativa, será sumariamente destruída, não cabendo ao infrator qualquer tipo de indenização, sem prejuízo das demais sanções estabelecidas pela legislação estadual e federal de defesa sanitária vegetal, conforme o art. 5º, da Instrução Normativa MAPA nº. 53, de 16 de outubro de 2010.',
    ],
    "files":  [
       {
        "leg": "Instrução Normativa nº 53, de 16 de outubro de 2008",
        "link": "IN53-2008.pdf",
      },
    ],
    "hosp":  [
      "Citrus spp.",
      "Fortunella spp.",
      "Poncirus spp.",
      "Murraya paniculata",
    ],
    "orig":  [
      "MG",
      "PR",
      "SP",
    ],
    "part":  [
      "mudas",
      "estacas",
      "gemas",
      "ramas",
      "raízes",
      "material de propagação",
      "plantas",
    ],
    "prag": "Candidatus liberibacter americanus e Candidatus liberibacter asiaticus",
    "pragc": "GREENING",
  },
   {
    "desc": "DE UF com ocorrência de Pinta-preta-dos-citros PARA UF reconhecida pelo MAPA como livre da ocorrência de Pinta-preta-dos-citros",
    "dest":  [
      "AC",
      "AL",
      "AM",
      "AP",
      "BA",
      "CE",
      "DF",
      "ES",
      "GO",
      "MA",
      "MG",
      "MS",
      "MT",
      "PA",
      "PB",
      "PE",
      "PI",
      "PR",
      "RN",
      "RO",
      "RR",
      "RS",
      "SC",
      "SE",
      "SP",
      "TO",
    ],
    "exig":  [
      "PTV;",
      "A partida deve ser transportada em veículos fechados ou totalmente protegidos por lona.",
    ],
    "files":  [
       {
        "leg": "Instrução Normativa MAPA nº 3, de 8 de janeiro de 2008",
        "link": "IN03-2008.pdf",
      },
    ],
    "hosp":  [
      "Citrus spp.",
    ],
    "orig":  [
      "AM",
      "ES",
      "MT",
      "MS",
      "MG",
      "PE",
      "PR",
      "RJ",
      "RS",
      "SC",
      "SP",
      "BA",
      "GO",
    ],
    "part":  [
      "mudas",
      "estacas",
      "gemas",
      "material de propagação",
      "plantas",
    ],
    "prag": "Phyllosticta citricarpa (Guinardia citricarpa)",
    "pragc": "PINTA-PRETA-DOS-CITROS",
  },
   {
    "desc": "DE Área de Sistema de Manejo de Risco (SMR) de Cancro Cítrico PARA qualquer UF",
    "dest":  [
      "AC",
      "AL",
      "AM",
      "AP",
      "BA",
      "CE",
      "DF",
      "ES",
      "GO",
      "MA",
      "MG",
      "MS",
      "MT",
      "PA",
      "PB",
      "PE",
      "PI",
      "PR",
      "RJ",
      "RN",
      "RO",
      "RR",
      "RS",
      "SC",
      "SE",
      "SP",
      "TO",
    ],
    "exig":  [
      'PTV com a seguinte DA: \\"O material de propagação é proveniente de Área sob SMR, se encontra livre de Cancro Cítrico (Xanthomonas citri subsp. citri) e foi produzido conforme preconiza a legislação específica em vigor\\".' ,
    ],
    "files":  [
       {
        "leg": "Instrução Normativa nº 21, de 25 de abril de 2018",
        "link": "IN21-2018.pdf",
      },
    ],
    "hosp":  [
      "Citrus spp.",
      "Fortunella spp.",
      "Poncirus spp.",
    ],
    "orig":  [
      "MT",
      "MS",
      "RS",
      "SP",
      "SC",
    ],
    "part":  [
      "material de propagação",
      "mudas",
      "estacas",
      "gemas",
      "plantas",
    ],
    "prag": "Xanthomonas citri subsp. citri",
    "pragc": "CANCRO CÍTRICO",
  },
]
