//CEFiTI - Pragas

interface Files {
  leg: string
  link: string
}

export interface Praga {
  prag: string
  hosp: string[]
  pragc: string
  files: Files[]
}

const pragas: Praga[] = [
  {
    prag: 'Bactrocera carambolae',
    pragc: 'MOSCA-DA-CARAMBOLA',
    hosp: [
      'Anacardium occidentale',
      'Arenga pinnata',
      'Artocarpus altilis',
      'Artocarpus integrifolia',
      'Averrhoa bilimbi',
      'Averrhoa carambola',
      'Capsicum annuum',
      'Chrysobalanus icaco',
      'Citrus aurantium',
      'Citrus paradisi',
      'Citrus reticulata',
      'Citrus sinensis',
      'Eugenia uniflora',
      'Garcinia dulcis',
      'Licopersicum esculentum',
      'Malpighia emarginata',
      'Mangifera indica',
      'Manilkara zapota',
      'Psidium guajava',
      'Spondias mombin',
      'Spondias lutea',
      'Syzygium aqueum',
      'Syzygium jambos',
      'Syzygium malaccense',
      'Syzygium samarangense',
      'Terminalia catappa',
      'Ziziphus jujuba',
      'Ziziphus mauritiana',
      'Bysonima crassifolia',
      'Capsicum chinense',
      'Chrysophyllum cainito',
      'Eugenia stipitata',
      'Licania sp.',
      'Pouteria caimito',
      'Pouteria macrophylla',
      'Psidium guineense',
      'Rollinia omucosa',
      'Syzygium cumini',
    ],
    files: [
      { leg: 'Instrução Normativa nº 28, de 20 de julho de 2017', link: 'IN28-2017.pdf' },
      { leg: 'Resulução nº 03, de 15 de maio de 2018', link: 'RES03-2018.pdf' },
      { leg: 'Resulução nº 06, de 23 de novembro de 2018', link: 'RES06-2018.pdf' },
    ],
  },
  {
    prag: 'Schizotetranychus hindustanicus',
    pragc: 'ÁCARO HINDU',
    hosp: [
      'Cocos nucifera',
      'Azadirachta indica',
      'Sorghum bicolor',
      'Acacia spp.',
      'Melia azedarach',
      'Citrus spp.',
    ],
    files: [
      { leg: 'Instrução Normativa MAPA nº 8, de 17 de abril de 2012', link: 'IN08-2012.pdf' },
    ],
  },
  {
    prag: 'Sternochetus mangiferae',
    pragc: 'GORGULHO DA MANGA',
    hosp: ['Mangifera indica'],
    files: [
      {
        leg: 'Instrução Normativa MAPA/SDA nº. 34, de 05 de setembro de 2017',
        link: 'IN34-2017.pdf',
      },
    ],
  },
  {
    prag: 'BSV e CMV',
    pragc: 'BANANA STREAK VIRUS e CUCUMBER MOSAIC VIRUS',
    hosp: ['Musa spp.'],
    files: [
      { leg: 'Instrução Normativa MAPA nº 46, de 27 de dezembro de 2010', link: 'IN46-2010.pdf' },
    ],
  },
  {
    prag: 'Xanthomonas campestris pv. viticola',
    pragc: 'CANCRO-DA-VIDEIRA',
    hosp: ['Vitis spp. e seus híbridos'],
    files: [
      { leg: 'Instrução Normativa MAPA nº 2, de 6 de fevereiro de 2014', link: 'IN02-2014.pdf' },
    ],
  },
  {
    prag: 'Neonectria ditissima (Neonectria galligena)',
    pragc: 'CANCRO EUROPEU DAS POMÁCEAS',
    hosp: ['Malus sp.'],
    files: [{ leg: 'Instrução Normativa nº 20, de 20 de junho de 2013', link: 'IN20-2013.pdf' }],
  },
  {
    prag: 'Candidatus liberibacter americanus e Candidatus liberibacter asiaticus',
    pragc: 'GREENING',
    hosp: ['Citrus spp.', 'Fortunella spp.', 'Poncirus spp.', 'Murraya paniculata'],
    files: [{ leg: 'Instrução Normativa nº 53, de 16 de outubro de 2008', link: 'IN53-2008.pdf' }],
  },
  {
    prag: 'Phyllosticta citricarpa (Guinardia citricarpa)',
    pragc: 'PINTA-PRETA-DOS-CITROS',
    hosp: ['Citrus spp.'],
    files: [
      { leg: 'Instrução Normativa MAPA nº 3, de 8 de janeiro de 2008', link: 'IN03-2008.pdf' },
    ],
  },
  {
    prag: 'Ralstonia solanacearum raça 2',
    pragc: 'MOKO-DA-BANANEIRA',
    hosp: ['Musa spp.', 'Heliconia spp.'],
    files: [
      { leg: 'Instrução Normativa SDA/MAPA nº 17, de 27 de maio de 2009', link: 'IN17-2009.pdf' },
    ],
  },
  {
    prag: 'Pseudocercospora fijiensis (Mycosphaerella fijiensis)',
    pragc: 'SIGATOKA NEGRA',
    hosp: ['Musa spp.', 'Heliconia spp.'],
    files: [
      { leg: 'Instrução Normativa SDA/MAPA nº 17, de 31 de maio de 2005', link: 'IN17-2005.pdf' },
    ],
  },
  {
    prag: 'Anthonomus tomentosus',
    pragc: 'ANTHONOMUS TOMENTOSUS',
    hosp: ['Malpighia spp.'],
    files: [
      {
        leg: 'Instrução Normativa MAPA/SDA nº. 38, de 01 de outubro de 2018',
        link: 'IN38-2018.pdf',
      },
    ],
  },
  {
    prag: 'Xanthomonas citri subsp. citri',
    pragc: 'CANCRO CÍTRICO',
    hosp: ['Citrus spp.', 'Fortunella spp.', 'Poncirus spp.'],
    files: [{ leg: 'Instrução Normativa nº 21, de 25 de abril de 2018', link: 'IN21-2018.pdf' }],
  },
]

export { pragas }
