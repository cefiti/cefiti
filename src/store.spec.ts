/* tslint:disable:no-import-side-effect */
import store from './../src/store'
import { configure } from 'mobx'
//import { regras } from './dbRegras'
//import { pragas } from './dbPragas'
import { hospedeiros } from './dbHospedeiros'
import 'js-plus'
import 'jest'

configure({ enforceActions: 'observed' }) //useStrict(true)

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
    //expect(store.listaNomesSci.take(10)).toEqual(hosp10)
    //expect(store.listaNomesSci.take(-20)).toEqual(hosp20)
    //expect(store.listaNomesVul.length).toEqual(hospedeiros.length)
    expect(hospedeiros.by('nomeVul').filterNonUnique()).toEqual([])
    expect(hospedeiros.unique('nomeVul').length).toEqual(hospedeiros.length)
  })
})

describe('Store partes', () => {
  it('de Acerola', () => {
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
  it('Musa spp.', () => {
    store.dados.hospSci = 'Musa spp.'
    store.dados.prod = 'frutos'
    store.dados.orig = 'MG'
    store.dados.dest = 'MT'
    expect(store.result.length).toBe(3)
    expect(
      store.result
        .by('files')
        .flat()
        .by('link')
    ).toEqual(['IN17-2009.pdf', 'IN17-2005.pdf', 'IN17-2005.pdf'])
    expect(store.result.by('pragc')).toEqual([
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
    expect(
      store.result
        .by('files')
        .flat()
        .by('link')
    ).toEqual(['IN20-2013.pdf'])
    expect(store.result.by('pragc')).toEqual(['CANCRO EUROPEU DAS POMÁCEAS'])
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
    expect(store.result.length).toBe(1)
    expect(
      store.result
        .by('files')
        .flat()
        .by('link')
    ).toEqual(['IN21-2018.pdf'])
    expect(store.result.by('pragc')).toEqual(['CANCRO CÍTRICO'])
  })

  it('Citrus sinensis mudas SP->ES', () => {
    store.dados.hospSci = 'Citrus sinensis'
    store.dados.prod = 'mudas'
    store.dados.orig = 'SP'
    store.dados.dest = 'ES'
    expect(store.result.length).toBe(2)
    expect(
      store.result
        .by('files')
        .flat()
        .by('link')
    ).toEqual(['IN53-2008.pdf', 'IN21-2018.pdf'])
    expect(store.result.by('pragc')).toEqual(['GREENING', 'CANCRO CÍTRICO'])
    expect(store.result).toMatchSnapshot()
  })
})

/* test('Verifica hospedeiros', () => {
  //const missingHospedeiro = []
  const flattenHospedeirosPragas = pragas
    .flatMap(praga => praga.hosp)
    .flat()
    .unique()
    .sort()
  const uniqueHospedeirosSci = hospedeiros.unique('nomeSci').sort()
  const missingHospedeiro = flattenHospedeirosPragas.filter(
    n => uniqueHospedeirosSci.indexOf(n) === -1
  )

  const hospSemUso = uniqueHospedeirosSci.diff(flattenHospedeirosPragas)

  expect(flattenHospedeirosPragas).toEqual(uniqueHospedeirosSci)
}) */

/* hospedeiros.groupBy('nomeVul')

const duplicatesHosp = hospedeiros.reduce((obj, hosp) => {
  obj[hosp.nomeVul] += 1
}, {}) */
test('duplicates nomeVul', () => {
  expect(
    hospedeiros
      .groupBy('nomeVul')
      .aggregate({ nomeVul: 'count' })
      // tslint:disable-next-line:no-any
      .filter((item: any) => {
        return item.countNomeVul > 1
      })
  ).toEqual([])
  //.map((item :any) => {nomeVul: item.nomeVul, count: item.group.length})
})
