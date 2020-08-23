// src/dbRegras.ts
const regras = [
  {
    desc: "DE UF sem ocorrência de Mosca-da-carambola PARA UF sem ocorrência de Mosca-da-carambola",
    part: ["frutos"],
    orig: ["AC", "AL", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RS", "SC", "SE", "SP", "TO"],
    dest: ["AC", "AL", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RS", "SC", "SE", "SP", "TO"],
    prag: "Bactrocera carambolae",
    exig: [
      "Se a partida tiver que transitar por área sob quarentena: \na) PTV;\nb) os frutos devem estar acondicionados em embalagens que não permitam o contato do produto com a praga;\nc) os frutos devem ser transportados em veículos fechados ou, quando abertos, protegidos com tela de malha de 2 mm",
      "Consulte a lista de área sob quarentena, área erradicada, área sem ocorrência e de zona tampão nas Resoluções acima"
    ]
  },
  {
    desc: "DE UF com ocorrência de Mosca-da-carambola PARA qualquer UF",
    part: ["frutos"],
    orig: ["AP", "PA", "RR"],
    dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
    prag: "Bactrocera carambolae",
    exig: [
      "Se a partida for procedente DE área sob quarentena e de área protegida PARA local sem ocorrência: TRÂNSITO PROIBIDO.",
      'Se a partida for procedente DE zona tampão, de áreas erradicadas e de áreas sem detecção: PTV com a seguinte DA: "A partida está livre de Bactrocera carambolae”',
      "Consulte a lista de área sob quarentena, área erradicada, área sem ocorrência e de zona tampão nas Resoluções acima"
    ]
  },
  {
    desc: "DE UF com ocorrência de Ácaro-hindu-dos-citros PARA UF reconhecida pelo MAPA como livre da ocorrência de Ácaro-hindu-dos-citros",
    part: ["plantas", "mudas", "raízes", "caules", "ramos", "folhas", "flores", "frutos"],
    orig: ["RR"],
    dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RS", "SC", "SE", "SP", "TO"],
    prag: "Schizotetranychus hindustanicus",
    exig: [
      "TRÂNSITO PROIBIDO.\nMotivo: Ausência de área livre de ácaro-hindu-dos-citros, na origem da partida.",
      'Para  frutos de Citrus spp. o trânsito é permitido com PTV com a declaração adicional: "A partida atende às exigências constantes da Instrução Normativa MAPA nº 8, de 17 de abril de 2012, encontra-se livre do Ácaro Hindu dos Citros";',
      "Estas exigências fitossanitárias não se aplicam a material in vitro, madeira serrada e, ainda, frutos de coco (Cocus nucifera) secos e descascados;"
    ]
  },
  {
    desc: "DE qualquer UF PARA qualquer UF",
    part: ["mudas"],
    orig: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
    dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
    prag: "BSV e CMV",
    exig: [
      'PTV com a seguinte declaração adicional: "A partida encontra-se livre dos vírus Banana streak virus (BSV) e Cucumber mosaic virus (CMV), de acordo com o laudo laboratorial [nº do laudo], [nome do laboratório] -[município e UF de localização do laboratório]";',
      "As mudas de bananeira que transitarem em desrespeito às determinações deste artigo ficam sujeitas à interceptação, caso em que será determinado o retorno das mesmas ao local de origem e comunicado ao órgão fiscalizador da produção e comércio, para adoção das providências cabíveis, conforme o art. 13, § 2º., da Instrução Normativa MAPA nº. 46, de 27 de dezembro de 2010."
    ]
  },
  {
    desc: "DE UF com ocorrência de Cancro-da-videira PARA UF reconhecida pelo MAPA como livre da ocorrência de Cancro-da-videira",
    part: ["mudas"],
    orig: ["BA", "CE", "PE", "RR"],
    dest: ["AC", "AL", "AM", "AP", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PI", "PR", "RJ", "RN", "RO", "RS", "SC", "SE", "SP", "TO"],
    prag: "Xanthomonas campestris pv. viticola",
    exig: [
      'PTV com a seguinte declaração adicional: "As mudas foram obtidas por micropropagação e indexadas para Xanthomonas campestris pv. viticola".'
    ]
  },
  {
    desc: "DE UF com ocorrência de Cancro-da-videira PARA UF reconhecida pelo MAPA como livre da ocorrência de Cancro-da-videira",
    part: ["frutos"],
    orig: ["BA", "CE", "PE", "RR"],
    dest: ["AC", "AL", "AM", "AP", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PI", "PR", "RJ", "RN", "RO", "RS", "SC", "SE", "SP", "TO"],
    prag: "Xanthomonas campestris pv. viticola",
    exig: [
      'PTV com a seguinte declaração adicional: "Os frutos foram produzidos em propriedade onde são adotadas as medidas de prevenção e controle do cancro bacteriano da videira, previstas na legislação fitossanitária";',
      "Estas exigências fitossanitárias só se aplicam a frutos, quando destinados a consumo in natura."
    ]
  },
  {
    desc: "DE UF com ocorrência de Cancro-da-videira PARA UF reconhecida pelo MAPA como livre da ocorrência de Cancro-da-videira",
    part: ["material para pesquisa"],
    orig: ["BA", "CE", "PE", "RR"],
    dest: ["AC", "AL", "AM", "AP", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PI", "PR", "RJ", "RN", "RO", "RS", "SC", "SE", "SP", "TO"],
    prag: "Xanthomonas campestris pv. viticola",
    exig: [
      'PTV com a seguinte declaração adicional: "O material foi lacrado na origem, sob número de lacre X, e embalado de maneira a garantir a não dispersão da praga".'
    ]
  },
  {
    desc: "DE UF com ocorrência de Cancro-europeu-das-pomáceas PARA UF reconhecida pelo MAPA como livre da ocorrência de Cancro-europeu-das-pomáceas",
    part: ["mudas", "sementes", "estacas", "bulbos", "tubérculos", "manivas", "toletes", "gemas", "ramas", "rizomas", "material de propagação"],
    orig: ["PR", "RS", "SC"],
    dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "RJ", "RN", "RO", "RR", "SE", "SP", "TO"],
    prag: "Neonectria ditissima (Neonectria galligena)",
    exig: [
      'PTV com a seguinte declaração adicional: "A Unidade de produção foi inspecionada oficialmente durante o período de produção e não foi constatada a presença de sintomas de infecção pela praga Neonectria galligena";',
      "Esta exigência fitossanitária não se aplica a material propagativo in vitro."
    ]
  },
  {
    desc: "DE UF com ocorrência de Cancro-europeu-das-pomáceas PARA UF reconhecida pelo MAPA como livre da ocorrência de Cancro-europeu-das-pomáceas",
    part: ["frutos"],
    orig: ["PR", "RS", "SC"],
    dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "RJ", "RN", "RO", "RR", "SE", "SP", "TO"],
    prag: "Neonectria ditissima (Neonectria galligena)",
    exig: [
      'PTV com a seguinte declaração adicional: "Na unidade de produção e Unidade de Consolidação - UC foram adotados os procedimentos de controle e prevenção previstos nesta norma (Instrução Normativa nº 20, de 20 de junho de 2013) e os frutos não apresentam sintomas de Neonectria galligena".'
    ]
  },
  {
    desc: "DE UF com ocorrência de Greening PARA UF reconhecida pelo MAPA como livre da ocorrência de Greening",
    part: ["mudas", "estacas", "gemas", "ramas", "raízes", "material de propagação", "plantas"],
    orig: ["MG", "PR", "SP"],
    dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MS", "MT", "PA", "PB", "PE", "PI", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "TO"],
    prag: "Candidatus liberibacter americanus e Candidatus liberibacter asiaticus",
    exig: [
      "PTV; \n Obs.: Partida apreendida pela fiscalização de defesa sanitária vegetal, em\ndesacordo com o previsto nesta Instrução Normativa, será sumariamente destruída, não cabendo ao infrator qualquer tipo de indenização, sem prejuízo das demais sanções estabelecidas pela legislação estadual e federal de defesa sanitária vegetal, conforme o art. 5º, da Instrução Normativa MAPA nº. 53, de 16 de outubro de 2010."
    ]
  },
  {
    desc: "DE UF com ocorrência PARA qualquer UF",
    part: ["frutos"],
    orig: ["RJ"],
    dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
    prag: "Sternochetus mangiferae",
    exig: [
      'PTV com a seguinte Declaração Adicional: "A partida foi produzida fora da zona interditada e encontra-se livre de Sternochetus mangiferae".'
    ]
  },
  {
    desc: "DE UF com ocorrência de Pinta-preta-dos-citros PARA UF reconhecida pelo MAPA como livre da ocorrência de Pinta-preta-dos-citros",
    part: ["mudas", "estacas", "gemas", "material de propagação", "plantas"],
    orig: ["AM", "ES", "MT", "MS", "MG", "PE", "PR", "RJ", "RS", "SC", "SP", "BA", "GO"],
    dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
    prag: "Phyllosticta citricarpa (Guinardia citricarpa)",
    exig: [
      "PTV;",
      "A partida deve ser transportada em veículos fechados ou totalmente protegidos por lona."
    ]
  },
  {
    desc: "DE UF com ocorrência de Pinta-preta-dos-citros PARA UF reconhecida pelo MAPA como livre da ocorrência de Pinta-preta-dos-citros",
    part: ["frutos"],
    orig: ["AM", "ES", "MT", "MS", "MG", "PE", "PR", "RJ", "RS", "SC", "SP", "BA", "GO"],
    dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
    prag: "Phyllosticta citricarpa (Guinardia citricarpa)",
    exig: [
      'PTV com a seguinte declaração adicional: "Os frutos foram produzidos sob Manejo Integrado de Guignardia citricarpa e submetidos a processo de seleção para a retirada de folhas e partes de ramos";',
      "Os frutos devem estar isentos de material vegetativo."
    ]
  },
  {
    desc: "Material para pesquisa DE qualquer UF PARA UF sem ocorrência",
    part: ["material para pesquisa"],
    orig: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
    dest: ["AC", "AL", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PB", "PE", "PI", "PR", "RJ", "RN", "RS", "SC", "SP", "TO"],
    prag: "Ralstonia solanacearum raça 2",
    exig: [
      "Autorização da Superintendência Federal de Agricultura, Pecuária e Abastecimento (SFA), da UF de origem da partida;",
      "A partida deve ser transportada em recipiente lacrado;"
    ]
  },
  {
    desc: "DE UF com ocorrência de Moko-da-bananeira PARA todas as UFs",
    part: ["mudas", "rizomas"],
    orig: ["AL", "AM", "AP", "PA", "RO", "RR", "SE"],
    dest: ["AC", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
    prag: "Ralstonia solanacearum raça 2",
    exig: [
      "TRÂNSITO PROIBIDO, exceto para mudas transportadas en vitro ou micropropagadas. \nObs.: Partida apreendida pela fiscalização de defesa sanitária vegetal, em desacordo com estas exigências, será sumariamente destruída ou retornada à origem, sem prejuízo das demais sanções estabelecidas pela legislação própria, conforme o art. 11 da Instrução Normativa SDA nº. 17, de 27 de maio de 2009",
      'Para mudas transportadas en vitro ou micropropagadas, será exigido: \na)PTV com a seguinte declaração adicional: "As mudas encontram- se livres de Ralstonia solanacearum raça 2". \nb) A carga deverá estar lacrada e o número do lacre constar na PTV. \nc) Na PTV deve constar se as mudas são in vitro ou micropropagadas;'
    ]
  },
  {
    desc: "DE Área Livre de Moko-da-bananeira PARA todas as UFs",
    part: ["mudas", "rizomas"],
    orig: ["CE", "PE", "PI", "SC"],
    dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
    prag: "Ralstonia solanacearum raça 2",
    exig: [
      'PTV com  a seguinte declaração adicional: "As mudas foram produzidas em Área Livre de Ralstonia solanacearum raça 2, oficialmente reconhecida pelo Ministério da Agricultura, Pecuária e Abastecimento.".  \nObs.: Partida apreendida pela fiscalização de defesa sanitária vegetal, em desacordo com estas exigências, será sumariamente destruída ou retornada à origem, sem prejuízo das demais sanções estabelecidas pela legislação própria, conforme o art. 11 da Instrução Normativa SDA nº. 17, de 27 de maio de 2009.',
      "A carga deverá estar lacrada e o número do lacre constar na PTV."
    ]
  },
  {
    desc: "DE UF sem ocorrência de Moko-da-bananeira PARA todas as UFs",
    part: ["mudas", "rizomas"],
    orig: ["AC", "BA", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PB", "PR", "RJ", "RN", "RS", "SP", "TO"],
    dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
    prag: "Ralstonia solanacearum raça 2",
    exig: [
      'PTV com  a seguinte declaração adicional: "As mudas se encontram livres de Ralstonia solanacearum raça 2.".  \nObs.: Partida apreendida pela fiscalização de defesa sanitária vegetal, em desacordo com estas exigências, será sumariamente destruída ou retornada à origem, sem prejuízo das demais sanções estabelecidas pela legislação própria, conforme o art. 11 da Instrução Normativa SDA nº. 17, de 27 de maio de 2009.',
      "Quando transitar pelas UFs AM, AP, PA, RO, RR e SE, onde ocorre a praga, a carga deverá estar lacrada e o número do lacre constar na PTV."
    ]
  },
  {
    desc: "DE UF com ocorrência de Moko-da-bananeira PARA área livre de Moko-da-bananeira",
    part: ["frutos", "flores"],
    orig: ["AL", "AM", "AP", "PA", "RO", "RR", "SE"],
    dest: ["CE", "PE", "PI", "SC"],
    prag: "Ralstonia solanacearum raça 2",
    exig: [
      'PTV com a seguinte declaração adicional: "Os frutos ou inflorescências foram produzidos sob aplicação de medidas integradas em um enfoque de Sistemas para o Manejo de Risco da praga Ralstonia solanacearum raça 2"; \nObs.: Partida apreendida pela fiscalização de defesa sanitária vegetal, em desacordo com estas exigências, será sumariamente destruída ou retornada à origem, sem prejuízo das demais sanções estabelecidas pela legislação própria, conforme o art. 11 da Instrução Normativa SDA nº. 17, de 27 de maio de 2009.'
    ]
  },
  {
    desc: "DE área livre de Moko-da-bananeira PARA área livre de Moko-da-bananeira",
    part: ["frutos", "flores"],
    orig: ["CE", "PE", "PI", "SC"],
    dest: ["CE", "PE", "PI", "SC"],
    prag: "Ralstonia solanacearum raça 2",
    exig: [
      'PTV com a seguinte declaração adicional: "As mudas foram produzidas em área livre de Ralstonia solanacearum raça 2, oficialmente reconhecida pelo Ministério da Agricultura, Pecuária e Abastecimento". \nObs.: Partida apreendida pela fiscalização de defesa sanitária vegetal, em desacordo com estas exigências, será sumariamente destruída ou retornada à origem, sem prejuízo das demais sanções estabelecidas pela legislação própria, conforme o art. 11 da Instrução Normativa SDA nº. 17, de 27 de maio de 2009.'
    ]
  },
  {
    desc: "DE UF sem ocorrência de Moko-da-bananeira PARA todas as UFs",
    part: ["frutos", "flores"],
    orig: ["AC", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PB", "PE", "PI", "PR", "RJ", "RN", "RS", "SC", "SP", "TO"],
    dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
    prag: "Ralstonia solanacearum raça 2",
    exig: [
      "PTV para comprovar a origem. \nObs.: Partida apreendida pela fiscalização de defesa sanitária vegetal, em desacordo com estas exigências, será sumariamente destruída ou retornada à origem, sem prejuízo das demais sanções estabelecidas pela legislação própria, conforme o art. 11 da Instrução Normativa SDA nº. 17, de 27 de maio de 2009;"
    ]
  },
  {
    desc: "DE UF com ocorrência de Moko-da-bananeira PARA UF sem ocorrência de Moko-da-bananeira",
    part: ["frutos", "flores"],
    orig: ["AL", "AM", "AP", "PA", "RO", "RR", "SE"],
    dest: ["AC", "BA", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PB", "PR", "RJ", "RN", "RS", "SP", "TO"],
    prag: "Ralstonia solanacearum raça 2",
    exig: [
      'OU PTV com a seguinte declaração adicional: "Os frutos ou inflorescências foram produzidos em UP onde não foi observada a presença de Ralstonia solanacearum raça 2, nos últimos doze meses"; OU \nPTV com a seguinte declaração adicional: "Os frutos ou inflorescências foram produzidos sob aplicação de medidas integradas em um enfoque de Sistemas para o Manejo de Risco da praga Ralstonia solanacearum raça 2"; \nObs.: Partida apreendida pela fiscalização de defesa sanitária vegetal, em desacordo com estas exigências, será sumariamente destruída ou retornada à origem, sem prejuízo das demais sanções estabelecidas pela legislação própria, conforme o art. 11 da Instrução Normativa SDA nº. 17, de 27 de maio de 2009.'
    ]
  },
  {
    desc: "Mudas Micropropagadas DE qualquer UF PARA qualquer UF",
    part: ["mudas"],
    orig: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
    dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
    prag: "Pseudocercospora fijiensis (Mycosphaerella fijiensis)",
    exig: [
      "PTV;",
      "As mudas devem ser transportadas in vitro;",
      "A exigência de PTV não se aplica às espécies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;",
      "Estas exigências só se aplicam a mudas micropropagadas; Para outras mudas que não sejam micropropagadas, o trânsito é proibido"
    ]
  },
  {
    desc: "Material para pesquisa DE qualquer UF PARA qualquer UF",
    part: ["material para pesquisa"],
    orig: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
    dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
    prag: "Pseudocercospora fijiensis (Mycosphaerella fijiensis)",
    exig: [
      "Autorização Declaratória emitida pela Área de Sanidade Vegetal da Superintendência Federal da Agricultura - SFA, na Unidade da Federação de origem do material genético;",
      "O material genético deve ser transportado em recipiente lacrado, devendo o número do lacre constar da Autorização Declaratória;",
      "O interessado deve comunicar a SFA de destino da partida, quando do recebimento do material, para inspeção fitossanitária;",
      "Estas exigências fitossanitárias só se aplicam a material genético;"
    ]
  },
  {
    desc: "DE área livre de Sigatoka Negra PARA área com ocorrência de Sigatoka Negra",
    part: ["frutos", "flores"],
    orig: ["AL", "CE", "DF", "GO", "PB", "PE", "PI", "RN", "SE"],
    dest: ["AC", "AM", "AP", "GO", "MA", "MG", "MS", "MT", "PA", "PR", "RS", "RJ", "RO", "RR", "SC", "SP", "TO", "BA", "ES"],
    prag: "Pseudocercospora fijiensis (Mycosphaerella fijiensis)",
    exig: [
      "PTV com a declaração adicional de que a partida é originária de área livre de Sigatoka Negra;",
      "As bananas não podem transitar em cacho, em todo o território nacional;",
      "A partida deve estar livre de folhas de bananeira ou de parte da planta, no acondicionamento dos frutos;",
      "Estas exigências não se aplicam às espécies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;",
      "GO é área livre de Sigatoka Negra, EXCETO os seguintes municípios: Amorinópolis, Aragarças, Arenópolis, Baliza, Bom Jardim de Goiás, Caiapônia, Diorama, Doverlândia, Fazenda Nova, Iporá, Israelândia, Ivolândia, Jaupaci, Jussara, Mineiros, Moiporá, Montes Claros de Goiás, Palestina de Goiás, Piranhas, Santa Fé de Goiás e Santa Rita do Araguaia."
    ]
  },
  {
    desc: "DE área livre de Sigatoka Negra PARA área com ocorrência de Sigatoka Negra",
    part: ["frutos", "flores"],
    orig: ["MG"],
    dest: ["AC", "AM", "AP", "GO", "MA", "MS", "MT", "PA", "PR", "RS", "RJ", "RO", "RR", "SC", "SP", "TO", "BA", "ES"],
    prag: "Pseudocercospora fijiensis (Mycosphaerella fijiensis)",
    exig: [
      "PTV com a declaração adicional de que a partida é originária de área livre de Sigatoka Negra;",
      "As bananas não podem transitar em cacho, em todo o território nacional;",
      "A partida deve estar livre de folhas de bananeira ou de parte da planta, no acondicionamento dos frutos;",
      "Estas exigências não se aplicam às espécies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;",
      "Estas exigências só se aplicam a partida proveniente do municípios livres de Sigatoka Negra em MG: Águas Vermelhas, Araçuaí, Araguari, Araporã, Bocaiúva, Buritizeiro, Cachoeira Dourada, Campina Verde, Campos Altos, Canápolis, Capinópolis, Capitão Enéias, Carmo do Paranaíba, Carneirinho, Cascalho Rico, Catuti, Centralina, Claro dos Poções, Engenheiro Navarro, Espinosa, Estrela do Sul, Francisco Sá, Franscisco Dumont, Frutal, Guaraciama, Gurinhatã, Indianópolis, Ipiaçu, Iraí de Minas, Itacarambi, Itaobim, Itapagipe, Ituiutaba,Iturama, Jaíba, Janaúba, Januária, Jequitaí, Jequitinhonha, Joaíma, João Pinheiro, Lagamar, Lagoa Formosa, Lassance, Limeira do Oeste, Manga, Matias Cardoso, Mato Verde, Medina, Monte Alegre de Minas, Monte Azul, Monte Carmelo, Montes Claros, Nova Ponte, Nova Porteirinha, Pai Pedro, Paracatu, Patos de Minas, Patrocínio, Pedra de Maria da Cruz, Perdizes, Pirapora, Ponto dos Volantes, Porteirinha, Prata, Presidente Olegário, Rio Paranaíba, Sacramento, Santa Rosa da Serra, Santa Vitória, Santo Antonio do Retiro, São Francisco, São Gonçalo do Abaeté, São Gotardo, São João das Missões, Serra do Salitre, Tapira, Tupaciguara, Uberaba, Uberlândia, Unaí, Varjão de Minas, Várzea da Palma, Vazante, Verdelândia e Veríssimo; ",
      "Municípios de GO com ocorrência de Sigatoka Negra: Amorinópolis, Aragarças, Arenópolis, Baliza, Bom Jardim de Goiás, Caiapônia, Diorama, Doverlândia, Fazenda Nova, Iporá, Israelândia, Ivolândia, Jaupaci, Jussara, Mineiros, Moiporá, Montes Claros de Goiás, Palestina de Goiás, Piranhas, Santa Fé de Goiás e Santa Rita do Araguaia"
    ]
  },
  {
    desc: "DE área livre de Sigatoka Negra PARA área com ocorrência de Sigatoka Negra",
    part: ["frutos", "flores"],
    orig: ["MS"],
    dest: ["AC", "AM", "AP", "GO", "MA", "MG", "MT", "PA", "PR", "RS", "RJ", "RO", "RR", "SC", "SP", "TO", "BA", "ES"],
    prag: "Pseudocercospora fijiensis (Mycosphaerella fijiensis)",
    exig: [
      "PTV com a declaração adicional de que a partida é originária de área livre de Sigatoka Negra;",
      "As bananas não podem transitar em cacho, em todo o território nacional;",
      "A partida deve estar livre de folhas de bananeira ou de parte da planta, no acondicionamento dos frutos;",
      "Estas exigências não se aplicam às espécies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;",
      "Estas exigências só se aplicam a partida proveniente de municípios livres de Sigatoka Negra de MS: Anaurilândia, Aparecida do Taboado, Bataguassú,Batayporã, Cassilândia, Chapadão do Sul, Inocência, Nova Andradina, Paranaíba,   Selvíria, Taquarussú e Três Lagoas;",
      "Municípios de GO com ocorrência de Sigatoka Negra: Amorinópolis, Aragarças, Arenópolis, Baliza, Bom Jardim de Goiás, Caiapônia, Diorama, Doverlândia, Fazenda Nova, Iporá, Israelândia, Ivolândia, Jaupaci, Jussara, Mineiros, Moiporá, Montes Claros de Goiás, Palestina de Goiás, Piranhas, Santa Fé de Goiás e Santa Rita do Araguaia"
    ]
  },
  {
    desc: "DE área livre de Sigatoka Negra PARA área livre de Sigatoka Negra ",
    part: ["frutos", "flores"],
    orig: ["AL", "CE", "DF", "GO", "MG", "MS", "PB", "PE", "PI", "RN", "SE"],
    dest: ["AL", "CE", "DF", "GO", "MG", "MS", "PB", "PE", "PI", "RN", "SE"],
    prag: "Pseudocercospora fijiensis (Mycosphaerella fijiensis)",
    exig: [
      "PTV com a declaração adicional de que a partida é originária de área livre de Sigatoka Negra;",
      "A partida deve estar lacrada para transitar por AC, AM, AP, MA, MG (exceto pelos municípios listados no item 6.1), MS (exceto pelos municípios listados no item 6.2), MT, PA, PR, RS, RJ, RO, RR, SC, SP e TO;",
      "As bananas não podem transitar em cacho, em todo o território nacional;",
      "A partida deve estar livre de folhas de bananeira ou de parte da planta, no acondicionamento dos frutos;",
      "Estas exigências não se aplicam às espécies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;",
      "Nas UFs de GO, MG e de MS estas exigências só se aplicam a partida proveniente e destinada a município livre de Sigatoka Negra: \n\n6.1 - Municípios livres de Sigatoka Negra de MG: Águas Vermelhas, Araçuaí, Araguari, Araporã, Bocaiúva, Buritizeiro, Cachoeira Dourada, Campina Verde, Campos Altos, Canápolis, Capinópolis, Capitão Enéias, Carmo do Paranaíba, Carneirinho, Cascalho Rico, Catuti, Centralina, Claro dos Poções, Engenheiro Navarro, Espinosa, Estrela do Sul, Francisco Sá, Franscisco Dumont, Frutal, Guaraciama, Gurinhatã, Indianópolis, Ipiaçu, Iraí de Minas, Itacarambi, Itaobim, Itapagipe, Ituiutaba,Iturama, Jaíba, Janaúba, Januária, Jequitaí, Jequitinhonha, Joaíma, João Pinheiro, Lagamar, Lagoa Formosa, Lassance, Limeira do Oeste, Manga, Matias Cardoso, Mato Verde, Medina, Monte Alegre de Minas, Monte Azul, Monte Carmelo, Montes Claros, Nova Ponte, Nova Porteirinha, Pai Pedro, Paracatu, Patos de Minas, Patrocínio, Pedra de Maria da Cruz, Perdizes, Pirapora, Ponto dos Volantes, Porteirinha, Prata, Presidente Olegário, Rio Paranaíba, Sacramento, Santa Rosa da Serra, Santa Vitória, Santo Antonio do Retiro, São Francisco, São Gonçalo do Abaeté, São Gotardo, São João das Missões, Serra do Salitre, Tapira, Tupaciguara, Uberaba, Uberlândia, Unaí, Varjão de Minas, Várzea da Palma, Vazante, Verdelândia e Veríssimo; \n\n6.2 - Municípios livres de Sigatoka Negra de MS: Anaurilândia, Aparecida do Taboado, Bataguassú,Batayporã, Cassilândia, Chapadão do Sul, Inocência, Nova Andradina, Paranaíba,   Selvíria, Taquarussú e Três Lagoas;",
      "GO é livre de Sigatoka Negra, EXCETO os seguintes municípios: Amorinópolis, Aragarças, Arenópolis, Baliza, Bom Jardim de Goiás, Caiapônia, Diorama, Doverlândia, Fazenda Nova, Iporá, Israelândia, Ivolândia, Jaupaci, Jussara, Mineiros, Moiporá, Montes Claros de Goiás, Palestina de Goiás, Piranhas, Santa Fé de Goiás e Santa Rita do Araguaia."
    ]
  },
  {
    desc: "DE área com ocorrência de Sigatoka Negra PARA área livre de Sigatoka Negra",
    part: ["frutos", "flores"],
    orig: ["AC", "AM", "AP", "GO", "MA", "MG", "MS", "MT", "PA", "PR", "RS", "RJ", "RO", "RR", "SC", "SP", "TO", "BA", "ES"],
    dest: ["AL", "CE", "DF", "GO", "MG", "MS", "PB", "PE", "PI", "RN", "SE"],
    prag: "Pseudocercospora fijiensis (Mycosphaerella fijiensis)",
    exig: [
      'PTV com a seguinte declaração adicional: "A partida é originária de Unidade de Produção onde foi implantado o Sistema de Mitigação de Risco para Sigatoka Negra";',
      "As bananas não podem transitar em cacho, em todo o território nacional;",
      "A partida deve estar livre de folhas de bananeira ou de parte da planta, no acondicionamento dos frutos;",
      "Estas exigências não se aplicam às espécies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;",
      "Para as UFs de GO, MG e de MS estas exigências só se aplicam a partida destinada a município livre de Sigatoka Negra: \n\n5.1 - Municípios livres de Sigatoka Negra de MG: Águas Vermelhas, Araçuaí, Araguari, Araporã, Bocaiúva, Buritizeiro, Cachoeira Dourada, Campina Verde, Campos Altos, Canápolis, Capinópolis, Capitão Enéias, Carmo do Paranaíba, Carneirinho, Cascalho Rico, Catuti, Centralina, Claro dos Poções, Engenheiro Navarro, Espinosa, Estrela do Sul, Francisco Sá, Franscisco Dumont, Frutal, Guaraciama, Gurinhatã, Indianópolis, Ipiaçu, Iraí de Minas, Itacarambi, Itaobim, Itapagipe, Ituiutaba,Iturama, Jaíba, Janaúba, Januária, Jequitaí, Jequitinhonha, Joaíma, João Pinheiro, Lagamar, Lagoa Formosa, Lassance, Limeira do Oeste, Manga, Matias Cardoso, Mato Verde, Medina, Monte Alegre de Minas, Monte Azul, Monte Carmelo, Montes Claros, Nova Ponte, Nova Porteirinha, Pai Pedro, Paracatu, Patos de Minas, Patrocínio, Pedra de Maria da Cruz, Perdizes, Pirapora, Ponto dos Volantes, Porteirinha, Prata, Presidente Olegário, Rio Paranaíba, Sacramento, Santa Rosa da Serra, Santa Vitória, Santo Antonio do Retiro, São Francisco, São Gonçalo do Abaeté, São Gotardo, São João das Missões, Serra do Salitre, Tapira, Tupaciguara, Uberaba, Uberlândia, Unaí, Varjão de Minas, Várzea da Palma, Vazante, Verdelândia e Veríssimo; \n\n5.2 - Municípios livres de Sigatoka Negra de MS: Anaurilândia, Aparecida do Taboado, Bataguassú,Batayporã, Cassilândia, Chapadão do Sul, Inocência, Nova Andradina, Paranaíba,   Selvíria, Taquarussú e Três Lagoas;",
      "GO é livre de Sigatoka Negra, EXCETO os seguintes municípios: Amorinópolis, Aragarças, Arenópolis, Baliza, Bom Jardim de Goiás, Caiapônia, Diorama, Doverlândia, Fazenda Nova, Iporá, Israelândia, Ivolândia, Jaupaci, Jussara, Mineiros, Moiporá, Montes Claros de Goiás, Palestina de Goiás, Piranhas, Santa Fé de Goiás e Santa Rita do Araguaia."
    ]
  },
  {
    desc: "DE área com ocorrência de Sigatoka Negra PARA área com ocorrência de Sigatoka Negra",
    part: ["frutos", "flores"],
    orig: ["AC", "AM", "AP", "GO", "MA", "MG", "MS", "MT", "PA", "PR", "RS", "RJ", "RO", "RR", "SC", "SP", "TO", "BA", "ES"],
    dest: ["AC", "AM", "AP", "GO", "MA", "MG", "MS", "MT", "PA", "PR", "RS", "RJ", "RO", "RR", "SC", "SP", "TO", "BA", "ES"],
    prag: "Pseudocercospora fijiensis (Mycosphaerella fijiensis)",
    exig: [
      'OU Partida isenta de PTV, sendo porém PROIBIDO o trânsito por Área Livre de Sigatoka Negra, listadas no Item 2; OU PTV com a seguinte declaração adicional: "A partida é originária de Unidade de Produção onde foi implantado o Sistema de Mitigação de Risco para Sigatoka Negra", sendo permitido o trânsito por Área Livre de Sigatoka Negra;',
      "ÁREAS LIVRE DE SIGATOKA NEGRA: Unidades da Federação AL, CE, DF, GO, PB, PE, PI, RN, SE, bem como pelos municípios livres de Sigatoka Negra de MG e de MS: \na) Municípios livres de Sigatoka Negra de MG: Águas Vermelhas, Araçuaí, Araguari, Araporã, Bocaiúva, Buritizeiro, Cachoeira Dourada, Campina Verde, Campos Altos, Canápolis, Capinópolis, Capitão Enéias, Carmo do Paranaíba, Carneirinho, Cascalho Rico, Catuti, Centralina, Claro dos Poções, Engenheiro Navarro, Espinosa, Estrela do Sul, Francisco Sá, Franscisco Dumont, Frutal, Guaraciama, Gurinhatã, Indianópolis, Ipiaçu, Iraí de Minas, Itacarambi, Itaobim, Itapagipe, Ituiutaba,Iturama, Jaíba, Janaúba, Januária, Jequitaí, Jequitinhonha, Joaíma, João Pinheiro, Lagamar, Lagoa Formosa, Lassance, Limeira do Oeste, Manga, Matias Cardoso, Mato Verde, Medina, Monte Alegre de Minas, Monte Azul, Monte Carmelo, Montes Claros, Nova Ponte, Nova Porteirinha, Pai Pedro, Paracatu, Patos de Minas, Patrocínio, Pedra de Maria da Cruz, Perdizes, Pirapora, Ponto dos Volantes, Porteirinha, Prata, Presidente Olegário, Rio Paranaíba, Sacramento, Santa Rosa da Serra, Santa Vitória, Santo Antonio do Retiro, São Francisco, São Gonçalo do Abaeté, São Gotardo, São João das Missões, Serra do Salitre, Tapira, Tupaciguara, Uberaba, Uberlândia, Unaí, Varjão de Minas, Várzea da Palma, Vazante, Verdelândia e Veríssimo; \nb)Municípios livres de Sigatoka Negra de MS: Anaurilândia, Aparecida do Taboado, Bataguassú, Batayporã, Cassilândia, Chapadão do Sul, Inocência, Nova Andradina, Paranaíba,   Selvíria, Taquarussú e Três Lagoas;",
      "Municípios de GO com ocorrência de Sigatoka Negra: Amorinópolis, Aragarças, Arenópolis, Baliza, Bom Jardim de Goiás, Caiapônia, Diorama, Doverlândia, Fazenda Nova, Iporá, Israelândia, Ivolândia, Jaupaci, Jussara, Mineiros, Moiporá, Montes Claros de Goiás, Palestina de Goiás, Piranhas, Santa Fé de Goiás e Santa Rita do Araguaia.",
      "As bananas não podem transitar em cacho, em todo o território nacional;",
      "A partida deve estar livre de folhas de bananeira ou de parte da planta, no acondicionamento dos frutos;",
      "Estas exigências não se aplicam às espécies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;"
    ]
  },
  {
    desc: "DE área livre de Sigatoka Negra PARA área com ocorrência de Sigatoka Negra",
    part: ["mudas"],
    orig: ["AL", "CE", "DF", "GO", "PB", "PE", "PI", "RN", "SE"],
    dest: ["AC", "AM", "AP", "GO", "MA", "MG", "MS", "MT", "PA", "PR", "RS", "RJ", "RO", "RR", "SC", "SP", "TO", "BA", "ES"],
    prag: "Pseudocercospora fijiensis (Mycosphaerella fijiensis)",
    exig: [
      "PTV com a Declaração Adicional constando que a partida é originária de área livre da Sigatoka Negra;",
      "A partida deve estar livre de folhas de bananeira ou de parte da planta, no acondicionamento das mudas;",
      "Estas exigências não se aplicam às espécies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;",
      "GO é livre de Sigatoka Negra, EXCETO os seguintes municípios: Amorinópolis, Aragarças, Arenópolis, Baliza, Bom Jardim de Goiás, Caiapônia, Diorama, Doverlândia, Fazenda Nova, Iporá, Israelândia, Ivolândia, Jaupaci, Jussara, Mineiros, Moiporá, Montes Claros de Goiás, Palestina de Goiás, Piranhas, Santa Fé de Goiás e Santa Rita do Araguaia."
    ]
  },
  {
    desc: "DE área livre de Sigatoka Negra PARA área com ocorrência de Sigatoka Negra",
    part: ["mudas"],
    orig: ["MG"],
    dest: ["AC", "AM", "AP", "GO", "MA", "MS", "MT", "PA", "PR", "RS", "RJ", "RO", "RR", "SC", "SP", "TO", "BA", "ES"],
    prag: "Pseudocercospora fijiensis (Mycosphaerella fijiensis)",
    exig: [
      "PTV com a Declaração Adicional constando que a partida é originária de área livre da Sigatoka Negra;",
      "A partida deve estar livre de folhas de bananeira ou de parte da planta, no acondicionamento das mudas;",
      "Estas exigências não se aplicam às espécies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;",
      "Estas exigências só se aplicam a partida proveniente de municípios livres de Sigatoka Negra de MG: Águas Vermelhas, Araçuaí, Araguari, Araporã, Bocaiúva, Buritizeiro, Cachoeira Dourada, Campina Verde, Campos Altos, Canápolis, Capinópolis, Capitão Enéias, Carmo do Paranaíba, Carneirinho, Cascalho Rico, Catuti, Centralina, Claro dos Poções, Engenheiro Navarro, Espinosa, Estrela do Sul, Francisco Sá, Franscisco Dumont, Frutal, Guaraciama, Gurinhatã, Indianópolis, Ipiaçu, Iraí de Minas, Itacarambi, Itaobim, Itapagipe, Ituiutaba,Iturama, Jaíba, Janaúba, Januária, Jequitaí, Jequitinhonha, Joaíma, João Pinheiro, Lagamar, Lagoa Formosa, Lassance, Limeira do Oeste, Manga, Matias Cardoso, Mato Verde, Medina, Monte Alegre de Minas, Monte Azul, Monte Carmelo, Montes Claros, Nova Ponte, Nova Porteirinha, Pai Pedro, Paracatu, Patos de Minas, Patrocínio, Pedra de Maria da Cruz, Perdizes, Pirapora, Ponto dos Volantes, Porteirinha, Prata, Presidente Olegário, Rio Paranaíba, Sacramento, Santa Rosa da Serra, Santa Vitória, Santo Antonio do Retiro, São Francisco, São Gonçalo do Abaeté, São Gotardo, São João das Missões, Serra do Salitre, Tapira, Tupaciguara, Uberaba, Uberlândia, Unaí, Varjão de Minas, Várzea da Palma, Vazante, Verdelândia e Veríssimo;",
      "GO livre de Sigatoka Negra, EXCETO os seguintes municípios: Amorinópolis, Aragarças, Arenópolis, Baliza, Bom Jardim de Goiás, Caiapônia, Diorama, Doverlândia, Fazenda Nova, Iporá, Israelândia, Ivolândia, Jaupaci, Jussara, Mineiros, Moiporá, Montes Claros de Goiás, Palestina de Goiás, Piranhas, Santa Fé de Goiás e Santa Rita do Araguaia."
    ]
  },
  {
    desc: "DE área livre de Sigatoka Negra PARA área com ocorrência de Sigatoka Negra",
    part: ["mudas"],
    orig: ["MS"],
    dest: ["AC", "AM", "AP", "GO", "MA", "MG", "MS", "MT", "PA", "PR", "RS", "RJ", "RO", "RR", "SC", "SP", "TO", "BA", "ES"],
    prag: "Pseudocercospora fijiensis (Mycosphaerella fijiensis)",
    exig: [
      "PTV com a Declaração Adicional constando que a partida é originária de área livre da Sigatoka Negra;",
      "A partida deve estar livre de folhas de bananeira ou de parte da planta, no acondicionamento das mudas;",
      "exigências não se aplicam às espécies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;",
      "Estas exigências só se aplicam a partida proveniente de municípios livres de Sigatoka Negra de MS: Anaurilândia, Aparecida do Taboado, Bataguassú,Batayporã, Cassilândia, Chapadão do Sul, Inocência, Nova Andradina, Paranaíba,   Selvíria, Taquarussú e Três Lagoas;",
      "GO é livre de Sigatoka Negra, EXCETO os seguintes municípios: Amorinópolis, Aragarças, Arenópolis, Baliza, Bom Jardim de Goiás, Caiapônia, Diorama, Doverlândia, Fazenda Nova, Iporá, Israelândia, Ivolândia, Jaupaci, Jussara, Mineiros, Moiporá, Montes Claros de Goiás, Palestina de Goiás, Piranhas, Santa Fé de Goiás e Santa Rita do Araguaia."
    ]
  },
  {
    desc: "DE área livre de Sigatoka Negra PARA área livre de Sigatoka Negra",
    part: ["mudas"],
    orig: ["AL", "CE", "DF", "GO", "MG", "MS", "PB", "PE", "PI", "RN", "SE"],
    dest: ["AL", "CE", "DF", "GO", "MG", "MS", "PB", "PE", "PI", "RN", "SE"],
    prag: "Pseudocercospora fijiensis (Mycosphaerella fijiensis)",
    exig: [
      "PTV com a Declaração Adicional constando que a partida é originária de área livre da Sigatoka Negra.",
      "A partida deve estar lacrada para transitar por AC, AM, AP, MA, MG (exceto pelos municípios listados no item 5.1), MS (exceto pelos municípios listados no item 5.2), MT, PA, PR, RS, RJ, RO, RR, SC, SP e TO;",
      "A partida deve estar livre de folhas de bananeira ou de parte da planta, no acondicionamento das mudas;",
      "Estas exigências não se aplicam às espécies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;",
      "Para as Ufs de MG e MS estas exigências só se aplicam a partida proveniente e destinada a município livre de Sigatoka Negra: \n\n5.1 -  Municípios livres de Sigatoka Negra de MG: Águas Vermelhas, Araçuaí, Araguari, Araporã, Bocaiúva, Buritizeiro, Cachoeira Dourada, Campina Verde, Campos Altos, Canápolis, Capinópolis, Capitão Enéias, Carmo do Paranaíba, Carneirinho, Cascalho Rico, Catuti, Centralina, Claro dos Poções, Engenheiro Navarro, Espinosa, Estrela do Sul, Francisco Sá, Franscisco Dumont, Frutal, Guaraciama, Gurinhatã, Indianópolis, Ipiaçu, Iraí de Minas, Itacarambi, Itaobim, Itapagipe, Ituiutaba, Iturama, Jaíba, Janaúba, Januária, Jequitaí, Jequitinhonha, Joaíma, João Pinheiro, Lagamar, Lagoa Formosa, Lassance, Limeira do Oeste, Manga, Matias Cardoso, Mato Verde, Medina, Monte Alegre de Minas, Monte Azul, Monte Carmelo, Montes Claros, Nova Ponte, Nova Porteirinha, Pai Pedro, Paracatu, Patos de Minas, Patrocínio, Pedra de Maria da Cruz, Perdizes, Pirapora, Ponto dos Volantes, Porteirinha, Prata, Presidente Olegário, Rio Paranaíba, Sacramento, Santa Rosa da Serra, Santa Vitória, Santo Antonio do Retiro, São Francisco, São Gonçalo do Abaeté, São Gotardo, São João das Missões, Serra do Salitre, Tapira, Tupaciguara, Uberaba, Uberlândia, Unaí, Varjão de Minas, Várzea da Palma, Vazante, Verdelândia e Veríssimo; \n\n5.2 - Municípios livres de Sigatoka Negra de MS: Anaurilândia, Aparecida do Taboado, Bataguassú, Batayporã, Cassilândia, Chapadão do Sul, Inocência, Nova Andradina, Paranaíba,   Selvíria, Taquarussú e Três Lagoas;",
      "Estas exigências só se aplicam a mudas não micropopagadas;",
      "GO é livre de Sigatoka Negra, EXCETO os seguintes municípios: Amorinópolis, Aragarças, Arenópolis, Baliza, Bom Jardim de Goiás, Caiapônia, Diorama, Doverlândia, Fazenda Nova, Iporá, Israelândia, Ivolândia, Jaupaci, Jussara, Mineiros, Moiporá, Montes Claros de Goiás, Palestina de Goiás, Piranhas, Santa Fé de Goiás e Santa Rita do Araguaia"
    ]
  },
  {
    desc: "DE área com ocorrência de Sigatoka Negra PARA área livre de Sigatoka Negra",
    part: ["mudas"],
    orig: ["AC", "AM", "AP", "GO", "MA", "MG", "MS", "MT", "PA", "PR", "RS", "RJ", "RO", "RR", "SC", "SP", "TO", "BA", "ES"],
    dest: ["AL", "CE", "DF", "GO", "MG", "MS", "PB", "PE", "PI", "RN", "SE"],
    prag: "Pseudocercospora fijiensis (Mycosphaerella fijiensis)",
    exig: [
      "TRÂNSITO PROIBIDO para mudas convencionais. Esta proibição não se aplica à mudas micropopagadas;",
      "Esta proibição não se aplica às espécies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;",
      "Para as UFs de MG e MS, esta proibição só se aplica a partida destinada a município livre de Sigatoka Negra:\n\n3.1 - Municípios livres de Sigatoka Negra de MG: Águas Vermelhas, Araçuaí, Araguari, Araporã, Bocaiúva, Buritizeiro, Cachoeira Dourada, Campina Verde, Campos Altos, Canápolis, Capinópolis, Capitão Enéias, Carmo do Paranaíba, Carneirinho, Cascalho Rico, Catuti, Centralina, Claro dos Poções, Engenheiro Navarro, Espinosa, Estrela do Sul, Francisco Sá, Franscisco Dumont, Frutal, Guaraciama, Gurinhatã, Indianópolis, Ipiaçu, Iraí de Minas, Itacarambi, Itaobim, Itapagipe, Ituiutaba,Iturama, Jaíba, Janaúba, Januária, Jequitaí, Jequitinhonha, Joaíma, João Pinheiro, Lagamar, Lagoa Formosa, Lassance, Limeira do Oeste, Manga, Matias Cardoso, Mato Verde, Medina, Monte Alegre de Minas, Monte Azul, Monte Carmelo, Montes Claros, Nova Ponte, Nova Porteirinha, Pai Pedro, Paracatu, Patos de Minas, Patrocínio, Pedra de Maria da Cruz, Perdizes, Pirapora, Ponto dos Volantes, Porteirinha, Prata, Presidente Olegário, Rio Paranaíba, Sacramento, Santa Rosa da Serra, Santa Vitória, Santo Antonio do Retiro, São Francisco, São Gonçalo do Abaeté, São Gotardo, São João das Missões, Serra do Salitre, Tapira, Tupaciguara, Uberaba, Uberlândia, Unaí, Varjão de Minas, Várzea da Palma, Vazante, Verdelândia e Veríssimo;\n\n3.2 - Municípios livres de Sigatoka Negra de MS: Anaurilândia, Aparecida do Taboado, Bataguassú,Batayporã, Cassilândia, Chapadão do Sul, Inocência, Nova Andradina, Paranaíba,   Selvíria, Taquarussú e Três Lagoas;",
      "GO é livre de Sigatoka Negra, EXCETO os seguintes municípios: Amorinópolis, Aragarças, Arenópolis, Baliza, Bom Jardim de Goiás, Caiapônia, Diorama, Doverlândia, Fazenda Nova, Iporá, Israelândia, Ivolândia, Jaupaci, Jussara, Mineiros, Moiporá, Montes Claros de Goiás, Palestina de Goiás, Piranhas, Santa Fé de Goiás e Santa Rita do Araguaia."
    ]
  },
  {
    desc: "DE área com ocorrência de Sigatoka Negra PARA área com ocorrência de Sigatoka Negra",
    part: ["mudas"],
    orig: ["AC", "AM", "AP", "GO", "MA", "MG", "MS", "MT", "PA", "PR", "RS", "RJ", "RO", "RR", "SC", "SP", "TO", "BA", "ES"],
    dest: ["AC", "AM", "AP", "GO", "MA", "MG", "MS", "MT", "PA", "PR", "RS", "RJ", "RO", "RR", "SC", "SP", "TO", "BA", "ES"],
    prag: "Pseudocercospora fijiensis (Mycosphaerella fijiensis)",
    exig: [
      "TRÂNSITO PROIBIDO para mudas convencionais. Esta proibição não se aplica à mudas micropopagadas;",
      "Esta proibição não se aplica a partida proveniente de município livre de Sigatoka Negra de MG e de MS: \n\na)Municípios livres de Sigatoka Negra de MG: Águas Vermelhas, Araçuaí, Araguari, Araporã, Bocaiúva, Buritizeiro, Cachoeira Dourada, Campina Verde, Campos Altos, Canápolis, Capinópolis, Capitão Enéias, Carmo do Paranaíba, Carneirinho, Cascalho Rico, Catuti, Centralina, Claro dos Poções, Engenheiro Navarro, Espinosa, Estrela do Sul, Francisco Sá, Franscisco Dumont, Frutal, Guaraciama, Gurinhatã, Indianópolis, Ipiaçu, Iraí de Minas, Itacarambi, Itaobim, Itapagipe, Ituiutaba,Iturama, Jaíba, Janaúba, Januária, Jequitaí, Jequitinhonha, Joaíma, João Pinheiro, Lagamar, Lagoa Formosa, Lassance, Limeira do Oeste, Manga, Matias Cardoso, Mato Verde, Medina, Monte Alegre de Minas, Monte Azul, Monte Carmelo, Montes Claros, Nova Ponte, Nova Porteirinha, Pai Pedro, Paracatu, Patos de Minas, Patrocínio, Pedra de Maria da Cruz, Perdizes, Pirapora, Ponto dos Volantes, Porteirinha, Prata, Presidente Olegário, Rio Paranaíba, Sacramento, Santa Rosa da Serra, Santa Vitória, Santo Antonio do Retiro, São Francisco, São Gonçalo do Abaeté, São Gotardo, São João das Missões, Serra do Salitre, Tapira, Tupaciguara, Uberaba, Uberlândia, Unaí, Varjão de Minas, Várzea da Palma, Vazante, Verdelândia e Veríssimo; \n\nb)Municípios livres de Sigatoka Negra de MS: Anaurilândia, Aparecida do Taboado, Bataguassú,Batayporã, Cassilândia, Chapadão do Sul, Inocência, Nova Andradina, Paranaíba,   Selvíria, Taquarussú e Três Lagoas;",
      "Esta proibição não se aplica às espécies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;",
      "Municípios de GO com ocorrência de Sigatoka Negra: Amorinópolis, Aragarças, Arenópolis, Baliza, Bom Jardim de Goiás, Caiapônia, Diorama, Doverlândia, Fazenda Nova, Iporá, Israelândia, Ivolândia, Jaupaci, Jussara, Mineiros, Moiporá, Montes Claros de Goiás, Palestina de Goiás, Piranhas, Santa Fé de Goiás e Santa Rita do Araguaia;",
      "Esta proibição só se aplica a mudas não micropopagadas;"
    ]
  },
  {
    desc: "DE UF com ocorrência de Anthonomus tomentosus PARA UF sem a ocorrência de Anthonomus tomentosus",
    part: ["frutos"],
    orig: ["AP", "RR"],
    dest: ["AC", "AL", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RS", "SC", "SE", "SP", "TO"],
    prag: "Anthonomus tomentosus",
    exig: [
      "Se a partida for proveniente de Boa Vista, Mucajaí e Pacaraima: TRÂNSITO PROIBIDO;",
      'Se a partida não for proveniente dos municípios de Boa Vista, Mucajaí e Pacaraima: PTV com a seguinte declaração adicional: "A partida foi inspecionada e encontra-se livre de Anthonomus tomentosus"; ',
      "Estas exigências fitossanitárias só se aplicam a frutos frescos;"
    ]
  },
  {
    desc: "DE UF de status fitossanitário desconhecido para Cancro Cítrico PARA Área Sem Ocorrência, Área Livre de Praga – ALP, Área sob Sistema de Mitigação de Risco - SMR e Área sob Erradicação",
    part: ["frutos", "material de propagação", "mudas", "estacas", "gemas", "plantas"],
    orig: ["AC", "AL", "AP", "MA", "PI", "RN"],
    dest: ["AM", "BA", "CE", "DF", "ES", "GO", "MG", "MS", "MT", "PA", "PB", "PE", "PR", "RJ", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
    prag: "Xanthomonas citri subsp. citri",
    exig: ["Proibida a emissão de PTV. TRÂNSITO PROIBIDO."]
  },
  {
    desc: "DE UF de status fitossanitário desconhecido para Cancro Cítrico PARA Área Sem Ocorrência, Área Livre de Praga – ALP, Área sob Sistema de Mitigação de Risco - SMR e Área sob Erradicação",
    part: ["frutos", "material de propagação", "mudas", "estacas", "gemas", "plantas"],
    orig: ["PR"],
    dest: ["AM", "BA", "CE", "DF", "ES", "GO", "MG", "MS", "MT", "PA", "PB", "PE", "PR", "RJ", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
    prag: "Xanthomonas citri subsp. citri",
    exig: ["Se a partida tiver origem os municípios de Adrianópolis, Agudos do Sul, Almirante Tamandaré, Araucária, Antonina, Balsa Nova, Bocaiuva do Sul, Campina Grande do Sul, Campo Largo, Campo Magro, Cerro Azul, Colombo, Contenda, Curitiba, Doutor Ulysses, Fazenda Rio Grande, Guaraqueçaba, Guaratuba, Itaperuçu, Mandirituba, Matinhos, Morretes, Paranaguá, Pinhais, Piraquara, Pontal do Paraná, Quatro Barras, Rio Branco do Sul, São José dos Pinhais, Tijucas do Sul e Tunas do Paraná: Proibida a emissão de PTV. TRÂNSITO PROIBIDO."]
  },
  {
    desc: "DE Área Sem Ocorrência de Cancro Cítrico PARA Área Sem Ocorrência, Área Livre de Praga, Área sob Sistema de Mitigação de Risco ou Área sob Erradicação",
    part: ["frutos"],
    orig: ["AM", "BA", "DF", "ES", "GO", "PB", "PE", "RO", "RJ", "SE", "TO"],
    dest: ["AM", "BA", "CE", "DF", "ES", "GO", "MG", "MT", "MS", "PA", "PB", "PE", "RJ", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
    prag: "Xanthomonas citri subsp. citri",
    exig: [
      'PTV com a seguinte DA: "Os frutos são originários de Área Sem Ocorrência de Cancro Cítrico (Xanthomonas citri subsp. citri), oficialmente reconhecida".'
    ]
  },
  {
    desc: "DE Área Sem Ocorrência de Cancro Cítrico PARA Área Sem Ocorrência, Área Livre de Praga, Área sob Sistema de Mitigação de Risco ou Área sob Erradicação",
    part: ["material de propagação", "mudas", "estacas", "gemas", "plantas"],
    orig: ["AM", "BA", "DF", "ES", "GO", "PB", "PE", "RO", "RJ", "SE", "TO"],
    dest: ["AM", "BA", "CE", "DF", "ES", "GO", "MG", "MT", "MS", "PA", "PB", "PE", "RJ", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
    prag: "Xanthomonas citri subsp. citri",
    exig: [
      'PTV com a seguinte DA: "O material de propagação é originário de Área Sem Ocorrência de Cancro Cítrico (Xanthomonas citri subsp. citri), oficialmente reconhecida".'
    ]
  },
  {
    desc: "DE Área Sem Ocorrência de Cancro Cítrico PARA o Estado do Paraná",
    part: ["frutos"],
    orig: ["AM", "BA", "DF", "ES", "GO", "PB", "PE", "RO", "RJ", "SE", "TO"],
    dest: ["PR"],
    prag: "Xanthomonas citri subsp. citri",
    exig: [
      'Se a partida tiver como destino qualquer  município que NÃO seja Adrianópolis, Agudos do Sul, Almirante Tamandaré, Araucária, Antonina, Balsa Nova, Bocaiuva do Sul, Campina Grande do Sul, Campo Largo, Campo Magro, Cerro Azul, Colombo, Contenda, Curitiba, Doutor Ulysses, Fazenda Rio Grande, Guaraqueçaba, Guaratuba, Itaperuçu, Mandirituba, Matinhos, Morretes, Paranaguá, Pinhais, Piraquara, Pontal do Paraná, Quatro Barras, Rio Branco do Sul, São José dos Pinhais, Tijucas do Sul e Tunas do Paraná: PTV com a seguinte DA: "Os frutos são originários de Área Sem Ocorrência de Cancro Cítrico (Xanthomonas citri subsp. citri), oficialmente reconhecida".'
    ]
  },
  {
    desc: "DE Área Sem Ocorrência de Cancro Cítrico PARA o Estado do Paraná",
    part: ["material de propagação", "mudas", "estacas", "gemas", "plantas"],
    orig: ["AM", "BA", "DF", "ES", "GO", "PB", "PE", "RO", "RJ", "SE", "TO"],
    dest: ["PR"],
    prag: "Xanthomonas citri subsp. citri",
    exig: [
      'Se a partida tiver como destino qualquer  município que NÃO seja Adrianópolis, Agudos do Sul, Almirante Tamandaré, Araucária, Antonina, Balsa Nova, Bocaiuva do Sul, Campina Grande do Sul, Campo Largo, Campo Magro, Cerro Azul, Colombo, Contenda, Curitiba, Doutor Ulysses, Fazenda Rio Grande, Guaraqueçaba, Guaratuba, Itaperuçu, Mandirituba, Matinhos, Morretes, Paranaguá, Pinhais, Piraquara, Pontal do Paraná, Quatro Barras, Rio Branco do Sul, São José dos Pinhais, Tijucas do Sul e Tunas do Paraná: PTV com a seguinte DA: "O material de propagação é originário de Área Sem Ocorrência de Cancro Cítrico (Xanthomonas citri subsp. citri), oficialmente reconhecida".'
    ]
  },
  {
    desc: "DE Área Livre de Cancro Cítrico PARA qualquer Área Sem Ocorrência, Área Livre de Praga, Área sob Sistema de Mitigação de Risco ou Área sob Erradicação",
    part: ["frutos"],
    orig: ["PA"],
    dest: ["AM", "BA", "CE", "DF", "ES", "GO", "MG", "MT", "MS", "PB", "PE", "RJ", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
    prag: "Xanthomonas citri subsp. citri",
    exig: [
      'PTV com a seguinte DA: "Os frutos são originários de Área Livre de Praga para o Cancro Cítrico (Xanthomonas citri subsp. citri) oficialmente reconhecida".'
    ]
  },
  {
    desc: "DE Área Livre de Cancro Cítrico PARA qualquer Área Sem Ocorrência, Área Livre de Praga, Área sob Sistema de Mitigação de Risco ou Área sob Erradicação",
    part: ["material de propagação", "mudas", "estacas", "gemas", "plantas"],
    orig: ["PA"],
    dest: ["AM", "BA", "CE", "DF", "ES", "GO", "MG", "MT", "MS", "PB", "PE", "RJ", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
    prag: "Xanthomonas citri subsp. citri",
    exig: [
      'PTV com a seguinte DA: "O material de propagação é originário de Área Livre de Praga para o Cancro Cítrico (Xanthomonas citri subsp. citri) oficialmente reconhecida".'
    ]
  },
  {
    desc: "DE Área Livre de Cancro Cítrico PARA o Estado do Paraná",
    part: ["frutos"],
    orig: ["PA"],
    dest: ["PR"],
    prag: "Xanthomonas citri subsp. citri",
    exig: [
      'Se a partida tiver como destino qualquer  município que NÃO seja Adrianópolis, Agudos do Sul, Almirante Tamandaré, Araucária, Antonina, Balsa Nova, Bocaiuva do Sul, Campina Grande do Sul, Campo Largo, Campo Magro, Cerro Azul, Colombo, Contenda, Curitiba, Doutor Ulysses, Fazenda Rio Grande, Guaraqueçaba, Guaratuba, Itaperuçu, Mandirituba, Matinhos, Morretes, Paranaguá, Pinhais, Piraquara, Pontal do Paraná, Quatro Barras, Rio Branco do Sul, São José dos Pinhais, Tijucas do Sul e Tunas do Paraná: PTV com a seguinte DA: "Os frutos são originários de Área Livre de Praga para o Cancro Cítrico (Xanthomonas citri subsp. citri) oficialmente reconhecida".'
    ]
  },
  {
    desc: "DE Área Livre de Cancro Cítrico PARA o Estado do Paraná",
    part: ["material de propagação", "mudas", "estacas", "gemas", "plantas"],
    orig: ["PA"],
    dest: ["PR"],
    prag: "Xanthomonas citri subsp. citri",
    exig: [
      'Se a partida tiver como destino qualquer  município que NÃO seja Adrianópolis, Agudos do Sul, Almirante Tamandaré, Araucária, Antonina, Balsa Nova, Bocaiuva do Sul, Campina Grande do Sul, Campo Largo, Campo Magro, Cerro Azul, Colombo, Contenda, Curitiba, Doutor Ulysses, Fazenda Rio Grande, Guaraqueçaba, Guaratuba, Itaperuçu, Mandirituba, Matinhos, Morretes, Paranaguá, Pinhais, Piraquara, Pontal do Paraná, Quatro Barras, Rio Branco do Sul, São José dos Pinhais, Tijucas do Sul e Tunas do Paraná: PTV com a seguinte DA: "O material de propagação é originário de Área Livre de Praga para o Cancro Cítrico (Xanthomonas citri subsp. citri) oficialmente reconhecida".'
    ]
  },
  {
    desc: "DE Área de Sistema de Manejo de Risco (SMR) de Cancro Cítrico PARA qualquer UF",
    part: ["material de propagação", "mudas", "estacas", "gemas", "plantas"],
    orig: ["MT", "MS", "RS", "SP", "SC"],
    dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
    prag: "Xanthomonas citri subsp. citri",
    exig: [
      'PTV com a seguinte DA: "O material de propagação é proveniente de Área sob SMR, se encontra livre de Cancro Cítrico (Xanthomonas citri subsp. citri) e foi produzido conforme preconiza a legislação específica em vigor".'
    ]
  },
  {
    desc: "DE Área de Sistema de Manejo de Risco (SMR) de Cancro Cítrico PARA qualquer UF",
    part: ["material de propagação", "mudas", "estacas", "gemas", "plantas"],
    orig: ["PR"],
    dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
    prag: "Xanthomonas citri subsp. citri",
    exig: [
      "SE A PARTIDA TIVER COMO ORIGEM UM DOS MUNICÍPIOS DE RISCO DESCONHECIDO (Adrianópolis, Agudos do Sul, Almirante Tamandaré, Araucária, Antonina, Balsa Nova, Bocaiuva do Sul, Campina Grande do Sul, Campo Largo, Campo Magro, Cerro Azul, Colombo, Contenda, Curitiba, Doutor Ulysses, Fazenda Rio Grande, Guaraqueçaba, Guaratuba, Itaperuçu, Mandirituba, Matinhos, Morretes, Paranaguá, Pinhais, Piraquara, Pontal do Paraná, Quatro Barras, Rio Branco do Sul, São José dos Pinhais, Tijucas do Sul e Tunas do Paraná): Proibida a emissão de PTV. TRÂNSITO PROIBIDO.",
      'SE A PARTIDA TIVER COMO ORIGEM OS DEMAIS MUNICÍPIOS, QUE SÃO ÁREAS DE MITIGAÇÃO DE RISCO: PTV com a seguinte DA: "O material de propagação é proveniente de Área sob SMR, se encontra livre de Cancro Cítrico (Xanthomonas citri subsp. citri) e foi produzido conforme preconiza a legislação específica em vigor".'
    ]
  },
  {
    desc: "DE Sistema de Manejo de Risco (SMR) de Cancro Cítrico PARA qualquer UF",
    part: ["frutos"],
    orig: ["MT", "MS", "PR", "RS", "SP", "SC"],
    dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
    prag: "Xanthomonas citri subsp. citri",
    exig: [
      'Se a partida contém frutos infestados oriundos de imóvel sob Sistema de Mitigação de Risco (SMR), e tem como destino Indústria de suco, localizada em UF limítrofe, que não está localizada em ALP ou em Área Sem Ocorrência de Cancro Cítrico: \na)PTV com a seguinte DA: "Frutos contaminados com Cancro Cítrico (Xanthomonas citri subsp. citri) destinados exclusivamente à indústria". \nb)Os frutos devem ser transportados em veículo fechado ou coberto, e lacrado',
      'Se a partida NÃO contém frutos infestados e é oriunda de imóvel cadastrado no SMR para o Cancro Cítrico e tem como destino	UC ou indústria localizada em UF limítrofe:  \na) PTV com uma das seguintes DAs: \n- "Os frutos foram produzidos em UP, de imóvel cadastrado no SMR para o Cancro Cítrico, que apresentou até um por cento de frutos com sintomas de Cancro Cítrico (Xanthomonas citri subsp. citri) e se destinam a indústria"; OU \n- "Os frutos foram produzidos em UP, de imóvel cadastrado no SMR para o Cancro Cítrico, que apresentou até um por cento de frutos com sintomas de Cancro Cítrico (Xanthomonas citri subsp. citri) e se destinam ao beneficiamento em Unidade de Consolidação". \nb) Os frutos devem ser transportados em veículo fechado ou coberto e lacrado',
      'Se a partida for formada por frutos oriundos de imóvel sem ocorrência do Cancro Cítrico, localizado em Área sob SMR, com destino para UC ou indústria, localizada em qualquer UF: 	\na) PTV com uma das seguintes DAs: \n- "Os frutos são provenientes de imóvel sem ocorrência do Cancro Cítrico (Xanthomonas citri subsp. citri), localizado em Área sob SMR, e se destinam a indústria"; OU \n- "Os frutos são provenientes de imóvel sem ocorrência do Cancro Cítrico (Xanthomonas citri subsp. citri), localizado em Área sob SMR, e se destinam ao beneficiamento em Unidade de Consolidação". \nb) Os frutos devem ser transportados em veículo fechado ou coberto',
      'Para todas as demais situações de produtos oriundos de Área de SMR: \na) PTV com as seguintes DAs: \n- "Os frutos são originários de Unidade de Produção onde foi implantado o Sistema de Mitigação de Risco (SMR) reconhecido oficialmente, foram higienizados por imersão em solução com Hipoclorito de Sódio a duzentos ppm, pH sete, durante dois minutos e se encontram sem sintomas de Cancro Cítrico (Xanthomonas citri subsp. citri)". \n- Se as embalagens descartáveis ou em caixas plásticas retornáveis forem higienizadas por PULVERIZAÇÃO, adicionar a seguinte DA: "As caixas plásticas retornáveis foram higienizadas por pulverização em solução de cloreto de benzalcônio (amônio quaternário) 125 (cento e vinte e cinco) gramas/litro, na concentração de 0,1% (um décimo percentual)". \n- Se as embalagens descartáveis ou em caixas plásticas retornáveis forem higienizadas por IMERSÃO, adicionar a seguinte DA: "As caixas plásticas retornáveis foram higienizadas por imersão em solução de cloreto de benzalcônio (amônio quaternário) 125 (cento e vinte e cinco) gramas/litro, na concentração de 0,1% (um décimo percentual)" \nb) Os frutos devem ser transportados em veículo fechado ou coberto, seja para transporte a granel, em embalagens descartáveis ou em caixas plásticas retornáveis'
    ]
  },
  {
    desc: "DE Área sob Erradicação de Cancro Cítrico PARA qualquer UF",
    part: ["frutos"],
    orig: ["CE", "MG", "RR"],
    dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
    prag: "Xanthomonas citri subsp. citri",
    exig: [
      'PTV com uma das seguintes DAs: \n -"Os frutos são provenientes de plantas sadias de imóvel sob supervisão oficial, localizado em Área sob Erradicação, foram higienizados com Hipoclorito de Sódio a duzentos ppm, pH sete, durante dois minutos e encontram-se livres de Xanthomonas citri subsp. citri".\n -"Os frutos são provenientes de plantas sadias de imóvel sob supervisão oficial, localizado em Área sob Erradicação, e se destinam à indústria".\n -"Os frutos são provenientes de imóvel sem ocorrência do Cancro Cítrico (Xanthomonas citri subsp. citri), localizado em Área sob Erradicação".'
    ]
  },
  {
    desc: "DE Área sob Erradicação de Cancro Cítrico PARA qualquer UF",
    part: ["material de propagação", "mudas", "estacas", "gemas", "plantas"],
    orig: ["CE", "MG", "RR"],
    dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
    prag: "Xanthomonas citri subsp. citri",
    exig: [
      'PTV com a seguinte DA: "O material de propagação é proveniente de Área sob Erradicação e foi produzido em imóvel sem ocorrência de Cancro Cítrico (Xanthomonas citri subsp. citri), conforme preconiza a legislação específica vigente".'
    ]
  }
];

// src/dbPragas.ts
const pragas = [
  {
    prag: "Bactrocera carambolae",
    pragc: "MOSCA-DA-CARAMBOLA",
    hosp: [
      "Anacardium occidentale",
      "Arenga pinnata",
      "Artocarpus altilis",
      "Artocarpus integrifolia",
      "Averrhoa bilimbi",
      "Averrhoa carambola",
      "Capsicum annuum",
      "Chrysobalanus icaco",
      "Citrus aurantium",
      "Citrus paradisi",
      "Citrus reticulata",
      "Citrus sinensis",
      "Eugenia uniflora",
      "Garcinia dulcis",
      "Licopersicum esculentum",
      "Malpighia emarginata",
      "Mangifera indica",
      "Manilkara zapota",
      "Psidium guajava",
      "Spondias mombin",
      "Spondias lutea",
      "Syzygium aqueum",
      "Syzygium jambos",
      "Syzygium malaccense",
      "Syzygium samarangense",
      "Terminalia catappa",
      "Ziziphus jujuba",
      "Ziziphus mauritiana",
      "Bysonima crassifolia",
      "Capsicum chinense",
      "Chrysophyllum cainito",
      "Eugenia stipitata",
      "Licania sp.",
      "Pouteria caimito",
      "Pouteria macrophylla",
      "Psidium guineense",
      "Rollinia omucosa",
      "Syzygium cumini"
    ],
    files: [
      {leg: "Instrução Normativa nº 28, de 20 de julho de 2017", link: "IN28-2017.pdf"},
      {leg: "Resolução nº 04, de 29 de março de 2019 [Pará]", link: "RES04-2019.pdf"},
      {leg: "Resolução nº 06, de 13 de junho de 2019 [Roraima]", link: "RES06-2019.pdf"}
    ]
  },
  {
    prag: "Schizotetranychus hindustanicus",
    pragc: "ÁCARO HINDU",
    hosp: [
      "Cocos nucifera",
      "Azadirachta indica",
      "Sorghum bicolor",
      "Acacia spp.",
      "Melia azedarach",
      "Citrus spp."
    ],
    files: [
      {leg: "Instrução Normativa MAPA nº 8, de 17 de abril de 2012", link: "IN08-2012.pdf"}
    ]
  },
  {
    prag: "Sternochetus mangiferae",
    pragc: "GORGULHO DA MANGA",
    hosp: ["Mangifera indica"],
    files: [
      {
        leg: "Instrução Normativa MAPA/SDA nº. 34, de 05 de setembro de 2017",
        link: "IN34-2017.pdf"
      }
    ]
  },
  {
    prag: "BSV e CMV",
    pragc: "BANANA STREAK VIRUS e CUCUMBER MOSAIC VIRUS",
    hosp: ["Musa spp."],
    files: [
      {leg: "Instrução Normativa MAPA nº 46, de 27 de dezembro de 2010", link: "IN46-2010.pdf"}
    ]
  },
  {
    prag: "Xanthomonas campestris pv. viticola",
    pragc: "CANCRO-DA-VIDEIRA",
    hosp: ["Vitis spp. e seus híbridos"],
    files: [
      {leg: "Instrução Normativa MAPA nº 2, de 6 de fevereiro de 2014", link: "IN02-2014.pdf"}
    ]
  },
  {
    prag: "Neonectria ditissima (Neonectria galligena)",
    pragc: "CANCRO EUROPEU DAS POMÁCEAS",
    hosp: ["Malus sp."],
    files: [{leg: "Instrução Normativa nº 20, de 20 de junho de 2013", link: "IN20-2013.pdf"}]
  },
  {
    prag: "Candidatus liberibacter americanus e Candidatus liberibacter asiaticus",
    pragc: "GREENING",
    hosp: ["Citrus spp.", "Fortunella spp.", "Poncirus spp.", "Murraya paniculata"],
    files: [{leg: "Instrução Normativa nº 53, de 16 de outubro de 2008", link: "IN53-2008.pdf"}]
  },
  {
    prag: "Phyllosticta citricarpa (Guinardia citricarpa)",
    pragc: "PINTA-PRETA-DOS-CITROS",
    hosp: ["Citrus spp."],
    files: [
      {leg: "Instrução Normativa MAPA nº 3, de 8 de janeiro de 2008", link: "IN03-2008.pdf"}
    ]
  },
  {
    prag: "Ralstonia solanacearum raça 2",
    pragc: "MOKO-DA-BANANEIRA",
    hosp: ["Musa spp.", "Heliconia spp."],
    files: [
      {leg: "Instrução Normativa SDA/MAPA nº 17, de 27 de maio de 2009", link: "IN17-2009.pdf"}
    ]
  },
  {
    prag: "Pseudocercospora fijiensis (Mycosphaerella fijiensis)",
    pragc: "SIGATOKA NEGRA",
    hosp: ["Musa spp.", "Heliconia spp."],
    files: [
      {leg: "Instrução Normativa SDA/MAPA nº 17, de 31 de maio de 2005", link: "IN17-2005.pdf"}
    ]
  },
  {
    prag: "Anthonomus tomentosus",
    pragc: "ANTHONOMUS TOMENTOSUS",
    hosp: ["Malpighia spp."],
    files: [
      {
        leg: "Instrução Normativa MAPA/SDA nº. 38, de 01 de outubro de 2018",
        link: "IN38-2018.pdf"
      }
    ]
  },
  {
    prag: "Xanthomonas citri subsp. citri",
    pragc: "CANCRO CÍTRICO",
    hosp: ["Citrus spp.", "Fortunella spp.", "Poncirus spp."],
    files: [{leg: "Instrução Normativa nº 21, de 25 de abril de 2018", link: "IN21-2018.pdf"}]
  }
];

// src/dbHospedeiros.ts
const hospedeiros = [
  {nomeVul: "Abacate (Persea gratissima)", nomeSci: "Persea gratissima", count: 1},
  {nomeVul: "Abeto Europeu", nomeSci: "Picea abies", count: 1},
  {nomeVul: "Abeto Vermelho Comum", nomeSci: "Picea abies", count: 1},
  {nomeVul: "Abiu (C. cainito)", nomeSci: "Chrysophyllum cainito", count: 1},
  {nomeVul: "Abiu (P. cainito)", nomeSci: "Pouteria caimito", count: 1},
  {nomeVul: "Acácia", nomeSci: "Acacia spp.", count: 2},
  {nomeVul: "Acerola(qualquer espécie)", nomeSci: "Malpighia spp.", count: 1},
  {nomeVul: "Acerola (M. punicifolia)", nomeSci: "Malpighia punicifolia", count: 1},
  {nomeVul: "Acerola (M. emarginata)", nomeSci: "Malpighia emarginata", count: 1},
  {nomeVul: "Ajuru", nomeSci: "Chrysobalanus icaco", count: 1},
  {nomeVul: "Álamo (Populus x canadensis)", nomeSci: "Populus x canadensis", count: 1},
  {nomeVul: "Álamo Americano", nomeSci: "Tilia americana", count: 1},
  {nomeVul: "Álamo Branco", nomeSci: "Populus alba", count: 1},
  {nomeVul: "Álamo Grande Dente", nomeSci: "Populus grandidenta", count: 1},
  {nomeVul: "Álamo", nomeSci: "Populus spp.", count: 1},
  {nomeVul: "Albízia", nomeSci: "Albizia lebbeck", count: 1},
  {nomeVul: "Alder Cinza", nomeSci: "Alnus incana", count: 1},
  {nomeVul: "Alder Japonês", nomeSci: "Alnus japonica", count: 1},
  {nomeVul: "Alder Negro", nomeSci: "Alnus glutinosa", count: 1},
  {nomeVul: "Alder Vermelha", nomeSci: "Alnus rubra", count: 1},
  {nomeVul: "Alder", nomeSci: "Alnus sp.", count: 1},
  {nomeVul: "Algodão Americano", nomeSci: "Populus wislizeni", count: 1},
  {nomeVul: "Ameixa", nomeSci: "Prunus spp.", count: 1},
  {nomeVul: "Ameixa-roxa", nomeSci: "Syzygium cumini", count: 0},
  {nomeVul: "Ameixeira-japonesa", nomeSci: "Prunus salicina", count: 1},
  {nomeVul: "Amelanchier", nomeSci: "Amelanchier laevis", count: 1},
  {nomeVul: "Amendoeira", nomeSci: "Terminalia catappa", count: 1},
  {nomeVul: "Amieiro Negro", nomeSci: "Frangula almus", count: 1},
  {nomeVul: "Amieiro", nomeSci: "Alnus glutinosa", count: 1},
  {nomeVul: "Angico", nomeSci: "Acacia spp.", count: 2},
  {nomeVul: "Araçá-Boi", nomeSci: "Eugenia stipitata", count: 0},
  {nomeVul: "Arapaju", nomeSci: "Manilkara zapota", count: 1},
  {
    nomeVul: "Arbusto Espinheiro do Bosque",
    nomeSci: "Crataegus oxyacanthoides (syn: oxyacantha)",
    count: 1
  },
  {nomeVul: "Arbusto Espinhento", nomeSci: "Craetaegus monogyna", count: 1},
  {nomeVul: "Árvore Preta", nomeSci: "Fraxinus nigra (syn. sambucifolia)", count: 1},
  {nomeVul: "Aveia", nomeSci: "Avena sativa", count: 1},
  {nomeVul: "Avelã", nomeSci: "Corylus avellana", count: 1},
  {nomeVul: "Aveleira Japonesa", nomeSci: "Corylus sieboldiana", count: 1},
  {nomeVul: "Aveleira Siberiana", nomeSci: "Corylus heterophylla var. thunbergiii", count: 1},
  {nomeVul: "Azevinho", nomeSci: "Ilex aquifolium", count: 1},
  {nomeVul: "Bacupari", nomeSci: "Garcinia dulcis", count: 1},
  {nomeVul: "Bálsamo", nomeSci: "Myroxylon balsamum", count: 1},
  {nomeVul: "Banana", nomeSci: "Musa spp.", count: 3},
  {nomeVul: "Bergamota", nomeSci: "Citrus reticulata", count: 1},
  {nomeVul: "Bétula Branca (B.papyrifera)", nomeSci: "Betula papyrifera", count: 1},
  {nomeVul: "Bétula Branca (B.pendula)", nomeSci: "Betula pendula (syn:verrucosa)", count: 1},
  {nomeVul: "Bétula Branca (B.pubescens)", nomeSci: "Betula pubescens", count: 1},
  {nomeVul: "Bétula Cinza", nomeSci: "Betula populifolia", count: 1},
  {nomeVul: "Bétula Lenta", nomeSci: "Betula lenta", count: 1},
  {nomeVul: "Bétula lenta", nomeSci: "Betula nigra", count: 1},
  {nomeVul: "Bétula Lutea", nomeSci: "Betula lutea (synonym: alleghaniensis)", count: 1},
  {nomeVul: "Bétula Monarca", nomeSci: "Betula maximowicziana", count: 1},
  {nomeVul: "Bétula Negra", nomeSci: "Betula nigra", count: 1},
  {nomeVul: "Bétula Papel", nomeSci: "Betula papyrifera", count: 1},
  {nomeVul: "Bétula", nomeSci: "Betula sp.", count: 1},
  {nomeVul: "Bilimbi (A. bilimbi)", nomeSci: "Averrhoa bilimbi", count: 1},
  {nomeVul: "Bilimbi (C. cainito)", nomeSci: "Chrysophyllum cainito", count: 1},
  {nomeVul: "Biribá", nomeSci: "Rollinia omucosa", count: 0},
  {nomeVul: "Bordo Japonês", nomeSci: "Acer palmatum", count: 1},
  {nomeVul: "Bordo Vermelho (A.macrophyllum)", nomeSci: "Acer macrophyllum", count: 1},
  {nomeVul: "Bordo Vermelho (A.rubrum)", nomeSci: "Acer rubrum", count: 1},
  {nomeVul: "Bordo (A.mono)", nomeSci: "Acer mono subsp. Heterophyllum", count: 1},
  {nomeVul: "Bordo (A.negundo)", nomeSci: "Acer negundo", count: 1},
  {nomeVul: "Bordo (A.sacharum)", nomeSci: "Acer saccharum", count: 1},
  {nomeVul: "Bordo (A.spicatum)", nomeSci: "Acer spicatum", count: 1},
  {nomeVul: "Bordo (Acer pennsylvanicum)", nomeSci: "Acer pennsylvanicum", count: 1},
  {nomeVul: "Bordo (Acer pseudoplatanus)", nomeSci: "Acer pseudoplatanus", count: 1},
  {nomeVul: "Bordo", nomeSci: "Acer sp.", count: 1},
  {nomeVul: "Bordo-da-videira", nomeSci: "Acer circinatum", count: 1},
  {nomeVul: "Broto Vermelho Oriental", nomeSci: "Cercis canadensis", count: 1},
  {nomeVul: "Cabeça-de-negro", nomeSci: "Albizia lebbeck", count: 1},
  {nomeVul: "Caimito", nomeSci: "Chrysophyllum cainito", count: 1},
  {nomeVul: "Cajá (S. lutea)", nomeSci: "Spondias lutea", count: 1},
  {nomeVul: "Cajá (S. mombin)", nomeSci: "Spondias mombin", count: 1},
  {nomeVul: "Cajá-mirim (S. lutea)", nomeSci: "Spondias lutea", count: 1},
  {nomeVul: "Cajá-mirim (S. mombin)", nomeSci: "Spondias mombin", count: 1},
  {nomeVul: "Cajazeiro (S. lutea)", nomeSci: "Spondias lutea", count: 1},
  {nomeVul: "Cajazeiro (S. mombin)", nomeSci: "Spondias mombin", count: 1},
  {nomeVul: "Caju", nomeSci: "Anacardium occidentale", count: 2},
  {nomeVul: "Carambola Amarela (A. bilimbi)", nomeSci: "Averrhoa bilimbi", count: 1},
  {nomeVul: "Carambola amarela (C. cainito)", nomeSci: "Chrysophyllum cainito", count: 1},
  {nomeVul: "Carambola", nomeSci: "Averrhoa carambola", count: 1},
  {nomeVul: "Cárpino Betulas", nomeSci: "Carpinus betulas", count: 1},
  {nomeVul: "Cárpino", nomeSci: "Carpinus sp.", count: 1},
  {nomeVul: "Carvalho Água", nomeSci: "Quercus laurifolia", count: 1},
  {nomeVul: "Carvalho Branco do Brejo", nomeSci: "Quercus bicolor", count: 1},
  {nomeVul: "Carvalho Branco Oregon", nomeSci: "Quercus garryana", count: 1},
  {nomeVul: "Carvalho Branco", nomeSci: "Quercus alba", count: 1},
  {nomeVul: "Carvalho Campeão(Q.borealis)", nomeSci: "Quercus borealis (syn: rubra)", count: 1},
  {nomeVul: "Carvalho Campeão(Q.rubra)", nomeSci: "Quercus rubra", count: 1},
  {nomeVul: "Carvalho Castanheiro", nomeSci: "Quercus montana", count: 1},
  {nomeVul: "Carvalho Escarlata", nomeSci: "Quercus coccinea", count: 1},
  {nomeVul: "Carvalho Folha Diamante", nomeSci: "Quercus laurifolia", count: 1},
  {nomeVul: "Carvalho Glorioso do Brejo", nomeSci: "Quercus laurifolia", count: 1},
  {nomeVul: "Carvalho Glorioso", nomeSci: "Quercus laurifolia", count: 1},
  {nomeVul: "Carvalho Konara", nomeSci: "Quercus glandulifera", count: 1},
  {nomeVul: "Carvalho Koreano", nomeSci: "Quercus glandulifera", count: 1},
  {nomeVul: "Carvalho Mongoliano", nomeSci: "Quercus mongolica var grosserrata", count: 1},
  {nomeVul: "Carvalho Obtuso", nomeSci: "Quercus laurifolia", count: 1},
  {nomeVul: "Carvalho Oregon", nomeSci: "Quercus garryana", count: 1},
  {nomeVul: "Carvalho Preto", nomeSci: "Quercus velutina", count: 1},
  {
    nomeVul: "Carvalho Vermelho do Norte (Q.borealis)",
    nomeSci: "Quercus borealis (syn: rubra)",
    count: 1
  },
  {nomeVul: "Carvalho Vermelho do Norte (Q.rubra)", nomeSci: "Quercus rubra", count: 1},
  {nomeVul: "Carvalho", nomeSci: "Quercus sp.", count: 1},
  {nomeVul: "Carvalho-alvarinho", nomeSci: "Quercus robur", count: 1},
  {nomeVul: "Carvalho-roble", nomeSci: "Quercus robur", count: 1},
  {nomeVul: "Carvalho-vermelho", nomeSci: "Quercus robur", count: 1},
  {nomeVul: "Castanha-da-Índia(A.hippocastanum)", nomeSci: "Aesculus hippocastanum", count: 1},
  {nomeVul: "Castanha-da-Índia", nomeSci: "Aesculus sp.", count: 1},
  {nomeVul: "Castanheiro Europeu", nomeSci: "Castanea dentata", count: 1},
  {nomeVul: "Cereja de Pássaro Virginia", nomeSci: "Prunus virginiana", count: 1},
  {nomeVul: "Cereja de Pássaro", nomeSci: "Prunus ssiori", count: 1},
  {nomeVul: "Cerejeira Chorona", nomeSci: "Prunus subhirtella var. pendula", count: 1},
  {nomeVul: "Cerejeira Negra", nomeSci: "Prunus serotina", count: 1},
  {nomeVul: "Cerejeira", nomeSci: "Prunus avium", count: 1},
  {nomeVul: "Chá-da-Índia", nomeSci: "Camellia sinensis", count: 1},
  {nomeVul: "Choupo Branco", nomeSci: "Populus alba", count: 1},
  {nomeVul: "Choupo Tremedor", nomeSci: "Populus tremula", count: 1},
  {nomeVul: "Choupo Trêmulo", nomeSci: "Populus tremuloides", count: 1},
  {nomeVul: "Choupo(P.x canadensis)", nomeSci: "Populus x canadensis", count: 1},
  {nomeVul: "Choupo", nomeSci: "Populus spp.", count: 1},
  {nomeVul: "Choupo-bálsamo", nomeSci: "Populus balsamifera", count: 1},
  {nomeVul: "Chuva-de-ouro", nomeSci: "Laburnum anagyrioides", count: 1},
  {nomeVul: "Cinamomo", nomeSci: "Melia azedarach", count: 1},
  {nomeVul: "Cinza Japonês", nomeSci: "Fraxinus mandshurica var. Japonica", count: 1},
  {nomeVul: "Cinza-da-montanha", nomeSci: "Sorbus sp.", count: 1},
  {nomeVul: "Citros", nomeSci: "Citrus spp.", count: 4},
  {nomeVul: "Coprosma Frondoso Fino", nomeSci: "Coprosma areolata", count: 1},
  {nomeVul: "Coqueiro", nomeSci: "Cocos nucifera", count: 1},
  {nomeVul: "Corrente-de-ouro", nomeSci: "Laburnum anagyrioides", count: 1},
  {nomeVul: "Cutite", nomeSci: "Pouteria macrophylla", count: 0},
  {nomeVul: "Espinho Branco", nomeSci: "Craetaegus monogyna", count: 1},
  {nomeVul: "Faia Americana", nomeSci: "Fagus americana", count: 1},
  {nomeVul: "Faia Cobre", nomeSci: "Fagus sylvantica", count: 1},
  {nomeVul: "Faia do Oriente", nomeSci: "Fagus orientalis", count: 1},
  {nomeVul: "Faia Japonesa", nomeSci: "Fagus crenata f. grandifolia (syn. Americana)", count: 1},
  {nomeVul: "Faia Roxa", nomeSci: "Fagus silvatica f. purpurea", count: 1},
  {nomeVul: "Faia", nomeSci: "Fagus sp.", count: 1},
  {nomeVul: "Falso Castanho Japonês", nomeSci: "Aesculus turbinata", count: 1},
  {nomeVul: "Faveiro", nomeSci: "Albizia lebbeck", count: 1},
  {nomeVul: "Feixe Branco", nomeSci: "Sorbus aria", count: 1},
  {nomeVul: "Flamboyant", nomeSci: "Delonix regia", count: 1},
  {nomeVul: "Fortunela", nomeSci: "Fortunella spp.", count: 2},
  {nomeVul: "Freixo (F.bungeana)", nomeSci: "Fraxinus bungeana", count: 1},
  {nomeVul: "Freixo (F.excelsior)", nomeSci: "Fraxinus excelsior", count: 1},
  {nomeVul: "Fruta Pão", nomeSci: "Artocarpus altilis", count: 1},
  {nomeVul: "Gafanhoto Preto", nomeSci: "Robinia pseudoacacia", count: 1},
  {nomeVul: "Goiaba", nomeSci: "Psidium guajava", count: 1},
  {nomeVul: "Goiaba-araçá", nomeSci: "Psidium guineense", count: 0},
  {nomeVul: "Goma Preta", nomeSci: "Nyssa sylvatica", count: 1},
  {nomeVul: "Gomuto", nomeSci: "Arenga pinnata", count: 1},
  {nomeVul: "Grão Amargo", nomeSci: "Prunus virginiana", count: 1},
  {nomeVul: "Helicônia", nomeSci: "Heliconia spp.", count: 2},
  {nomeVul: "Jaca", nomeSci: "Artocarpus integrifolia", count: 1},
  {nomeVul: "Jambo D'água", nomeSci: "Syzygium aqueum", count: 1},
  {nomeVul: "Jambo Amarelo", nomeSci: "Syzygium jambos", count: 1},
  {nomeVul: "Jambo Branco (S.aqueum)", nomeSci: "Syzygium aqueum", count: 1},
  {nomeVul: "Jambo Branco (S.samarangense)", nomeSci: "Syzygium samarangense", count: 1},
  {nomeVul: "Jambo Rosa (S. jambos)", nomeSci: "Syzygium jambos", count: 1},
  {nomeVul: "Jambo Rosa (S. samarangese)", nomeSci: "Syzygium samarangense", count: 1},
  {nomeVul: "Jambo Vermelho", nomeSci: "Syzygium malaccense", count: 1},
  {nomeVul: "Jambosa", nomeSci: "Syzygium aqueum", count: 1},
  {nomeVul: "Juglans", nomeSci: "Juglans sp.", count: 1},
  {nomeVul: "Jujuba (Z. jujuba)", nomeSci: "Ziziphus jujuba", count: 1},
  {nomeVul: "Jujuba (Z. mauritiana)", nomeSci: "Ziziphus mauritiana", count: 1},
  {nomeVul: "Jujuba Chinesa", nomeSci: "Ziziphus jujuba", count: 1},
  {nomeVul: "Jurema", nomeSci: "Acacia spp.", count: 2},
  {nomeVul: "Karamu", nomeSci: "Coprosma lucida", count: 1},
  {nomeVul: "Kowhai", nomeSci: "Sophora microphylla", count: 1},
  {nomeVul: "Laranja Azeda", nomeSci: "Citrus aurantium", count: 1},
  {nomeVul: "Laranja Caipira", nomeSci: "Citrus aurantium", count: 1},
  {nomeVul: "Laranja da Terra", nomeSci: "Citrus aurantium", count: 1},
  {nomeVul: "Laranja Doce", nomeSci: "Citrus sinensis", count: 2},
  {nomeVul: "Laranja", nomeSci: "Citrus sinensis", count: 2},
  {nomeVul: "Licania", nomeSci: "Licania sp.", count: 0},
  {nomeVul: "Limão Cayena", nomeSci: "Averrhoa bilimbi", count: 1},
  {nomeVul: "Linda-dos-jardins", nomeSci: "Rhus typhina", count: 1},
  {nomeVul: "Louro Califórnia", nomeSci: "Umbelluraria californica", count: 1},
  {nomeVul: "Maçã (M. communis)", nomeSci: "Malus communis", count: 1},
  {nomeVul: "Maçã (M. pumila var domestica)", nomeSci: "Malus pumila var domestica", count: 1},
  {nomeVul: "Maçã (M. pumila)", nomeSci: "Malus pumila", count: 1},
  {nomeVul: "Maçã (M. x domestica)", nomeSci: "Malus x domestica", count: 1},
  {nomeVul: "Maçã (Pyrus malus)", nomeSci: "Pyrus malus", count: 1},
  {nomeVul: "Maçã Silvestre", nomeSci: "Malus sylvestris", count: 1},
  {nomeVul: "Maça", nomeSci: "Malus sp.", count: 1},
  {nomeVul: "Maçã-de-pobre ", nomeSci: "Ziziphus mauritiana", count: 1},
  {nomeVul: "Maçaranduba", nomeSci: "Manilkara zapota", count: 1},
  {nomeVul: "Manchu Cinza", nomeSci: "Fraxinus mandshurica", count: 1},
  {nomeVul: "Mandarina,", nomeSci: "Citrus reticulata", count: 1},
  {nomeVul: "Mandioca", nomeSci: "Manihot esculenta", count: 1},
  {nomeVul: "Manga", nomeSci: "Mangifera indica", count: 2},
  {nomeVul: "Mararaju", nomeSci: "Manilkara zapota", count: 1},
  {nomeVul: "Mexerica", nomeSci: "Citrus reticulata", count: 1},
  {nomeVul: "Mogno Indiano Ocidental", nomeSci: "Swietenia mahagoni", count: 1},
  {nomeVul: "Mogno", nomeSci: "Switenia macrophyla", count: 1},
  {nomeVul: "Murici ou Muruci", nomeSci: "Bysonima crassifolia", count: 0},
  {nomeVul: "Murta", nomeSci: "Murraya paniculata", count: 1},
  {nomeVul: "Nespereira", nomeSci: "Eriobotrya japonica", count: 1},
  {nomeVul: "Nim", nomeSci: "Azadirachta indica", count: 1},
  {nomeVul: "Nogueira Amarga Casca de Pelúcia", nomeSci: "Carya ovata", count: 1},
  {nomeVul: "Nogueira Amarga Coração Branco", nomeSci: "Carya tomentosa", count: 1},
  {nomeVul: "Nogueira Amarga de Porco", nomeSci: "Carya glabra", count: 1},
  {nomeVul: "Nogueira Amarga spp", nomeSci: "Carya spp.", count: 0},
  {nomeVul: "Nogueira Amarga", nomeSci: "Carya cordiformis", count: 2},
  {nomeVul: "Nogueira Branca", nomeSci: "Juglans cinerea", count: 1},
  {nomeVul: "Nogueira Comum", nomeSci: "Juglans regia", count: 1},
  {nomeVul: "Nogueira europeia", nomeSci: "Juglans regia", count: 1},
  {nomeVul: "Nogueira Pecã", nomeSci: "Carya illinoensis", count: 1},
  {nomeVul: "Nogueira Preta", nomeSci: "Juglans nigra", count: 1},
  {nomeVul: "Nogueira", nomeSci: "Juglans sp.", count: 1},
  {nomeVul: "Noruega Abeto", nomeSci: "Picea abies", count: 1},
  {nomeVul: "Olmo Americano", nomeSci: "Ulmus americana", count: 1},
  {nomeVul: "Olmo Escocês", nomeSci: "Ulmus glabra (syn. montana)", count: 1},
  {nomeVul: "Olmo", nomeSci: "Ulmus sp.", count: 1},
  {nomeVul: "Padreiro", nomeSci: "Acer pseudoplatanus", count: 1},
  {nomeVul: "Palma forrageira", nomeSci: "Opuntia cochenillifera", count: 1},
  {nomeVul: "Pau Cachorro do Pacífico", nomeSci: "Cornus muttallii", count: 1},
  {nomeVul: "Pau Cachorro", nomeSci: "Cornus sp.", count: 1},
  {nomeVul: "Pera Asiática", nomeSci: "Pyrus pyrifolia", count: 1},
  {nomeVul: "Pera Nashi", nomeSci: "Pyrus pyrifolia", count: 1},
  {nomeVul: "Pereira Europeia", nomeSci: "Pyrus communis", count: 1},
  {nomeVul: "Pereira Japonesa", nomeSci: "Pyrus pyrifolia var culta", count: 1},
  {nomeVul: "Pimenta Picante", nomeSci: "Capsicum annuum", count: 1},
  {nomeVul: "Pimenta-de-Cheiro", nomeSci: "Capsicum chinense", count: 0},
  {nomeVul: "Pimenta-do-diabo", nomeSci: "Capsicum annuum", count: 1},
  {nomeVul: "Pitanga Vermelha", nomeSci: "Eugenia uniflora", count: 1},
  {nomeVul: "Plátano Oriental", nomeSci: "Platanus orientalis", count: 1},
  {nomeVul: "Plátano", nomeSci: "Platanus orientalis", count: 1},
  {nomeVul: "Pomelo", nomeSci: "Citrus paradisi", count: 1},
  {nomeVul: "Poncirus", nomeSci: "Poncirus spp.", count: 2},
  {nomeVul: "Ponkan", nomeSci: "Citrus reticulata", count: 1},
  {nomeVul: "Ribes", nomeSci: "Ribes sp.", count: 1},
  {nomeVul: "Rosa", nomeSci: "Rosa spp.", count: 1},
  {nomeVul: "Rustifina Rus", nomeSci: "Rhus typhina", count: 1},
  {nomeVul: "Salgueiro Branco", nomeSci: "Salix alba", count: 1},
  {nomeVul: "Salgueiro Cinza", nomeSci: "Salix cinerea", count: 1},
  {nomeVul: "Salgueiro Dourado", nomeSci: "Salix alba var Vitelina", count: 1},
  {nomeVul: "Salgueiro Preto", nomeSci: "Salix nigricans", count: 1},
  {nomeVul: "Salgueiro Púrpura", nomeSci: "Salix purpurea", count: 1},
  {nomeVul: "Salgueiro Velho Mundo", nomeSci: "Salix amygdalina", count: 1},
  {nomeVul: "Salgueiro-folha-de-pêssego", nomeSci: "Salix amygdaloides", count: 1},
  {nomeVul: "Salgueiro-taco-de-críquete", nomeSci: "Salix alba L. Coerulea", count: 1},
  {nomeVul: "Salix", nomeSci: "Salix spp.", count: 1},
  {nomeVul: "Sanguinho", nomeSci: "Frangula almus", count: 1},
  {nomeVul: "Sapoti", nomeSci: "Manilkara zapota", count: 1},
  {nomeVul: "Sapotilha", nomeSci: "Manilkara zapota", count: 1},
  {nomeVul: "Seringueira", nomeSci: "Hevea brasiliensis", count: 1},
  {nomeVul: "Sete Copas", nomeSci: "Terminalia catappa", count: 1},
  {nomeVul: "Sófora", nomeSci: "Sophora microphylla", count: 1},
  {nomeVul: "Sorgo", nomeSci: "Sorghum bicolor", count: 1},
  {nomeVul: "Sorva (S. domestica)", nomeSci: "Sorbus domestica", count: 1},
  {nomeVul: "Sorva", nomeSci: "Sorbus sp.", count: 1},
  {nomeVul: "Sumac Staghorn", nomeSci: "Rhus typhina", count: 1},
  {nomeVul: "Tangerina", nomeSci: "Citrus reticulata", count: 1},
  {nomeVul: "Taperebá (S. lutea)", nomeSci: "Spondias lutea", count: 1},
  {nomeVul: "Taperebá (S. mombin)", nomeSci: "Spondias mombin", count: 1},
  {nomeVul: "Teca", nomeSci: "Tectona grandis", count: 1},
  {nomeVul: "Teja", nomeSci: "Tilia cordata", count: 1},
  {nomeVul: "Tejo", nomeSci: "Tilia cordata", count: 1},
  {nomeVul: "Tella", nomeSci: "Tilia cordata", count: 1},
  {nomeVul: "Texa", nomeSci: "Tilia cordata", count: 1},
  {nomeVul: "Tilha", nomeSci: "Tilia cordata", count: 1},
  {nomeVul: "Tília", nomeSci: "Tilia sp.", count: 1},
  {nomeVul: "Tillera", nomeSci: "Tilia cordata", count: 1},
  {nomeVul: "Tilo", nomeSci: "Tilia americana", count: 1},
  {nomeVul: "Tomate", nomeSci: "Licopersicum esculentum", count: 1},
  {nomeVul: "Toranja", nomeSci: "Citrus paradisi", count: 1},
  {nomeVul: "Tramazeira", nomeSci: "Sorbus aucuparia", count: 1},
  {nomeVul: "Tulipeiro", nomeSci: "Liriodendron tulipifera", count: 1},
  {nomeVul: "Tupelo", nomeSci: "Nyssa sylvatica", count: 1},
  {nomeVul: "Ulmeiro", nomeSci: "Ulmus sp.", count: 1},
  {nomeVul: "Unha-de-gato", nomeSci: "Acacia spp.", count: 2},
  {nomeVul: "Uva", nomeSci: "Vitis spp. e seus híbridos", count: 1},
  {nomeVul: "Videira e seus híbridos", nomeSci: "Vitis spp. e seus híbridos", count: 1},
  {nomeVul: "Vimeiro Púrpura", nomeSci: "Salix purpurea", count: 1},
  {nomeVul: "Viola", nomeSci: "Viola sp.", count: 1}
];

// src/estados.ts
const estados = [
  {estado: "", UF: ""},
  {estado: "Acre", UF: "AC"},
  {estado: "Alagoas", UF: "AL"},
  {estado: "Amazonas", UF: "AM"},
  {estado: "Amapá", UF: "AP"},
  {estado: "Bahia", UF: "BA"},
  {estado: "Ceará", UF: "CE"},
  {estado: "Distrito Federal", UF: "DF"},
  {estado: "Espirito Santo", UF: "ES"},
  {estado: "Goiás", UF: "GO"},
  {estado: "Maranhão", UF: "MA"},
  {estado: "Minas Gerais", UF: "MG"},
  {estado: "Mato Grosso do Sul", UF: "MS"},
  {estado: "Mato Grosso", UF: "MT"},
  {estado: "Pará", UF: "PA"},
  {estado: "Paraíba", UF: "PB"},
  {estado: "Pernambuco", UF: "PE"},
  {estado: "Piauí", UF: "PI"},
  {estado: "Paraná", UF: "PR"},
  {estado: "Rio de janeiro", UF: "RJ"},
  {estado: "Rio Grande do Norte", UF: "RN"},
  {estado: "Rondônia", UF: "RO"},
  {estado: "Roraima", UF: "RR"},
  {estado: "Rio Grande do Sul", UF: "RS"},
  {estado: "Santa Catarina", UF: "SC"},
  {estado: "Sergipe", UF: "SE"},
  {estado: "São Paulo", UF: "SP"},
  {estado: "Tocantins", UF: "TO"}
];

// src/db.ts
export {
  estados,
  hospedeiros,
  pragas,
  regras
};