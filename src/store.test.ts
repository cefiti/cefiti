import { store } from './store'
import { regras } from './dbRegras'
import { pragas } from './dbPragas'
import { hospedeiros } from './dbHospedeiros'
//import './utils'
import * as d3 from 'd3-array'
import { describe, it, before, test } from 'node:test'
import assert from 'node:assert';

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
    //console.log('xxxxxxxxxx', store.destino, estadosSemAC)
    assert.deepEqual(store.destino,estadosSemAC)
  })

  it('origem MT', () => {
    store.dados.orig = 'MT'
    assert.deepEqual(store.destino,estadosSemAC)
  })

  it('destino AC', () => {
    store.dados.dest = 'AC'
    assert.deepEqual(store.origem,estadosSemAC)
  })

  it('destino MT', () => {
    store.dados.dest = 'MT'
    assert.deepEqual(store.origem,estadosSemAC)
  })
})

describe('Store hospedeiros nomeSci', () => {
  it('unique values Nome Vulgar', () => {
    //assert(store.listaNomesVul.length,hospedeiros.length)
    assert.strictEqual(hospedeiros.map((v) => v.nomeVul).filter((i, x, a) => a.indexOf(i) !== x),[])
    assert.strictEqual(
      hospedeiros.map((v) => v.nomeVul).filter((i, x, a) => a.indexOf(i) === x).length
    , hospedeiros.length)
  })
})

describe('Store partes', () => {
  it('de Acerola', () => {
    debugger
    store.dados.hospSci = 'Malpighia spp.'
    assert.strictEqual(store.partes,['', 'frutos'])
  })

  it('de Banana', () => {
    store.dados.hospSci = 'Musa spp.'
    assert.strictEqual(store.partes,[
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
    assert.strictEqual(store.partes,[
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
    assert(store.partes,['', 'estaca', 'madeira', 'maniva'])
  }) */
})

describe('Store: gender', () => {
  it('Acacia sp.', () => {
    store.dados.hospSci = 'Acacia sp.'
    assert.strictEqual(store.gender,'Acacia')
  })

  it('Acer macrophyllum', () => {
    store.dados.hospSci = 'Acer macrophyllum'
    assert.strictEqual(store.gender,'Acer')
  })

  it('Betula lutea (synonym: alleghaniensis) ', () => {
    store.dados.hospSci = 'Betula lutea (synonym: alleghaniensis)'
    assert.strictEqual(store.gender,'Betula')
  })
})

describe('Store filtro geral', () => {
  before(() => {
    store.dados.hospSci = 'Musa spp.'
    store.dados.prod = 'frutos'
    store.dados.orig = 'MG'
    store.dados.dest = 'MT'
  })

  it('Musa spp. count', () => {
    assert.strictEqual(store.result.length,3)
  })
  it('Musa spp. legis', () => {
    assert.strictEqual(store.result.flatMap((v) => v.files).map((v) => v.link),[
      'IN17-2009.pdf',
      'IN17-2005.pdf',
      'IN17-2005.pdf',
    ])
  })

  it('Musa spp. pragas', () => {
    assert.strictEqual(store.result.map((v) => v.pragc),[
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
    assert.strictEqual(store.result.length,1)
  })

  it('Malus spp.', () => {
    store.dados.hospSci = 'Malus spp.'
    store.dados.prod = 'frutos'
    store.dados.orig = 'SC'
    store.dados.dest = 'MT'
    assert.strictEqual(store.result.length,1)
    assert.strictEqual(store.result.flatMap((v) => v.files).map((v) => v.link),['IN20-2013.pdf'])
    assert.strictEqual(store.result.map((v) => v.pragc),['CANCRO EUROPEU DAS POMÁCEAS'])
  })

  it('Citrus sinensis sementes SP->ES', () => {
    store.dados.hospSci = 'Citrus sinensis'
    store.dados.prod = 'sementes'
    store.dados.orig = 'SP'
    store.dados.dest = 'ES'
    assert.strictEqual(store.result.length,0)
    //assert(store.result.by('files').flatten().by('link'),['PORT291-1997.pdf', 'IN53-2008.pdf'])
    //assert(store.result.by('pragc'),['CANCRO CÍTRICO', 'GREENING'])
  })

  it('Citrus sinensis sementes RS->ES', () => {
    store.dados.hospSci = 'Citrus sinensis'
    store.dados.prod = 'material de propagação'
    store.dados.orig = 'RS'
    store.dados.dest = 'ES'
    assert.strictEqual(store.result.length,2)
    assert.strictEqual(store.result.flatMap((v) => v.files).map((v) => v.link),[
      'IN03-2008.pdf',
      'IN21-2018.pdf',
    ])
    assert.strictEqual(store.result.map((v) => v.pragc),['PINTA-PRETA-DOS-CITROS', 'CANCRO CÍTRICO'])
  })

  it('Citrus sinensis mudas SP->ES', () => {
    store.dados.hospSci = 'Citrus sinensis'
    store.dados.prod = 'mudas'
    store.dados.orig = 'SP'
    store.dados.dest = 'ES'
    assert.strictEqual(store.result.length,3)
    assert.strictEqual(store.result.flatMap((v) => v.files).map((v) => v.link),[
      'IN53-2008.pdf',
      'IN03-2008.pdf',
      'IN21-2018.pdf',
    ])
    assert.strictEqual(store.result.map((v) => v.pragc),[
      'GREENING',
      'PINTA-PRETA-DOS-CITROS',
      'CANCRO CÍTRICO',
    ])
    assert.deepStrictEqual(store.result, snap)
  })
})

describe('Sync between NomeVulg and NomeSci', () => {
  it('should define NomeVulg based in NomeSci', () => {
    // @ts-ignore
    const e: EventChange = { currentTarget: { name: 'hospSci', value: 'Musa spp.' } }
    store.handleChanges(e)
    //store.dados.hospSci = 'Musa spp.'
    assert.strictEqual(store.dados.hospVul,'Banana')
  })
  it('should define NomeSci  based in NomeVulg ', () => {
    // @ts-ignore
    store.handleChanges({ currentTarget: { name: 'hospVul', value: 'Banana' } })
    //store.dados.hospVul = 'Banana'
    assert.strictEqual(store.dados.hospSci,'Musa spp.')
  })
})

test('Check normalization of db ', () => {
  regras.map((regra) => {
    const praga = pragas.find((item) => item.prag === regra.prag)
    if (!praga) {
      assert.strictEqual(regra.prag,praga)
      //throw Error(`Dados da praga ${regra.prag} não cadastrados.`)
    }
    return regra
  })
})

test('duplicates nomeVul', () => {
  const countDupli = Array.from(
    d3.rollup(
      hospedeiros,
      (v) => ({ countNomeVulg: v.length }),
      (k) => k.nomeVul
    ),
    ([key, values]) => ({ nomeVulg: key, ...values })
  )
  assert.strictEqual(countDupli.filter((v) => !v.countNomeVulg),[])
})

test('should join Pragas and Regras', () => {
  regras.forEach((regra) => {
    const praga = pragas.find((item) => item.prag === regra.prag)
    assert.notStrictEqual(praga, undefined)
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
