// CEFiTI db
'use strict'

var version = '13'

/**
 * === REGRAS PARA EDIÇÃO ===
 * 1 - Toda haspa dupla (") dentro do texto deve ser precedida de uma barra invertida (Ex.: texto \"texto\" texto) <=
 * 2 - Para inserir uma quebra de linha dentro de um item, inserir "\n" (Ex.: texto \n texto ou texto \ntexto)     <=
 * 3 - Uma lista de itens (array) é definida colocando-se os itens entre colchetes (Ex.: ["a", "b", "c"]).         <=
 * 4 - Os itens da lista devem estar entre hastas duplas (") e separados por vírgula. 
 * 5 - Cada regra deve conter os seguintes campos: desc, hosp[], part[], orig[], dest[], prag, pragc, exig[], leg, link
 * 6 - Cada campo da regra deve ser seguido pela sua definição após dois pontos (:), e os campos separados por vírgula.
 * 7 - Cada regra deve ter seus campos agrupados dentro de chaves ({...}), e separado de outras regras por uma vírgula.  
 */

// prettier-ignore
var db = [
  
//ÁCARO-VERMELHO-DAS-PALMEIRAS
{
  desc: "DE UF com ocorrência de Ácaro-vermelho-das-palmeiras PARA UF reconhecida pelo MAPA como livre da ocorrência de Ácaro-vermelho-das-palmeiras",
  hosp: ["Euterpe oleracea", "Euterpe precatoria", "Alpínia purpurata", "Alpínia zerumbet", "Syagrus schizophylla", "Ravenala madagascariensis", "Musa spp.", "Etlingera alatior", "Mauritia flexuosa", "Canna indica", "Cocos nucifera", "Butia capitata", "Corypha umbraculifera", "Elaeis guineensis", "Strelitzia reginae", "Heliconia spp.", "Syagrus romanzoffianum", "Licuala grandis", "Coccothrinax miraguama", "Microcycas calocoma", "Coccothrinax barbadensis", "Aiphanes spp.", "Pseudophoenix vinifera", "Dypsis lutescens", "Veitchia arecina", "Chamaedora spp.", "Veitchia maerrillii", "Phoenix roebelenii", "Acoelorraphe wrightii", "Wodyetia bifurcata", "Archontophoenix alexandrae", "Cycas spp.", "Areca sp.", "Bismarckia nobilis", "Washingtonia robusta", "Ptychosperma macarthurii", "Beccariophoenix madagascariensis", "Bactris plumeriana", "Washingtonia filifera", "Pseudophoenix sargentii", "Roystonea borinquena", "Schippia concolor", "Thrinax radiata", "Livistona chinensis", "Pritchardia pacifica", "Coccothrinax argentata", "Dictyosperma album", "Caryota mitis", "Caryota urens", "Raphis excelsa", "Roystonia regia", "Ptychosperma elegans", "Dypsis decaryi", "Pritchardia vuylstekeana", "Bactris gasipaes", "Bactris plumeriana", "Phoenix dactylifera", "Phoenix canariensis", "Phoenix reclinata", "Arecaceae (espécies desta família)", "Heliconiaceae (espécies desta família)", "Musaceae (espécies desta família)", "Pandanaceae (espécies desta família)", "Strelitziaceae (espécies desta família)", "Zingiberaceae (espécies desta família)"],
  part: ["plantas", "mudas", "raízes", "caules", "ramos", "folhas", "flores", "frutos"],
  orig: ["RR", "AM", "BA", "CE", "GO", "MG", "PA", "PR", "RN", "SE", "SP", "DF"],
  dest: ["AC", "AL", "AP", "ES", "MA", "MS", "MT", "PB", "PE", "PI", "RJ", "RO", "RS", "SC", "TO"],
  prag: "Raoiella indica",
  pragc: "ÁCARO-VERMELHO-DAS-PALMEIRAS",
  exig: [
    "PTV com a seguinte declaração adicional: \"Não se observou a presença de Raoiella indica no local de produção e a partida foi inspecionada e encontra-se livre da praga\"; ",
    "A partida deve ser transportada em caminhão lonado ou tipo baú, e lacrado; ", "A PTV deve conter o(s) número(s) do(s) lacre(s);",
    "Estas exigências fitossanitárias não se aplicam a material in vitro."
  ],
  leg: "Instrução Normativa MAPA nº 14, de 6 de abril de 2010",
  link: "leg/IN14-2010.pdf",
  proib: false
}, 

//MOSCA-DA-CARAMBOLA
{
  desc: "DE UF com ocorrência de Mosca-da-carambola PARA UF reconhecida pelo MAPA como livre da ocorrência de Mosca-da-carambola",
  hosp: ["Averrhoa carambola", "Psidium guajava", "Syzygium malaccense", "Citrus aurantium", "Manilkara zapota", "Mangifera indica", "Malpighia punicifolia", "Terminalia catappa", "Garcinia dulcis", "Chrysophyllum cainito", "Spondias lutea", "Anacardium occidentale", "Artocarpus altilis", "Arenga pinnata", "Artocarpus integrifolia", "Syzygium samarangense", "Syzygium aqueum", "Syzygium jambos", "Ziziphus mauritiana", "Ziziphus jujuba", "Citrus sinensis", "Averrhoa bilimbi", "Capsicum annuum", "Eugenia uniflora", "Citrus paradisi", "Citrus reticulata", "Licopersicum esculentum"],
  part: ["frutos"],
  orig: ["AP", "RR"],
  dest: ["AC", "AL", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RS", "SC", "SE", "SP", "TO"],
  prag: "Bactrocera carambolae",
  pragc: "MOSCA-DA-CARAMBOLA",
  exig: [
    "TRÂNSITO PROIBIDO. \nMotivo: Ausência de área livre de mosca-da-carambola, na origem da partida."
  ],
  leg: "Portaria SDA/MAPA nº 21, de 25 de março de 1999",
  link: "leg/PORT21-1999.pdf",
  proib: false
}, 

//ÁCARO HINDU
{
  desc: "DE UF com ocorrência de Ácaro-hindu-dos-citros PARA UF reconhecida pelo MAPA como livre da ocorrência de Ácaro-hindu-dos-citros",
  hosp: ["Citrus spp."],
  part: ["plantas", "mudas", "raízes", "caules", "ramos", "folhas", "flores", "frutos"],
  orig: ["RR"],
  dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RS", "SC", "SE", "SP", "TO"],
  prag: "Schizotetranychus hindustanicus",
  pragc: "ÁCARO HINDU",
  exig: [
    "PTV com a declaração adicional: \"A partida atende às exigências constantes da Instrução Normativa MAPA nº 8, de 17 de abril de 2012, encontra-se livre do Ácaro Hindu dos Citros\";",
    "Estas exigências fitossanitárias não se aplicam a material in vitro, madeira serrada e, ainda, frutos de coco (Cocus nucifera) secos e descascados;"
  ],
  leg: "Instrução Normativa MAPA nº 8, de 17 de abril de 2012",
  link: "leg/IN08-2012.pdf",
  proib: false
},{
  desc: "DE UF com ocorrência de Ácaro-hindu-dos-citros PARA UF reconhecida pelo MAPA como livre da ocorrência de Ácaro-hindu-dos-citros",
  hosp: ["Cocos nucifera", "Azadirachta indica", "Sorghum bicolor", "Acacia sp.", "Melia azedarach"],
  part: ["plantas", "mudas", "raízes", "caules", "ramos", "folhas", "flores", "frutos"],
  orig: ["RR"],
  dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RS", "SC", "SE", "SP", "TO"],
  prag: "Schizotetranychus hindustanicus",
  pragc: "ÁCARO HINDU",
  exig: [
    "TRÂNSITO PROIBIDO.\nMotivo: Ausência de área livre de ácaro-hindu-dos-citros, na origem da partida.",
    "Estas exigências fitossanitárias não se aplicam a material in vitro, madeira serrada e, ainda, frutos de coco (Cocus nucifera) secos e descascados;"
  ],
  leg: "Instrução Normativa MAPA nº 8, de 17 de abril de 2012",
  link: "leg/IN08-2012.pdf",
  proib: false
},

//BANANA STREAK VIRUS e CUCUMBER MOSAIC VIRUS
{
  desc: "DE qualquer UF PARA qualquer UF",
  hosp: ["Musa spp."],
  part: ["mudas"],
  orig: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
  dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
  prag: "BSV e CMV",
  pragc: "BANANA STREAK VIRUS e CUCUMBER MOSAIC VIRUS",
  exig: [
    "PTV com a seguinte declaração adicional: \"A partida encontra-se livre dos vírus Banana streak virus (BSV) e Cucumber mosaic virus (CMV), de acordo com o laudo laboratorial [nº do laudo], [nome do laboratório] -[município e UF de localização do laboratório]\";",
    "As mudas de bananeira que transitarem em desrespeito às determinações deste artigo ficam sujeitas à interceptação, caso em que será determinado o retorno das mesmas ao local de origem e comunicado ao órgão fiscalizador da produção e comércio, para adoção das providências cabíveis, conforme o art. 13, § 2º., da Instrução Normativa MAPA nº. 46, de 27 de dezembro de 2010."
  ],
  leg: "Instrução Normativa MAPA nº 46, de 27 de dezembro de 2010",
  link: "leg/IN46-2010.pdf",
  proib: false
}, 

//CANCRO-DA-VIDEIRA
{
  desc: "DE UF com ocorrência de Cancro-da-videira PARA UF reconhecida pelo MAPA como livre da ocorrência de Cancro-da-videira",
  hosp: ["Vitis spp. e seus híbridos"],
  part: ["mudas"],
  orig: ["BA", "CE", "PE", "RR"],
  dest: ["AC", "AL", "AM", "AP", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PI", "PR", "RJ", "RN", "RO", "RS", "SC", "SE", "SP", "TO"],
  prag: "Xanthomonas campestris pv. viticola",
  pragc: "CANCRO-DA-VIDEIRA",
  exig: [
    "PTV com a seguinte declaração adicional: \"As mudas foram obtidas por micropropagação e indexadas para Xanthomonas campestris pv. viticola\"."
  ],
  leg: "Instrução Normativa MAPA nº 2, de 6 de fevereiro de 2014",
  link: "leg/IN02-2014.pdf",
  proib: false
}, {
  desc: "DE UF com ocorrência de Cancro-da-videira PARA UF reconhecida pelo MAPA como livre da ocorrência de Cancro-da-videira",
  hosp: ["Vitis spp. e seus híbridos"],
  part: ["frutos"],
  orig: ["BA", "CE", "PE", "RR"],
  dest: ["AC", "AL", "AM", "AP", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PI", "PR", "RJ", "RN", "RO", "RS", "SC", "SE", "SP", "TO"],
  prag: "Xanthomonas campestris pv. viticola",
  pragc: "CANCRO-DA-VIDEIRA",
  exig: [
    "PTV com a seguinte declaração adicional: \"Os frutos foram produzidos em propriedade onde são adotadas as medidas de prevenção e controle do cancro bacteriano da videira, previstas na legislação fitossanitária\";",
    "Estas exigências fitossanitárias só se aplicam a frutos, quando destinados a consumo in natura."
  ],
  leg: "Instrução Normativa MAPA nº 2, de 6 de fevereiro de 2014",
  link: "leg/IN02-2014.pdf",
  proib: false
}, {
  desc: "DE UF com ocorrência de Cancro-da-videira PARA UF reconhecida pelo MAPA como livre da ocorrência de Cancro-da-videira",
  hosp: ["Vitis spp. e seus híbridos"],
  part: ["material para pesquisa"],
  orig: ["BA", "CE", "PE", "RR"],
  dest: ["AC", "AL", "AM", "AP", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PI", "PR", "RJ", "RN", "RO", "RS", "SC", "SE", "SP", "TO"],
  prag: "Xanthomonas campestris pv. viticola",
  pragc: "CANCRO-DA-VIDEIRA",
  exig: [
    "PTV com a seguinte declaração adicional: \"O material foi lacrado na origem, sob número de lacre X, e embalado de maneira a garantir a não dispersão da praga\"."
  ],
  leg: "Instrução Normativa MAPA nº 2, de 6 de fevereiro de 2014",
  link: "leg/IN02-2014.pdf",
  proib: false
}, 

//CANCRO EUROPEU DAS POMÁCEAS
{
  desc: "DE UF com ocorrência de Cancro-europeu-das-pomáceas PARA UF reconhecida pelo MAPA como livre da ocorrência de Cancro-europeu-das-pomáceas",
  hosp: ["Acacia sp.", "Acer sp.", "Acer circinatum", "Acer macrophyllum", "Acer mono subsp. Heterophyllum", "Acer negundo", "Acer palmatum", "Acer pennsylvanicum", "Acer pseudoplatanus", "Acer rubrum", "Acer saccharum", "Acer spicatum", "Aesculus sp.", "Aesculus hippocastanum", "Aesculus turbinata", "Albizia lebbeck", "Alnus sp.", "Alnus glutinosa", "Alnus incana", "Alnus japonica", "Alnus rubra", "Amelanchier laevis", "Avena sativa", "Betula sp.", "Betula lenta", "Betula lutea (synonym: alleghaniensis)", "Betula maximowicziana", "Betula nigra", "Betula papyrifera", "Betula pendula (syn:verrucosa)", "Betula populifolia", "Betula pubescens", "Camellia sinensis", "Carpinus sp.", "Carpinus betulas", "Carya spp.", "Carya cordiformis", "Carya glabra", "Carya ovata", "Carya tomentosa", "Carya illinoensis", "Castanea dentata", "Cercis canadensis", "Citrus sinensis", "Coprosma areolata", "Coprosma lucida", "Cornus sp.", "Cornus muttallii", "Corylus avellana", "Corylus heterophylla var. thunbergiii", "Corylus sieboldiana", "Craetaegus monogyna", "Crataegus oxyacanthoides (syn: oxyacantha )", "Eriobotrya japonica", "Fagus americana", "Fagus crenata f. grandifolia (syn.Americana)", "Fagus sp.", "Fagus orientalis", "Fagus sylvantica", "Fagus silvatica f. purpurea", "Frangula almus", "Fraxinus bungeana", "Fraxinus excelsior", "Fraxinus mandshurica", "Fraxinus mandshurica var. Japonica", "Fraxinus nigra (syn. sambucifolia)", "Ilex aquifolium", "Juglans sp.", "Juglans cinerea", "Juglans nigra", "Juglans regia", "Laburnum anagyrioides", "Liriodendron tulipifera", "Malus sp.", "Malus communis", "Malus sylvestris", "Malus pumila", "Malus x domestica", "Malus pumila var domestica", "Nyssa sylvatica", "Persea gratissima", "Picea abies", "Platanus orientalis", "Populus spp.", "Populus alba", "Populus x canadensis", "Populus balsamifera", "Populus grandidenta", "Populus tremula", "Populus tremuloides", "Populus wislizeni", "Prunus spp.", "Prunus avium", "Prunus serotina", "Prunus salicina", "Prunus ssiori", "Prunus subhirtella var. pendula", "Prunus virginiana", "Pyrus malus", "Pyrus pyrifolia", "Pyrus pyrifolia var culta", "Pyrus communis", "Quercus sp.", "Quercus alba", "Quercus bicolor", "Quercus borealis (syn: rubra)", "Quercus coccinea", "Quercus garryana", "Quercus glandulifera", "Quercus laurifolia", "Quercus mongolica var grosserrata", "Quercus montana", "Quercus robur", "Quercus rubra", "Quercus velutina", "Rhus typhina", "Ribes sp.", "Robinia pseudoacacia", "Rosa spp.", "Salix spp.", "Salix alba", "Salix alba var Vitelina", "Salix alba L. Coerulea", "Salix amygdaloides", "Salix amygdalina", "Salix cinerea", "Salix nigricans", "Salix purpurea", "Sophora microphylla", "Sorbus sp.", "Sorbus aria", "Sorbus aucuparia", "Sorbus domestica", "Swietenia mahagoni", "Tilia sp.", "Tilia americana", "Tilia cordata", "Ulmus sp.", "Ulmus americana", "Ulmus glabra (syn. montana)", "Umbelluraria californica", "Viola sp."],
  part: ["mudas", "sementes", "estacas", "bulbos", "tubérculos", "manivas", "toletes", "gemas", "ramas", "rizomas"],
  orig: ["PR", "RS", "SC"],
  dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "RJ", "RN", "RO", "RR", "SE", "SP", "TO"],
  prag: "Neonectria galligena (=Nectria galligena)",
  pragc: "CANCRO EUROPEU DAS POMÁCEAS",
  exig: [
    "PTV com a seguinte declaração adicional: \"A Unidade de produção foi inspecionada oficialmente durante o período de produção e não foi constatada a presença de sintomas de infecção pela praga Neonectria galligena\";",
    "Esta exigência fitossanitária não se aplica a material propagativo in vitro."
  ],
  leg: "Instrução Normativa nº 20, de 20 de junho de 2013",
  link: "leg/IN20-2013.pdf",
  proib: false
}, {
  desc: "DE UF com ocorrência de Cancro-europeu-das-pomáceas PARA UF reconhecida pelo MAPA como livre da ocorrência de Cancro-europeu-das-pomáceas",
  hosp: ["Acacia sp.", "Acer sp.", "Acer circinatum", "Acer macrophyllum", "Acer mono subsp. Heterophyllum", "Acer negundo", "Acer palmatum", "Acer pennsylvanicum", "Acer pseudoplatanus", "Acer rubrum", "Acer saccharum", "Acer spicatum", "Aesculus sp.", "Aesculus hippocastanum", "Aesculus turbinata", "Albizia lebbeck", "Alnus sp.", "Alnus glutinosa", "Alnus incana", "Alnus japonica", "Alnus rubra", "Amelanchier laevis", "Avena sativa", "Betula sp.", "Betula lenta", "Betula lutea (synonym: alleghaniensis)", "Betula maximowicziana", "Betula nigra", "Betula papyrifera", "Betula pendula (syn:verrucosa)", "Betula populifolia", "Betula pubescens", "Camellia sinensis", "Carpinus sp.", "Carpinus betulas", "Carya spp.", "Carya cordiformis", "Carya glabra", "Carya ovata", "Carya tomentosa", "Carya illinoensis", "Castanea dentata", "Cercis canadensis", "Citrus sinensis", "Coprosma areolata", "Coprosma lucida", "Cornus sp.", "Cornus muttallii", "Corylus avellana", "Corylus heterophylla var. thunbergiii", "Corylus sieboldiana", "Craetaegus monogyna", "Crataegus oxyacanthoides (syn: oxyacantha )", "Eriobotrya japonica", "Fagus americana", "Fagus crenata f. grandifolia (syn.Americana)", "Fagus sp.", "Fagus orientalis", "Fagus sylvantica", "Fagus silvatica f. purpurea", "Frangula almus", "Fraxinus bungeana", "Fraxinus excelsior", "Fraxinus mandshurica", "Fraxinus mandshurica var. Japonica", "Fraxinus nigra (syn. sambucifolia)", "Ilex aquifolium", "Juglans sp.", "Juglans cinerea", "Juglans nigra", "Juglans regia", "Laburnum anagyrioides", "Liriodendron tulipifera", "Malus sp.", "Malus communis", "Malus sylvestris", "Malus pumila", "Malus x domestica", "Malus pumila var domestica", "Nyssa sylvatica", "Persea gratissima", "Picea abies", "Platanus orientalis", "Populus spp.", "Populus alba", "Populus x canadensis", "Populus balsamifera", "Populus grandidenta", "Populus tremula", "Populus tremuloides", "Populus wislizeni", "Prunus spp.", "Prunus avium", "Prunus serotina", "Prunus salicina", "Prunus ssiori", "Prunus subhirtella var. pendula", "Prunus virginiana", "Pyrus malus", "Pyrus pyrifolia", "Pyrus pyrifolia var culta", "Pyrus communis", "Quercus sp.", "Quercus alba", "Quercus bicolor", "Quercus borealis (syn: rubra)", "Quercus coccinea", "Quercus garryana", "Quercus glandulifera", "Quercus laurifolia", "Quercus mongolica var grosserrata", "Quercus montana", "Quercus robur", "Quercus rubra", "Quercus velutina", "Rhus typhina", "Ribes sp.", "Robinia pseudoacacia", "Rosa spp.", "Salix spp.", "Salix alba", "Salix alba var Vitelina", "Salix alba L. Coerulea", "Salix amygdaloides", "Salix amygdalina", "Salix cinerea", "Salix nigricans", "Salix purpurea", "Sophora microphylla", "Sorbus sp.", "Sorbus aria", "Sorbus aucuparia", "Sorbus domestica", "Swietenia mahagoni", "Tilia sp.", "Tilia americana", "Tilia cordata", "Ulmus sp.", "Ulmus americana", "Ulmus glabra (syn. montana)", "Umbelluraria californica", "Viola sp."],
  part: ["frutos"],
  orig: ["PR", "RS", "SC"],
  dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "RJ", "RN", "RO", "RR", "SE", "SP", "TO"],
  prag: "Neonectria galligena (=Nectria galligena)",
  pragc: "CANCRO EUROPEU DAS POMÁCEAS",
  exig: [
    "PTV com a seguinte declaração adicional: \"Na unidade de produção e Unidade de Consolidação - UC foram adotados os procedimentos de controle e prevenção previstos nesta norma (Instrução Normativa nº 20, de 20 de junho de 2013) e os frutos não apresentam sintomas de Neonectria galligena\"."
  ],
  leg: "Instrução Normativa nº 20, de 20 de junho de 2013",
  link: "leg/IN20-2013.pdf",
  proib: false
}, 

//GREENING
{
  desc: "DE UF com ocorrência de Greening PARA UF reconhecida pelo MAPA como livre da ocorrência de Greening",
  hosp: ["Citrus spp.", "Fortunella spp.", "Poncirus spp.", "Murraya paniculata"],
  part: ["mudas", "estacas", "gemas", "ramas", "raízes"],
  orig: ["MG", "PR", "SP"],
  dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MS", "MT", "PA", "PB", "PE", "PI", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "TO"],
  prag: "Candidatus Liberibacter spp.",
  pragc: "GREENING",
  exig: [
    "PTV; \n Obs.: Partida apreendida pela fiscalização de defesa sanitária vegetal, em\ndesacordo com o previsto nesta Instrução Normativa, será sumariamente destruída, não cabendo ao infrator qualquer tipo de indenização, sem prejuízo das demais sanções estabelecidas pela legislação estadual e federal de defesa sanitária vegetal, conforme o art. 5º, da Instrução Normativa MAPA nº. 53, de 16 de outubro de 2010."
  ],
  leg: "Instrução Normativa nº 53, de 16 de outubro de 2008",
  link: "leg/IN53-2008.pdf",
  proib: false
}, 

//PINTA-PRETA-DOS-CITROS
{
  desc: "DE UF com ocorrência de Pinta-preta-dos-citros PARA UF reconhecida pelo MAPA como livre da ocorrência de Pinta-preta-dos-citros",
  hosp: ["Citrus spp."],
  part: ["mudas", "estacas", "gemas"],
  orig: ["AM", "ES", "MT", "MS", "MG", "PR", "RJ", "RS", "SC", "SP", "BA", "GO", "RO"],
  dest: ["AC", "AL", "AP", "CE", "DF", "MA", "PA", "PB", "PE", "PI", "RN", "RR", "SE", "TO"],
  prag: "Guignardia citricarpa (=Phyllosticta citricarpa)",
  pragc: "PINTA-PRETA-DOS-CITROS",
  exig: [
    "PTV;", 
    "A partida deve ser transportada em veículos fechados ou totalmente protegidos por lona."
  ],
  leg: "Instrução Normativa MAPA nº 3, de 8 de janeiro de 2008",
  link: "leg/IN03-2008.pdf",
  proib: false
}, {
  desc: "DE UF com ocorrência de Pinta-preta-dos-citros PARA UF reconhecida pelo MAPA como livre da ocorrência de Pinta-preta-dos-citros",
  hosp: ["Citrus spp."],
  part: ["frutos"],
  orig: ["AM", "ES", "MT", "MS", "MG", "PR", "RJ", "RS", "SC", "SP", "BA", "GO", "RO"],
  dest: ["AC", "AL", "AP", "CE", "DF", "MA", "PA", "PB", "PE", "PI", "RN", "RR", "SE", "TO"],
  prag: "Guignardia citricarpa (=Phyllosticta citricarpa)",
  pragc: "PINTA-PRETA-DOS-CITROS",
  exig: [
    "PTV com a seguinte declaração adicional: \"Os frutos foram produzidos sob Manejo Integrado de Guignardia citricarpa e submetidos a processo de seleção para a retirada de folhas e partes de ramos\";",
    "Os frutos devem estar isentos de material vegetativo."
  ],
  leg: "Instrução Normativa MAPA nº 3, de 8 de janeiro de 2008",
  link: "leg/IN03-2008.pdf",
  proib: false
}, 

//BROCA CONÍGERA
{
  desc: "DE UF com ocorrência de Broca Conígera PARA UF reconhecida pelo MAPA como livre da ocorrência de Broca Conígera",
  hosp: ["Myroxylon balsamum", "Anacardium occidentale", "Delonix regia", "Manihot esculenta", "Mangifera indica", "Switenia macrophyla", "Hevea brasiliensis", "Tectona grandis"],
  part: ["madeira", "maniva", "estaca"],
  orig: ["MT"],
  dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
  prag: "Sinoxylon conigerum",
  pragc: "BROCA CONÍGERA",
  exig: [
    "PTV."
  ],
  leg: "",
  link: "",
  proib: false
}, 

//COCHONILHA-DO-CARMIM
{
  desc: "DE UF com ocorrência de Cochonilha-do-carmim PARA UF reconhecida pelo MAPA como livre da ocorrência de Cochonilha-do-carmim",
  hosp: ["Opuntia cochenillifera"],
  part: ["palma"],
  orig: ["CE", "PB", "PE", "PI", "RN"],
  dest: ["AC", "AL", "AM", "AP", "BA", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PR", "RJ", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
  prag: "Dactylopius opuntiae",
  pragc: "COCHONILHA-DO-CARMIM",
  exig: [
    "PTV; \nObs.: Nas barreiras fitossanitárias interestaduais, caso seja constatada por meio de inspeção visual, infestação por cochonilha-do-carmim, independente da espécie, toda a partida será imediatamente apreendida e destruída de modo a impedir a sobrevivência da praga, conforme o art. 6º. da Instrução Normativa MAPA nº. 23 de maio de 2007."
  ],
  leg: "Instrução Normativa MAPA nº 23, de 29 de maio de 2007",
  link: "leg/IN23-2007.pdf",
  proib: false
}, 

//MOKO-DA-BANANEIRA
{
  desc: "Material para pesquisa DE qualquer UF PARA UF sem ocorrência",  //ok
  hosp: ["Musa spp.", "Heliconia spp."],
  part: ["material para pesquisa"],
  orig: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
  dest: ["AC", "AL", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PB", "PE", "PI", "PR", "RJ", "RN", "RS", "SC", "SP", "TO"],
  prag: "Ralstonia solanacearum raça 2",
  pragc: "MOKO-DA-BANANEIRA",
  exig: [
    "Autorização da Superintendência Federal de Agricultura, Pecuária e Abastecimento (SFA), da UF de origem da partida;",
    "A partida deve ser transportada em recipiente lacrado;",
  ],
  leg: "Instrução Normativa SDA/MAPA nº 17, de 27 de maio de 2009",
  link: "leg/IN17-2009.pdf",
  proib: false
}, {
  desc: "DE UF com ocorrência de Moko-da-bananeira PARA todas as UFs",
  hosp: ["Musa spp.", "Heliconia spp."],
  part: ["mudas","rizomas"],
  orig: ["AM", "AP", "PA", "RO", "RR", "SE"],
  dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
  prag: "Ralstonia solanacearum raça 2",
  pragc: "MOKO-DA-BANANEIRA",
  exig: [
    "TRÂNSITO PROIBIDO, exceto para mudas transportadas en vitro ou micropropagadas. \nObs.: Partida apreendida pela fiscalização de defesa sanitária vegetal, em desacordo com estas exigências, será sumariamente destruída ou retornada à origem, sem prejuízo das demais sanções estabelecidas pela legislação própria, conforme o art. 11 da Instrução Normativa SDA nº. 17, de 27 de maio de 2009",
    "Para mudas transportadas en vitro ou micropropagadas, será exigido: \na)PTV com a seguinte declaração adicional: \"As mudas encontram- se livres de Ralstonia solanacearum raça 2\". \nb) A carga deverá estar lacrada e o número do lacre constar na PTV. \nc) Na PTV deve constar se as mudas são in vitro ou micropropagadas;"
  ],
  leg: "Instrução Normativa SDA/MAPA nº 17, de 27 de maio de 2009",
  link: "leg/IN17-2009.pdf",
  proib: false
}, {
  desc: "DE Área Livre de Moko-da-bananeira PARA todas as UFs",
  hosp: ["Musa spp.", "Heliconia spp."],
  part: ["mudas","rizomas"],
  orig: ["CE", "PE", "PI", "SC"],
  dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
  prag: "Ralstonia solanacearum raça 2",
  pragc: "MOKO-DA-BANANEIRA",
  exig: [
    "PTV com  a seguinte declaração adicional: \"As mudas foram produzidas em Área Livre de Ralstonia solanacearum raça 2, oficialmente reconhecida pelo Ministério da Agricultura, Pecuária e Abastecimento.\".  \nObs.: Partida apreendida pela fiscalização de defesa sanitária vegetal, em desacordo com estas exigências, será sumariamente destruída ou retornada à origem, sem prejuízo das demais sanções estabelecidas pela legislação própria, conforme o art. 11 da Instrução Normativa SDA nº. 17, de 27 de maio de 2009.",
    "A carga deverá estar lacrada e o número do lacre constar na PTV."
  ],
  leg: "Instrução Normativa SDA/MAPA nº 17, de 27 de maio de 2009",
  link: "leg/IN17-2009.pdf",
  proib: false
}, {
  desc: "DE UF sem ocorrência de Moko-da-bananeira PARA todas as UFs",
  hosp: ["Musa spp.", "Heliconia spp."],
  part: ["mudas","rizomas"],
  orig: ["AC", "AL", "BA", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PB", "PR", "RJ", "RN", "RS", "SP", "TO"],
  dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
  prag: "Ralstonia solanacearum raça 2",
  pragc: "MOKO-DA-BANANEIRA",
  exig: [
    "PTV com  a seguinte declaração adicional: \"As mudas se encontram livres de Ralstonia solanacearum raça 2.\".  \nObs.: Partida apreendida pela fiscalização de defesa sanitária vegetal, em desacordo com estas exigências, será sumariamente destruída ou retornada à origem, sem prejuízo das demais sanções estabelecidas pela legislação própria, conforme o art. 11 da Instrução Normativa SDA nº. 17, de 27 de maio de 2009.",
    "Quando transitar pelas UFs AM, AP, PA, RO, RR e SE, onde ocorre a praga, a carga deverá estar lacrada e o número do lacre constar na PTV."
  ],
  leg: "Instrução Normativa SDA/MAPA nº 17, de 27 de maio de 2009",
  link: "leg/IN17-2009.pdf",
  proib: false
},{
  desc: "DE UF com ocorrência de Moko-da-bananeira PARA área livre de Moko-da-bananeira",
  hosp: ["Musa spp.", "Heliconia spp."],
  part: ["frutos", "flores"],
  orig: ["AM", "AP", "PA", "RO", "RR", "SE"],
  dest: ["CE", "PE", "PI", "SC"],
  prag: "Ralstonia solanacearum raça 2",
  pragc: "MOKO-DA-BANANEIRA",
  exig: [
    "PTV com a seguinte declaração adicional: \"Os frutos ou inflorescências foram produzidos sob aplicação de medidas integradas em um enfoque de Sistemas para o Manejo de Risco da praga Ralstonia solanacearum raça 2\"; \nObs.: Partida apreendida pela fiscalização de defesa sanitária vegetal, em desacordo com estas exigências, será sumariamente destruída ou retornada à origem, sem prejuízo das demais sanções estabelecidas pela legislação própria, conforme o art. 11 da Instrução Normativa SDA nº. 17, de 27 de maio de 2009."
  ],
  leg: "Instrução Normativa SDA/MAPA nº 17, de 27 de maio de 2009",
  link: "leg/IN17-2009.pdf",
  proib: false
}, {
  desc: "DE área livre de Moko-da-bananeira PARA área livre de Moko-da-bananeira",
  hosp: ["Heliconia spp.", "Musa spp."],
  part: ["frutos", "flores"],
  orig: ["CE", "PE", "PI", "SC"],
  dest: ["CE", "PE", "PI", "SC"],
  prag: "Ralstonia solanacearum raça 2",
  pragc: "MOKO-DA-BANANEIRA",
  exig: [
    "PTV com a seguinte declaração adicional: \"As mudas foram produzidas em área livre de Ralstonia solanacearum raça 2, oficialmente reconhecida pelo Ministério da Agricultura, Pecuária e Abastecimento\". \nObs.: Partida apreendida pela fiscalização de defesa sanitária vegetal, em desacordo com estas exigências, será sumariamente destruída ou retornada à origem, sem prejuízo das demais sanções estabelecidas pela legislação própria, conforme o art. 11 da Instrução Normativa SDA nº. 17, de 27 de maio de 2009."
  ],
  leg: "Instrução Normativa SDA/MAPA nº 17, de 27 de maio de 2009",
  link: "leg/IN17-2009.pdf",
  proib: undefined
},{
  desc: "DE UF sem ocorrência de Moko-da-bananeira PARA todas as UFs",
  hosp: ["Musa spp.", "Heliconia spp."],
  part: ["frutos", "flores"],
  orig: ["AC", "AL", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PB", "PE", "PI", "PR", "RJ", "RN", "RS", "SC", "SP", "TO"],
  dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
  prag: "Ralstonia solanacearum raça 2",
  pragc: "MOKO-DA-BANANEIRA",
  exig: [
    "PTV para comprovar a origem. \nObs.: Partida apreendida pela fiscalização de defesa sanitária vegetal, em desacordo com estas exigências, será sumariamente destruída ou retornada à origem, sem prejuízo das demais sanções estabelecidas pela legislação própria, conforme o art. 11 da Instrução Normativa SDA nº. 17, de 27 de maio de 2009;"
  ],
  leg: "Instrução Normativa SDA/MAPA nº 17, de 27 de maio de 2009",
  link: "leg/IN17-2009.pdf",
  proib: false
}, {
  desc: "DE UF com ocorrência de Moko-da-bananeira PARA UF sem ocorrência de Moko-da-bananeira",
  hosp: ["Musa spp.", "Heliconia spp."],
  part: ["frutos", "flores"],
  orig: ["AM", "AP", "PA", "RO", "RR", "SE"],
  dest: ["AC", "AL", "BA", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PB", "PR", "RJ", "RN", "RS", "SP", "TO"],
  prag: "Ralstonia solanacearum raça 2",
  pragc: "MOKO-DA-BANANEIRA",
  exig: [
    "PTV com a seguinte declaração adicional: \"Os frutos ou inflorescências foram produzidos em UP onde não foi observada a presença de Ralstonia solanacearum raça 2, nos últimos doze meses\" OU \nPTV com a seguinte declaração adicional: \"Os frutos ou inflorescências foram produzidos sob aplicação de medidas integradas em um enfoque de Sistemas para o Manejo de Risco da praga Ralstonia solanacearum raça 2\"; \nObs.: Partida apreendida pela fiscalização de defesa sanitária vegetal, em desacordo com estas exigências, será sumariamente destruída ou retornada à origem, sem prejuízo das demais sanções estabelecidas pela legislação própria, conforme o art. 11 da Instrução Normativa SDA nº. 17, de 27 de maio de 2009."
  ],
  leg: "Instrução Normativa SDA/MAPA nº 17, de 27 de maio de 2009",
  link: "leg/IN17-2009.pdf",
  proib: false
},

//SIGATOKA NEGRA
{
  desc: "Mudas Micropropagadas DE qualquer UF PARA qualquer UF",  //ok
  hosp: ["Heliconia spp.", "Musa spp."],
  part: ["mudas"],
  orig: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
  dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
  prag: "Mycosphaerella fijiensis",
  pragc: "SIGATOKA NEGRA",
  exig: [
    "PTV;", 
    "As mudas devem ser transportadas in vitro;",
    "A exigência de PTV não se aplica às espécies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;",
    "Estas exigências só se aplicam a mudas micropropagadas; Para outras mudas que não sejam micropropagadas, o trânsito é proibido",
  ],
  leg: "Instrução Normativa SDA/MAPA nº 17, de 31 de maio de 2005",
  link: "leg/IN17-2005.pdf",
  proib: undefined
}, {
  desc: "Material para pesquisa DE qualquer UF PARA qualquer UF",
  hosp: ["Musa spp.", "Heliconia spp."],
  part: ["material para pesquisa"],
  orig: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
  dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
  prag: "Mycosphaerella fijiensis",
  pragc: "SIGATOKA NEGRA",
  exig: [
    "Autorização Declaratória emitida pela Área de Sanidade Vegetal da Superintendência Federal da Agricultura - SFA, na Unidade da Federação de origem do material genético;",
    "O material genético deve ser transportado em recipiente lacrado, devendo o número do lacre constar da Autorização Declaratória;",
    "O interessado deve comunicar a SFA de destino da partida, quando do recebimento do material, para inspeção fitossanitária;",
    "Estas exigências fitossanitárias só se aplicam a material genético;"
  ],
  leg: "Instrução Normativa SDA/MAPA nº 17, de 31 de maio de 2005",
  link: "leg/IN17-2005.pdf",
  proib: false
}, {
  desc: "DE área livre de Sigatoka Negra PARA área com ocorrência de Sigatoka Negra",  //ok
  hosp: ["Musa spp.", "Heliconia spp."],
  part: ["frutos", "flores"],
  orig: ["AL", "CE", "DF", "GO", "PB", "PE", "PI", "RN", "SE"],
  dest: ["AC", "AM", "AP", "MA", "MG", "MS", "MT", "PA", "PR", "RS", "RJ", "RO", "RR", "SC", "SP", "TO", "BA", "ES"],
  prag: "Mycosphaerella fijiensis",
  pragc: "SIGATOKA NEGRA",
  exig: [
    "PTV com a declaração adicional de que a partida é originária de área livre de Sigatoka Negra;",
    "As bananas não podem transitar em cacho, em todo o território nacional;",
    "A partida deve estar livre de folhas de bananeira ou de parte da planta, no acondicionamento dos frutos;",
    "Estas exigências não se aplicam às espécies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;"
  ],
  leg: "Instrução Normativa SDA/MAPA nº 17, de 31 de maio de 2005",
  link: "leg/IN17-2005.pdf",
  proib: false
}, {
  desc: "DE área livre de Sigatoka Negra PARA área com ocorrência de Sigatoka Negra",  //ok
  hosp: ["Musa spp.", "Heliconia spp."],
  part: ["frutos", "flores"],
  orig: ["MG"],
  dest: ["AC", "AM", "AP", "MA", "MS", "MT", "PA", "PR", "RS", "RJ", "RO", "RR", "SC", "SP", "TO", "BA", "ES"],
  prag: "Mycosphaerella fijiensis",
  pragc: "SIGATOKA NEGRA",
  exig: [
    "PTV com a declaração adicional de que a partida é originária de área livre de Sigatoka Negra;",
    "As bananas não podem transitar em cacho, em todo o território nacional;",
    "A partida deve estar livre de folhas de bananeira ou de parte da planta, no acondicionamento dos frutos;",
    "Estas exigências não se aplicam às espécies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;",
    "Estas exigências só se aplicam a partida proveniente do municípios livres de Sigatoka Negra em MG: Águas Vermelhas, Araçuaí, Araguari, Araporã, Bocaiúva, Buritizeiro, Cachoeira Dourada, Campina Verde, Campos Altos, Canápolis, Capinópolis, Capitão Enéias, Carmo do Paranaíba, Carneirinho, Cascalho Rico, Catuti, Centralina, Claro dos Poções, Engenheiro Navarro, Espinosa, Estrela do Sul, Francisco Sá, Franscisco Dumont, Frutal, Guaraciama, Gurinhatã, Indianópolis, Ipiaçu, Iraí de Minas, Itacarambi, Itaobim, Itapagipe, Ituiutaba,Iturama, Jaíba, Janaúba, Januária, Jequitaí, Jequitinhonha, Joaíma, João Pinheiro, Lagamar, Lagoa Formosa, Lassance, Limeira do Oeste, Manga, Matias Cardoso, Mato Verde, Medina, Monte Alegre de Minas, Monte Azul, Monte Carmelo, Montes Claros, Nova Ponte, Nova Porteirinha, Pai Pedro, Paracatu, Patos de Minas, Patrocínio, Pedra de Maria da Cruz, Perdizes, Pirapora, Ponto dos Volantes, Porteirinha, Prata, Presidente Olegário, Rio Paranaíba, Sacramento, Santa Rosa da Serra, Santa Vitória, Santo Antonio do Retiro, São Francisco, São Gonçalo do Abaeté, São Gotardo, São João das Missões, Serra do Salitre, Tapira, Tupaciguara, Uberaba, Uberlândia, Unaí, Varjão de Minas, Várzea da Palma, Vazante, Verdelândia e Veríssimo; "
  ],
  leg: "Instrução Normativa SDA/MAPA nº 17, de 31 de maio de 2005",
  link: "leg/IN17-2005.pdf",
  proib: false
}, {
  desc: "DE área livre de Sigatoka Negra PARA área com ocorrência de Sigatoka Negra",  //ok
  hosp: ["Musa spp.", "Heliconia spp."],
  part: ["frutos", "flores"],
  orig: ["MS"],
  dest: ["AC", "AM", "AP", "MA", "MG", "MT", "PA", "PR", "RS", "RJ", "RO", "RR", "SC", "SP", "TO", "BA", "ES"],
  prag: "Mycosphaerella fijiensis",
  pragc: "SIGATOKA NEGRA",
  exig: ["PTV com a declaração adicional de que a partida é originária de área livre de Sigatoka Negra;",
    "As bananas não podem transitar em cacho, em todo o território nacional;",
    "A partida deve estar livre de folhas de bananeira ou de parte da planta, no acondicionamento dos frutos;",
    "Estas exigências não se aplicam às espécies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;",
    "Estas exigências só se aplicam a partida proveniente de municípios livres de Sigatoka Negra de MS: Água Clara, Anaurilândia, Aparecida do Taboado, Bataguassú,Batayporã, Brasilândia, Cassilândia, Chapadão do Sul, Inocência, Nova Andradina, Paranaíba, Ribas do Rio Pardo, Santa Rita do Pardo, Selvíria, Taquarussú e Três Lagoas;"
  ],
  leg: "Instrução Normativa SDA/MAPA nº 17, de 31 de maio de 2005",
  link: "leg/IN17-2005.pdf",
  proib: false
}, {
  desc: "DE área livre de Sigatoka Negra PARA área livre de Sigatoka Negra ",  //ok
  hosp: ["Musa spp.", "Heliconia spp."],
  part: ["frutos", "flores"],
  orig: ["AL", "CE", "DF", "GO", "MG", "MS", "PB", "PE", "PI", "RN", "SE"],
  dest: ["AL", "CE", "DF", "GO", "MG", "MS", "PB", "PE", "PI", "RN", "SE"],
  prag: "Mycosphaerella fijiensis",
  pragc: "SIGATOKA NEGRA",
  exig: ["PTV com a declaração adicional de que a partida é originária de área livre de Sigatoka Negra;",
    "A partida deve estar lacrada para transitar por AC, AM, AP, MA, MG (exceto pelos municípios listados no item 6.1), MS (exceto pelos municípios listados no item 6.2), MT, PA, PR, RS, RJ, RO, RR, SC, SP e TO;",
    "As bananas não podem transitar em cacho, em todo o território nacional;",
    "A partida deve estar livre de folhas de bananeira ou de parte da planta, no acondicionamento dos frutos;",
    "Estas exigências não se aplicam às espécies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;",
    "Nas UFs de MG e de MS estas exigências só se aplicam a partida proveniente e destinada a município livre de Sigatoka Negra: \n\n6.1 - Municípios livres de Sigatoka Negra de MG: Águas Vermelhas, Araçuaí, Araguari, Araporã, Bocaiúva, Buritizeiro, Cachoeira Dourada, Campina Verde, Campos Altos, Canápolis, Capinópolis, Capitão Enéias, Carmo do Paranaíba, Carneirinho, Cascalho Rico, Catuti, Centralina, Claro dos Poções, Engenheiro Navarro, Espinosa, Estrela do Sul, Francisco Sá, Franscisco Dumont, Frutal, Guaraciama, Gurinhatã, Indianópolis, Ipiaçu, Iraí de Minas, Itacarambi, Itaobim, Itapagipe, Ituiutaba,Iturama, Jaíba, Janaúba, Januária, Jequitaí, Jequitinhonha, Joaíma, João Pinheiro, Lagamar, Lagoa Formosa, Lassance, Limeira do Oeste, Manga, Matias Cardoso, Mato Verde, Medina, Monte Alegre de Minas, Monte Azul, Monte Carmelo, Montes Claros, Nova Ponte, Nova Porteirinha, Pai Pedro, Paracatu, Patos de Minas, Patrocínio, Pedra de Maria da Cruz, Perdizes, Pirapora, Ponto dos Volantes, Porteirinha, Prata, Presidente Olegário, Rio Paranaíba, Sacramento, Santa Rosa da Serra, Santa Vitória, Santo Antonio do Retiro, São Francisco, São Gonçalo do Abaeté, São Gotardo, São João das Missões, Serra do Salitre, Tapira, Tupaciguara, Uberaba, Uberlândia, Unaí, Varjão de Minas, Várzea da Palma, Vazante, Verdelândia e Veríssimo; \n\n6.2 - Municípios livres de Sigatoka Negra de MS: Água Clara, Anaurilândia, Aparecida do Taboado, Bataguassú,Batayporã, Brasilândia, Cassilândia, Chapadão do Sul, Inocência, Nova Andradina, Paranaíba, Ribas do Rio Pardo, Santa Rita do Pardo, Selvíria, Taquarussú e Três Lagoas;"
  ],
  leg: "Instrução Normativa SDA/MAPA nº 17, de 31 de maio de 2005",
  link: "leg/IN17-2005.pdf",
  proib: false
}, {
  desc: "DE área com ocorrência de Sigatoka Negra PARA demais áreas", 
  hosp: ["Musa spp.", "Heliconia spp."],
  part: ["frutos", "flores"],
  orig: ["AC", "AM", "AP", "MA", "MG", "MS", "MT", "PA", "PR", "RS", "RJ", "RO", "RR", "SC", "SP", "TO", "BA", "ES"],
  dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
  prag: "Mycosphaerella fijiensis",
  pragc: "SIGATOKA NEGRA",
  exig: [
    "PTV com a seguinte declaração adicional: \"A partida é originária de Unidade de Produção onde foi implantado o Sistema de Mitigação de Risco para Sigatoka Negra\";",
    "As bananas não podem transitar em cacho, em todo o território nacional;",
    "A partida deve estar livre de folhas de bananeira ou de parte da planta, no acondicionamento dos frutos;",
    "Estas exigências não se aplicam às espécies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;"    
  ],
  leg: "Instrução Normativa SDA/MAPA nº 17, de 31 de maio de 2005",
  link: "leg/IN17-2005.pdf",
  proib: false
}, {
  desc: "DE área com ocorrência de Sigatoka Negra PARA área com ocorrência de Sigatoka Negra",  //ok
  hosp: ["Musa spp.", "Heliconia spp."],
  part: ["frutos", "flores"],
  orig: ["AC", "AM", "AP", "MA", "MG", "MS", "MT", "PA", "PR", "RS", "RJ", "RO", "RR", "SC", "SP", "TO", "BA", "ES"],
  dest: ["AC", "AM", "AP", "MA", "MG", "MS", "MT", "PA", "PR", "RS", "RJ", "RO", "RR", "SC", "SP", "TO", "BA", "ES"],
  prag: "Mycosphaerella fijiensis",
  pragc: "SIGATOKA NEGRA",
  exig: [
    "Partida isenta de PTV, mas é PROIBIDO o trânsito por AL, CE, DF, GO, PB, PE, PI, RN, SE, bem como pelos municípios livres de Sigatoka Negra de MG e de MS: \n\na) Municípios livres de Sigatoka Negra de MG: Águas Vermelhas, Araçuaí, Araguari, Araporã, Bocaiúva, Buritizeiro, Cachoeira Dourada, Campina Verde, Campos Altos, Canápolis, Capinópolis, Capitão Enéias, Carmo do Paranaíba, Carneirinho, Cascalho Rico, Catuti, Centralina, Claro dos Poções, Engenheiro Navarro, Espinosa, Estrela do Sul, Francisco Sá, Franscisco Dumont, Frutal, Guaraciama, Gurinhatã, Indianópolis, Ipiaçu, Iraí de Minas, Itacarambi, Itaobim, Itapagipe, Ituiutaba,Iturama, Jaíba, Janaúba, Januária, Jequitaí, Jequitinhonha, Joaíma, João Pinheiro, Lagamar, Lagoa Formosa, Lassance, Limeira do Oeste, Manga, Matias Cardoso, Mato Verde, Medina, Monte Alegre de Minas, Monte Azul, Monte Carmelo, Montes Claros, Nova Ponte, Nova Porteirinha, Pai Pedro, Paracatu, Patos de Minas, Patrocínio, Pedra de Maria da Cruz, Perdizes, Pirapora, Ponto dos Volantes, Porteirinha, Prata, Presidente Olegário, Rio Paranaíba, Sacramento, Santa Rosa da Serra, Santa Vitória, Santo Antonio do Retiro, São Francisco, São Gonçalo do Abaeté, São Gotardo, São João das Missões, Serra do Salitre, Tapira, Tupaciguara, Uberaba, Uberlândia, Unaí, Varjão de Minas, Várzea da Palma, Vazante, Verdelândia e Veríssimo; \n\nb)Municípios livres de Sigatoka Negra de MS: Água Clara, Anaurilândia, Aparecida do Taboado, Bataguassú, Batayporã, Brasilândia, Cassilândia, Chapadão do Sul, Inocência, Nova Andradina, Paranaíba, Ribas do Rio Pardo, Santa Rita do Pardo, Selvíria, Taquarussú e Três Lagoas;",
    "Estas exigências não se aplicam às espécies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;"
  ],
  leg: "Instrução Normativa SDA/MAPA nº 17, de 31 de maio de 2005",
  link: "leg/IN17-2005.pdf",
  proib: false
}, {
  desc: "DE área livre de Sigatoka Negra PARA área com ocorrência de Sigatoka Negra",  //ok
  hosp: ["Musa spp.", "Heliconia spp."],
  part: ["mudas"],
  orig: ["AL", "CE", "DF", "GO", "PB", "PE", "PI", "RN", "SE"],
  dest: ["AC", "AM", "AP", "MA", "MG", "MS", "MT", "PA", "PR", "RS", "RJ", "RO", "RR", "SC", "SP", "TO", "BA", "ES"],
  prag: "Mycosphaerella fijiensis",
  pragc: "SIGATOKA NEGRA",
  exig: [
    "PTV com a Declaração Adicional constando que a partida é originária de área livre da Sigatoka Negra;",  //verificar
    "A partida deve estar livre de folhas de bananeira ou de parte da planta, no acondicionamento das mudas;",
    "Estas exigências não se aplicam às espécies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;"
  ],
  leg: "Instrução Normativa SDA/MAPA nº 17, de 31 de maio de 2005",
  link: "leg/IN17-2005.pdf",
  proib: false
}, {
  desc: "DE área livre de Sigatoka Negra PARA área com ocorrência de Sigatoka Negra",  //ok
  hosp: ["Musa spp.", "Heliconia spp."],
  part: ["mudas"],
  orig: ["MG"],
  dest: ["AC", "AM", "AP", "MA", "MS", "MT", "PA", "PR", "RS", "RJ", "RO", "RR", "SC", "SP", "TO", "BA", "ES"],
  prag: "Mycosphaerella fijiensis",
  pragc: "SIGATOKA NEGRA",
  exig: [
    "PTV com a Declaração Adicional constando que a partida é originária de área livre da Sigatoka Negra;",  //verificar
    "A partida deve estar livre de folhas de bananeira ou de parte da planta, no acondicionamento das mudas;",
    "Estas exigências não se aplicam às espécies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;",
    "Estas exigências só se aplicam a partida proveniente de municípios livres de Sigatoka Negra de MG: Águas Vermelhas, Araçuaí, Araguari, Araporã, Bocaiúva, Buritizeiro, Cachoeira Dourada, Campina Verde, Campos Altos, Canápolis, Capinópolis, Capitão Enéias, Carmo do Paranaíba, Carneirinho, Cascalho Rico, Catuti, Centralina, Claro dos Poções, Engenheiro Navarro, Espinosa, Estrela do Sul, Francisco Sá, Franscisco Dumont, Frutal, Guaraciama, Gurinhatã, Indianópolis, Ipiaçu, Iraí de Minas, Itacarambi, Itaobim, Itapagipe, Ituiutaba,Iturama, Jaíba, Janaúba, Januária, Jequitaí, Jequitinhonha, Joaíma, João Pinheiro, Lagamar, Lagoa Formosa, Lassance, Limeira do Oeste, Manga, Matias Cardoso, Mato Verde, Medina, Monte Alegre de Minas, Monte Azul, Monte Carmelo, Montes Claros, Nova Ponte, Nova Porteirinha, Pai Pedro, Paracatu, Patos de Minas, Patrocínio, Pedra de Maria da Cruz, Perdizes, Pirapora, Ponto dos Volantes, Porteirinha, Prata, Presidente Olegário, Rio Paranaíba, Sacramento, Santa Rosa da Serra, Santa Vitória, Santo Antonio do Retiro, São Francisco, São Gonçalo do Abaeté, São Gotardo, São João das Missões, Serra do Salitre, Tapira, Tupaciguara, Uberaba, Uberlândia, Unaí, Varjão de Minas, Várzea da Palma, Vazante, Verdelândia e Veríssimo;"
  ],
  leg: "Instrução Normativa SDA/MAPA nº 17, de 31 de maio de 2005",
  link: "leg/IN17-2005.pdf",
  proib: false
}, {
  desc: "DE área livre de Sigatoka Negra PARA área com ocorrência de Sigatoka Negra",  //ok
  hosp: ["Musa spp.", "Heliconia spp."],
  part: ["mudas"],
  orig: ["MS"],
  dest: ["AC", "AM", "AP", "MA", "MG", "MS", "MT", "PA", "PR", "RS", "RJ", "RO", "RR", "SC", "SP", "TO", "BA", "ES"],
  prag: "Mycosphaerella fijiensis",
  pragc: "SIGATOKA NEGRA",
  exig: [
    "PTV com a Declaração Adicional constando que a partida é originária de área livre da Sigatoka Negra;",  //Verificar
    "A partida deve estar livre de folhas de bananeira ou de parte da planta, no acondicionamento das mudas;",
    "exigências não se aplicam às espécies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;",
    "Estas exigências só se aplicam a partida proveniente de municípios livres de Sigatoka Negra de MS: Água Clara, Anaurilândia, Aparecida do Taboado, Bataguassú,Batayporã, Brasilândia, Cassilândia, Chapadão do Sul, Inocência, Nova Andradina, Paranaíba, Ribas do Rio Pardo, Santa Rita do Pardo, Selvíria, Taquarussú e Três Lagoas;",
    "Estas exigências só se aplicam a mudas não micropopagadas;"
  ],
  leg: "Instrução Normativa SDA/MAPA nº 17, de 31 de maio de 2005",
  link: "leg/IN17-2005.pdf",
  proib: false
}, {
  desc: "DE área livre de Sigatoka Negra PARA área livre de Sigatoka Negra",  //ok
  hosp: ["Musa spp.", "Heliconia spp."],
  part: ["mudas"],
  orig: ["AL", "CE", "DF", "GO", "MG", "MS", "PB", "PE", "PI", "RN", "SE"],
  dest: ["AL", "CE", "DF", "GO", "MG", "MS", "PB", "PE", "PI", "RN", "SE"],
  prag: "Mycosphaerella fijiensis",
  pragc: "SIGATOKA NEGRA",
  exig: [
    "PTV com a Declaração Adicional constando que a partida é originária de área livre da Sigatoka Negra.",
    "A partida deve estar lacrada para transitar por AC, AM, AP, MA, MG (exceto pelos municípios listados no item 5.1), MS (exceto pelos municípios listados no item 5.2), MT, PA, PR, RS, RJ, RO, RR, SC, SP e TO;",
    "A partida deve estar livre de folhas de bananeira ou de parte da planta, no acondicionamento das mudas;",
    "Estas exigências não se aplicam às espécies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;",
    "Para as Ufs de MG e MS estas exigências só se aplicam a partida proveniente e destinada a município livre de Sigatoka Negra: \n\n5.1 -  Municípios livres de Sigatoka Negra de MG: Águas Vermelhas, Araçuaí, Araguari, Araporã, Bocaiúva, Buritizeiro, Cachoeira Dourada, Campina Verde, Campos Altos, Canápolis, Capinópolis, Capitão Enéias, Carmo do Paranaíba, Carneirinho, Cascalho Rico, Catuti, Centralina, Claro dos Poções, Engenheiro Navarro, Espinosa, Estrela do Sul, Francisco Sá, Franscisco Dumont, Frutal, Guaraciama, Gurinhatã, Indianópolis, Ipiaçu, Iraí de Minas, Itacarambi, Itaobim, Itapagipe, Ituiutaba, Iturama, Jaíba, Janaúba, Januária, Jequitaí, Jequitinhonha, Joaíma, João Pinheiro, Lagamar, Lagoa Formosa, Lassance, Limeira do Oeste, Manga, Matias Cardoso, Mato Verde, Medina, Monte Alegre de Minas, Monte Azul, Monte Carmelo, Montes Claros, Nova Ponte, Nova Porteirinha, Pai Pedro, Paracatu, Patos de Minas, Patrocínio, Pedra de Maria da Cruz, Perdizes, Pirapora, Ponto dos Volantes, Porteirinha, Prata, Presidente Olegário, Rio Paranaíba, Sacramento, Santa Rosa da Serra, Santa Vitória, Santo Antonio do Retiro, São Francisco, São Gonçalo do Abaeté, São Gotardo, São João das Missões, Serra do Salitre, Tapira, Tupaciguara, Uberaba, Uberlândia, Unaí, Varjão de Minas, Várzea da Palma, Vazante, Verdelândia e Veríssimo; \n\n5.2 - Municípios livres de Sigatoka Negra de MS: Água Clara, Anaurilândia, Aparecida do Taboado, Bataguassú, Batayporã, Brasilândia, Cassilândia, Chapadão do Sul, Inocência, Nova Andradina, Paranaíba, Ribas do Rio Pardo, Santa Rita do Pardo, Selvíria, Taquarussú e Três Lagoas;",
    "Estas exigências só se aplicam a mudas não micropopagadas;"
  ],
  leg: "Instrução Normativa SDA/MAPA nº 17, de 31 de maio de 2005",
  link: "leg/IN17-2005.pdf",
  proib: false
}, {
  desc: "DE área com ocorrência de Sigatoka Negra PARA área livre de Sigatoka Negra",  //ok
  hosp: ["Musa spp.", "Heliconia spp."],
  part: ["mudas"],
  orig: ["AC", "AM", "AP", "MA", "MG", "MS", "MT", "PA", "PR", "RS", "RJ", "RO", "RR", "SC", "SP", "TO", "BA", "ES"],
  dest: ["AL", "CE", "DF", "GO", "MG", "MS", "PB", "PE", "PI", "RN", "SE"],
  prag: "Mycosphaerella fijiensis",
  pragc: "SIGATOKA NEGRA",
  exig: [
    "TRÂNSITO PROIBIDO para mudas convencionais. Esta proibição não se aplica à mudas micropopagadas;",
    "Esta proibição não se aplica às espécies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;",
    "Para as UFs de MG e MS, esta proibição só se aplica a partida destinada a município livre de Sigatoka Negra:\n\n3.1 - Municípios livres de Sigatoka Negra de MG: Águas Vermelhas, Araçuaí, Araguari, Araporã, Bocaiúva, Buritizeiro, Cachoeira Dourada, Campina Verde, Campos Altos, Canápolis, Capinópolis, Capitão Enéias, Carmo do Paranaíba, Carneirinho, Cascalho Rico, Catuti, Centralina, Claro dos Poções, Engenheiro Navarro, Espinosa, Estrela do Sul, Francisco Sá, Franscisco Dumont, Frutal, Guaraciama, Gurinhatã, Indianópolis, Ipiaçu, Iraí de Minas, Itacarambi, Itaobim, Itapagipe, Ituiutaba,Iturama, Jaíba, Janaúba, Januária, Jequitaí, Jequitinhonha, Joaíma, João Pinheiro, Lagamar, Lagoa Formosa, Lassance, Limeira do Oeste, Manga, Matias Cardoso, Mato Verde, Medina, Monte Alegre de Minas, Monte Azul, Monte Carmelo, Montes Claros, Nova Ponte, Nova Porteirinha, Pai Pedro, Paracatu, Patos de Minas, Patrocínio, Pedra de Maria da Cruz, Perdizes, Pirapora, Ponto dos Volantes, Porteirinha, Prata, Presidente Olegário, Rio Paranaíba, Sacramento, Santa Rosa da Serra, Santa Vitória, Santo Antonio do Retiro, São Francisco, São Gonçalo do Abaeté, São Gotardo, São João das Missões, Serra do Salitre, Tapira, Tupaciguara, Uberaba, Uberlândia, Unaí, Varjão de Minas, Várzea da Palma, Vazante, Verdelândia e Veríssimo;\n\n3.2 - Municípios livres de Sigatoka Negra de MS: Água Clara, Anaurilândia, Aparecida do Taboado, Bataguassú,Batayporã, Brasilândia, Cassilândia, Chapadão do Sul, Inocência, Nova Andradina, Paranaíba, Ribas do Rio Pardo, Santa Rita do Pardo, Selvíria, Taquarussú e Três Lagoas;"
  ],
  leg: "Instrução Normativa SDA/MAPA nº 17, de 31 de maio de 2005",
  link: "leg/IN17-2005.pdf",
  proib: true
}, {
  desc: "DE área com ocorrência de Sigatoka Negra PARA área com ocorrência de Sigatoka Negra",  //ok
  hosp: ["Musa spp.", "Heliconia spp."],
  part: ["mudas"],
  orig: ["AC", "AM", "AP", "MA", "MG", "MS", "MT", "PA", "PR", "RS", "RJ", "RO", "RR", "SC", "SP", "TO", "BA", "ES"],
  dest: ["AC", "AM", "AP", "MA", "MG", "MS", "MT", "PA", "PR", "RS", "RJ", "RO", "RR", "SC", "SP", "TO", "BA", "ES"],
  prag: "Mycosphaerella fijiensis",
  pragc: "SIGATOKA NEGRA",
  exig: [
    "TRÂNSITO PROIBIDO para mudas convencionais. Esta proibição não se aplica à mudas micropopagadas;",
    "Esta proibição não se aplica a partida proveniente de município livre de Sigatoka Negra de MG e de MS: \n\na)Municípios livres de Sigatoka Negra de MG: Águas Vermelhas, Araçuaí, Araguari, Araporã, Bocaiúva, Buritizeiro, Cachoeira Dourada, Campina Verde, Campos Altos, Canápolis, Capinópolis, Capitão Enéias, Carmo do Paranaíba, Carneirinho, Cascalho Rico, Catuti, Centralina, Claro dos Poções, Engenheiro Navarro, Espinosa, Estrela do Sul, Francisco Sá, Franscisco Dumont, Frutal, Guaraciama, Gurinhatã, Indianópolis, Ipiaçu, Iraí de Minas, Itacarambi, Itaobim, Itapagipe, Ituiutaba,Iturama, Jaíba, Janaúba, Januária, Jequitaí, Jequitinhonha, Joaíma, João Pinheiro, Lagamar, Lagoa Formosa, Lassance, Limeira do Oeste, Manga, Matias Cardoso, Mato Verde, Medina, Monte Alegre de Minas, Monte Azul, Monte Carmelo, Montes Claros, Nova Ponte, Nova Porteirinha, Pai Pedro, Paracatu, Patos de Minas, Patrocínio, Pedra de Maria da Cruz, Perdizes, Pirapora, Ponto dos Volantes, Porteirinha, Prata, Presidente Olegário, Rio Paranaíba, Sacramento, Santa Rosa da Serra, Santa Vitória, Santo Antonio do Retiro, São Francisco, São Gonçalo do Abaeté, São Gotardo, São João das Missões, Serra do Salitre, Tapira, Tupaciguara, Uberaba, Uberlândia, Unaí, Varjão de Minas, Várzea da Palma, Vazante, Verdelândia e Veríssimo; \n\nb)Municípios livres de Sigatoka Negra de MS: Água Clara, Anaurilândia, Aparecida do Taboado, Bataguassú,Batayporã, Brasilândia, Cassilândia, Chapadão do Sul, Inocência, Nova Andradina, Paranaíba, Ribas do Rio Pardo, Santa Rita do Pardo, Selvíria, Taquarussú e Três Lagoas;",
    "Esta proibição não se aplica às espécies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;",
    "Esta proibição só se aplica a mudas não micropopagadas;"
  ],
  leg: "Instrução Normativa SDA/MAPA nº 17, de 31 de maio de 2005",
  link: "leg/IN17-2005.pdf",
  proib: true
}, 

//ANTHONOMUS TOMENTOSUS
{
  desc: "DE UF com ocorrência de Anthonomus tomentosus PARA UF sem a ocorrência de Anthonomus tomentosus",
  hosp: ["Malpighia spp."],
  part: ["frutos"],
  orig: ["AM"],
  dest: ["AC", "AL", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
  prag: "Anthonomus tomentosus",
  pragc: "ANTHONOMUS TOMENTOSUS",
  exig: [
    "Se a partida for proveniente dos municípios Presidente Figueiredo, Rio Preto da Eva e Manaus: PTV com a seguinte declaração adicional: \"A partida foi inspecionada e encontra-se livre de Anthonomus tomentosus\"; ",
    "Para os demais municípios do Amazonas, trânsito livre",
    "Estas exigências fitossanitárias só se aplicam a frutos frescos;"
  ],
  leg: "Instrução Normativa MAPA/SDA nº. 19, de 16 de setembro de 2014",
  link: "leg/IN19-2014.pdf",
  proib: false
},{
  desc: "DE UF com ocorrência de Anthonomus tomentosus PARA UF sem a ocorrência de Anthonomus tomentosus",
  hosp: ["Malpighia spp."],
  part: ["frutos"],
  orig: ["RR"],
  dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RS", "SC", "SE", "SP", "TO"],
  prag: "Anthonomus tomentosus",
  pragc: "ANTHONOMUS TOMENTOSUS",
  exig: [
    "Se a partida for proveniente de Boa Vista, Mucajaí e Pacaraima: TRÂNSITO PROIBIDO;",
    "Se a partida não for proveniente dos municípios de Boa Vista, Mucajaí e Pacaraima: PTV com a seguinte declaração adicional: \"A partida foi inspecionada e encontra-se livre de Anthonomus tomentosus\"; ",
    "Estas exigências fitossanitárias só se aplicam a frutos frescos;"
  ],
  leg: "Instrução Normativa MAPA/SDA nº. 19, de 16 de setembro de 2014",
  link: "leg/IN19-2014.pdf",
  proib: false
},  

//CANCRO CÍTRICO
/*
Área com Praga Ausente: BA, GO, TO
Área sob Erradicação ou Supressão : MG, RR
Área sob Sistema de Mitigação de Risco (SMR): MT,. MS, RS, SP
Área Livre: PA (Ourém, Irituia, Garrafão do Norte, Capitão Poço, Nova Esperança do Piriá, Alenquer, Belterra, Mojuí dos Campos, Monte Alegre, Prainha, Santarém)
*/
{
  desc: "DE Área com Cancro Cítrico Ausente PARA qualquer UF",
  hosp: ["Citrus spp.", "Fortunella spp.", "Poncirus spp."],
  part: ["frutos", "material de propagação"],
  orig: ["BA", "GO", "TO"],
  dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
  prag: "Xanthomonas citri subsp. citri",
  pragc: "CANCRO CÍTRICO",
  exig: [
    "PTV."
  ],
  leg: "Instrução Normativa nº 37, de 5 de setembro de 2016",
  link: "leg/IN37-2016.pdf",
  proib: undefined
}, {
  desc: "DE Área Livre de Cancro Cítrico PARA qualquer UF",
  hosp: ["Citrus spp.", "Fortunella spp.", "Poncirus spp."],
  part: ["frutos", "material de propagação"],
  orig: ["PA"],
  dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
  prag: "Xanthomonas citri subsp. citri",
  pragc: "CANCRO CÍTRICO",
  exig: [
    "Se a partida for proveniente de Áreas Livres de Canco Cítrico do Estado do Pará, compostas pelo municípios Ourém, Irituia, Garrafão do Norte, Capitão Poço, Nova Esperança do Piriá, Alenquer, Belterra, Mojuí dos Campos, Monte Alegre, Prainha e Santarém: PTV.",
    "Se a partida for proveniente dos demais municípios que não fazem parte das Áreas Livres de Cancro Cítrico: TRÂNSITO PROIBIDO"
    ],
  leg: "Instrução Normativa nº 37, de 5 de setembro de 2016",
  link: "leg/IN37-2016.pdf",
  proib: undefined
}, {
  desc: "DE Área sob Erradicação ou Supressão de Cancro Cítrico PARA qualquer UF", //Arts. 39 e 40
  hosp: ["Citrus spp.", "Fortunella spp.", "Poncirus spp."],
  part: ["frutos"],
  orig: ["MG", "RR"],
  dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
  prag: "Xanthomonas citri subsp. citri",
  pragc: "CANCRO CÍTRICO",
  exig: [
    "SE OS FRUTOS FOREM PROCEDENTES DE IMÓVEL INTERDITADO POR MOTIVO DE OCORRÊNCIA DE CANCRO CÍTRICO:\na)PTV com a seguinte declaração adicional: \"Os frutos são provenientes de plantas sadias de imóvel sob supervisão oficial, foram higienizados com [produto, concentração, tempo de exposição] e encontram-se livres de Xanthomonas citri subsp. citri\"; e\nb)Os frutos devem estar acondicionados em veículo fechado ou coberto, a granel, ou em embalagens descartáveis, ou em caixas retornáveis.",
    "SE OS FRUTOS FOREM PROCEDENTES DE IMÓVEL SEM OCORRÊNCIA DE CANCRO CÍTRICO: PTV com a seguinte declaração adicional: \"Os frutos são provenientes de imóvel sem ocorrência do cancro cítrico localizado em Área sob Erradicação ou Supressão\"."
  ],
  leg: "Instrução Normativa nº 37, de 5 de setembro de 2016",
  link: "leg/IN37-2016.pdf",
  proib: undefined
}, {
  desc: "DE Área sob Erradicação ou Supressão de Cancro Cítrico PARA qualquer UF",  //Art. 41
  hosp: ["Citrus spp.", "Fortunella spp.", "Poncirus spp."],
  part: ["material de propagação"],
  orig: ["MG", "RR"],
  dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
  prag: "Xanthomonas citri subsp. citri",
  pragc: "CANCRO CÍTRICO",
  exig: [
    "PTV com a seguinte declaração adicional: \"O material de propagação é proveniente de Área sob Erradicação ou Supressão e foi produzido em ambiente protegido conforme preconiza a legislação específica em vigor\"."
  ],
  leg: "Instrução Normativa nº 37, de 5 de setembro de 2016",
  link: "leg/IN37-2016.pdf",
  proib: undefined
}, {
  desc: "DE Sistema de Manejo de Risco (SMR) de Cancro Cítrico PARA qualquer UF", //Arts. 61 a 63
  hosp: ["Citrus spp.", "Fortunella spp.", "Poncirus spp."],
  part: ["frutos"],
  orig: ["MT", "MS", "RS", "SP", "SC"],
  dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
  prag: "Xanthomonas citri subsp. citri",
  pragc: "CANCRO CÍTRICO",
  exig: [
    "PTV com a seguinte declaração adicional: \"A partida não apresenta risco quarentenário para Xanthomonas citri subsp. citri como resultado da aplicação oficialmente supervisionada do Sistema Integrado de Medidas Fitossanitárias para o Manejo de Risco (SMR) da praga\";",
    "Carga acondicionada em veículo fechado ou coberto, a granel, ou em embalagens descartáveis, ou em caixas plásticas retornáveis; e",
    "Carga lacrada com número de lacre informado na PTV."
  ],
  leg: "Instrução Normativa nº 37, de 5 de setembro de 2016",
  link: "leg/IN37-2016.pdf",
  proib: undefined
}, {
  desc: "DE UF de status fitossanitário desconhecido para Cancro Cítrico PARA qualquer UF",
  hosp: ["Citrus spp.", "Fortunella spp.", "Poncirus spp."],
  part: ["frutos", "material de propagação"],
  orig: ["AC", "AL", "AM", "AP", "CE", "DF", "ES", "MA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "SE"],
  dest: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
  prag: "Xanthomonas citri subsp. citri",
  pragc: "CANCRO CÍTRICO",
  exig: ["TRÂNSITO PROIBIDO."],
  leg: "Instrução Normativa nº 37, de 5 de setembro de 2016",
  link: "leg/IN37-2016.pdf",
  proib: undefined
}];

// prettier-ignore
var hospedeiros = [
  { nomeVul: "Abacate (Persea gratissima)", nomeSci: "Persea gratissima" },
  { nomeVul: "Abeto Europeu", nomeSci: "Picea abies" },
  { nomeVul: "Abeto Vermelho Comum", nomeSci: "Picea abies" },
  { nomeVul: "Abiu", nomeSci: "Chrysophyllum cainito" },
  { nomeVul: "Acácia", nomeSci: "Acacia sp." },
  { nomeVul: "Açaí", nomeSci: "Euterpe oleracea" },
  { nomeVul: "Açaí-do-Amazonas", nomeSci: "Euterpe precatoria" },
  { nomeVul: "Açaí-solitário", nomeSci: "Euterpe precatoria" },
  { nomeVul: "Acerola (qualquer espécie)", nomeSci: "Malpighia spp." },
  { nomeVul: "Acerola", nomeSci: "Malpighia punicifolia" },
  { nomeVul: "Álamo (Populus x canadensis)", nomeSci: "Populus x canadensis" },
  { nomeVul: "Álamo Americano", nomeSci: "Tilia americana" },
  { nomeVul: "Álamo Branco", nomeSci: "Populus alba" },
  { nomeVul: "Álamo Grande Dente", nomeSci: "Populus grandidenta" },
  { nomeVul: "Álamo", nomeSci: "Populus spp." },
  { nomeVul: "Albízia", nomeSci: "Albizia lebbeck" },
  { nomeVul: "Alder Cinza", nomeSci: "Alnus incana" },
  { nomeVul: "Alder Japonês", nomeSci: "Alnus japonica" },
  { nomeVul: "Alder Negro", nomeSci: "Alnus glutinosa" },
  { nomeVul: "Alder Vermelha", nomeSci: "Alnus rubra" },
  { nomeVul: "Alder", nomeSci: "Alnus sp." },
  { nomeVul: "Algodão Americano", nomeSci: "Populus wislizeni" },
  { nomeVul: "Alpínia purpurata", nomeSci: "Alpínia purpurata" },
  { nomeVul: "Alpínia zerumbet", nomeSci: "Alpínia zerumbet" },
  { nomeVul: "Ameixa", nomeSci: "Prunus spp." },
  { nomeVul: "Ameixeira-japonesa", nomeSci: "Prunus salicina" },
  { nomeVul: "Amelanchier", nomeSci: "Amelanchier laevis" },
  { nomeVul: "Amendoeira", nomeSci: "Terminalia catappa" },
  { nomeVul: "Amieiro Negro", nomeSci: "Frangula almus" },
  { nomeVul: "Amieiro", nomeSci: "Alnus glutinosa" },
  { nomeVul: "Angico", nomeSci: "Acacia sp." },
  { nomeVul: "Arapaju", nomeSci: "Manilkara zapota" },
  { nomeVul: "Arbusto Espinheiro do Bosque", nomeSci: "Crataegus oxyacanthoides (syn: oxyacantha )" },
  { nomeVul: "Arbusto Espinhento", nomeSci: "Craetaegus monogyna" },
  { nomeVul: "Arecaceae (espécies desta família)", nomeSci: "Arecaceae (espécies desta família)" },
  { nomeVul: "Aricuriroba", nomeSci: "Syagrus schizophylla" },
  { nomeVul: "Árvore Preta", nomeSci: "Fraxinus nigra (syn. sambucifolia)" },
  { nomeVul: "Árvore-do-viajante", nomeSci: "Ravenala madagascariensis" },
  { nomeVul: "Aveia", nomeSci: "Avena sativa" },
  { nomeVul: "Avelã", nomeSci: "Corylus avellana" },
  { nomeVul: "Aveleira Japonesa", nomeSci: "Corylus sieboldiana" },
  { nomeVul: "Aveleira Siberiana", nomeSci: "Corylus heterophylla var. thunbergiii" },
  { nomeVul: "Azevinho", nomeSci: "Ilex aquifolium" },
  { nomeVul: "Bacupari", nomeSci: "Garcinia dulcis" },
  { nomeVul: "Bálsamo", nomeSci: "Myroxylon balsamum" },
  { nomeVul: "Banana", nomeSci: "Musa spp." },
  { nomeVul: "Bastão-do-imperador", nomeSci: "Etlingera alatior" },
  { nomeVul: "Bergamota", nomeSci: "Citrus reticulata" },
  { nomeVul: "Bétula Branca (B. papyrifera)", nomeSci: "Betula papyrifera" },
  { nomeVul: "Bétula Branca (B. pubescens)", nomeSci: "Betula pubescens" },
  { nomeVul: "Bétula Cinza", nomeSci: "Betula populifolia" },
  { nomeVul: "Bétula Lenta", nomeSci: "Betula lenta" },
  { nomeVul: "Bétula lenta", nomeSci: "Betula nigra" },
  { nomeVul: "Bétula Lutea", nomeSci: "Betula lutea (synonym: alleghaniensis)" },
  { nomeVul: "Bétula Monarca", nomeSci: "Betula maximowicziana" },
  { nomeVul: "Bétula Negra", nomeSci: "Betula nigra" },
  { nomeVul: "Bétula Papel", nomeSci: "Betula papyrifera" },
  { nomeVul: "Bétula Prata", nomeSci: "Betula pendula (syn: verrucosa)" },
  { nomeVul: "Bétula", nomeSci: "Betula sp." },
  { nomeVul: "Bilimbi", nomeSci: "Chrysophyllum cainito" },
  { nomeVul: "Bordo (A. mono)", nomeSci: "Acer mono subsp. Heterophyllum" },
  { nomeVul: "Bordo (A. negundo)", nomeSci: "Acer negundo" },
  { nomeVul: "Bordo (A. sacharum)", nomeSci: "Acer saccharum" },
  { nomeVul: "Bordo (A. spicatum)", nomeSci: "Acer spicatum" },
  { nomeVul: "Bordo (Acer pennsylvanicum)", nomeSci: "Acer pennsylvanicum" },
  { nomeVul: "Bordo (Acer pseudoplatanus)", nomeSci: "Acer pseudoplatanus" },
  { nomeVul: "Bordo Japonês", nomeSci: "Acer palmatum" },
  { nomeVul: "Bordo Vermelho (A. macrophyllum)", nomeSci: "Acer macrophyllum" },
  { nomeVul: "Bordo Vermelho (A. rubrum)", nomeSci: "Acer rubrum" },
  { nomeVul: "Bordo", nomeSci: "Acer sp." },
  { nomeVul: "Bordo-da-videira", nomeSci: "Acer circinatum" },
  { nomeVul: "Broto Vermelho Oriental", nomeSci: "Cercis canadensis" },
  { nomeVul: "Buriti", nomeSci: "Mauritia flexuosa" },
  { nomeVul: "Cabeça-de-negro", nomeSci: "Albizia lebbeck" },
  { nomeVul: "Caimito", nomeSci: "Chrysophyllum cainito" },
  { nomeVul: "Cajazeiro", nomeSci: "Spondias lutea" },
  { nomeVul: "Caju", nomeSci: "Anacardium occidentale" },
  { nomeVul: "Cana-da-Índia", nomeSci: "Canna indica" },
  { nomeVul: "Carambola amarela", nomeSci: "Chrysophyllum cainito" },
  { nomeVul: "Carambola", nomeSci: "Averrhoa carambola" },
  { nomeVul: "Cárpino Betulas", nomeSci: "Carpinus betulas" },
  { nomeVul: "Cárpino", nomeSci: "Carpinus sp." },
  { nomeVul: "Carvalho Água", nomeSci: "Quercus laurifolia" },
  { nomeVul: "Carvalho Branco do Brejo", nomeSci: "Quercus bicolor" },
  { nomeVul: "Carvalho Branco Oregon", nomeSci: "Quercus garryana" },
  { nomeVul: "Carvalho Branco", nomeSci: "Quercus alba" },
  { nomeVul: "Carvalho Campeão (Q. borealis)", nomeSci: "Quercus borealis (syn: rubra)" },
  { nomeVul: "Carvalho Campeão (Q. rubra)", nomeSci: "Quercus rubra" },
  { nomeVul: "Carvalho Castanheiro", nomeSci: "Quercus montana" },
  { nomeVul: "Carvalho Escarlata", nomeSci: "Quercus coccinea" },
  { nomeVul: "Carvalho Folha Diamante", nomeSci: "Quercus laurifolia" },
  { nomeVul: "Carvalho Glorioso do Brejo", nomeSci: "Quercus laurifolia" },
  { nomeVul: "Carvalho Glorioso", nomeSci: "Quercus laurifolia" },
  { nomeVul: "Carvalho Konara", nomeSci: "Quercus glandulifera" },
  { nomeVul: "Carvalho Koreano", nomeSci: "Quercus glandulifera" },
  { nomeVul: "Carvalho Mongoliano", nomeSci: "Quercus mongolica var grosserrata" },
  { nomeVul: "Carvalho Obtuso", nomeSci: "Quercus laurifolia" },
  { nomeVul: "Carvalho Oregon", nomeSci: "Quercus garryana" },
  { nomeVul: "Carvalho Preto", nomeSci: "Quercus velutina" },
  { nomeVul: "Carvalho Vermelho do Norte (Q. borealis)", nomeSci: "Quercus borealis (syn: rubra)" },
  { nomeVul: "Carvalho Vermelho do Norte (Q. rubra)", nomeSci: "Quercus rubra" },
  { nomeVul: "Carvalho", nomeSci: "Quercus sp." },
  { nomeVul: "Carvalho-alvarinho", nomeSci: "Quercus robur" },
  { nomeVul: "Carvalho-roble", nomeSci: "Quercus robur" },
  { nomeVul: "Carvalho-vermelho", nomeSci: "Quercus robur" },
  { nomeVul: "Castanha-da-Índia (A. hippocastanum)", nomeSci: "Aesculus hippocastanum" },
  { nomeVul: "Castanha-da-Índia", nomeSci: "Aesculus sp." },
  { nomeVul: "Castanheiro Europeu", nomeSci: "Castanea dentata" },
  { nomeVul: "Cereja de Pássaro Virginia", nomeSci: "Prunus virginiana" },
  { nomeVul: "Cereja de Pássaro", nomeSci: "Prunus ssiori" },
  { nomeVul: "Cerejeira Chorona", nomeSci: "Prunus subhirtella var. pendula" },
  { nomeVul: "Cerejeira Negra", nomeSci: "Prunus serotina" },
  { nomeVul: "Cerejeira", nomeSci: "Prunus avium" },
  { nomeVul: "Chá-da-Índia", nomeSci: "Camellia sinensis" },
  { nomeVul: "Choupo (P. x canadensis)", nomeSci: "Populus x canadensis" },
  { nomeVul: "Choupo Branco", nomeSci: "Populus alba" },
  { nomeVul: "Choupo Tremedor", nomeSci: "Populus tremula" },
  { nomeVul: "Choupo Trêmulo", nomeSci: "Populus tremuloides" },
  { nomeVul: "Choupo", nomeSci: "Populus spp." },
  { nomeVul: "Choupo-bálsamo", nomeSci: "Populus balsamifera" },
  { nomeVul: "Chuva-de-ouro", nomeSci: "Laburnum anagyrioides" },
  { nomeVul: "Cinamomo", nomeSci: "Melia azedarach" },
  { nomeVul: "Cinza Japonês", nomeSci: "Fraxinus mandshurica var. Japonica" },
  { nomeVul: "Cinza-da-montanha", nomeSci: "Sorbus sp." },
  { nomeVul: "Citros", nomeSci: "Citrus spp." },
  { nomeVul: "Coprosma Frondoso Fino", nomeSci: "Coprosma areolata" },
  { nomeVul: "Coqueiro", nomeSci: "Cocos nucifera" },
  { nomeVul: "Coquinho-azedo", nomeSci: "Butia capitata" },
  { nomeVul: "Corifa", nomeSci: "Corypha umbraculifera" },
  { nomeVul: "Corrente-de-ouro", nomeSci: "Laburnum anagyrioides" },
  { nomeVul: "Cyca", nomeSci: "Cycas spp." },
  { nomeVul: "Dendezeiro", nomeSci: "Elaeis guineensis" },
  { nomeVul: "Espinho Branco", nomeSci: "Craetaegus monogyna" },
  { nomeVul: "Estrelítzia", nomeSci: "Strelitzia reginae" },
  { nomeVul: "Faia Americana", nomeSci: "Fagus americana" },
  { nomeVul: "Faia Cobre", nomeSci: "Fagus sylvantica" },
  { nomeVul: "Faia do Oriente", nomeSci: "Fagus orientalis" },
  { nomeVul: "Faia Japonesa", nomeSci: "Fagus crenata f. grandifolia (syn.Americana)" },
  { nomeVul: "Faia Roxa", nomeSci: "Fagus silvatica f. purpurea" },
  { nomeVul: "Faia", nomeSci: "Fagus sp." },
  { nomeVul: "Falso Castanho Japonês", nomeSci: "Aesculus turbinata" },
  { nomeVul: "Faveiro", nomeSci: "Albizia lebbeck" },
  { nomeVul: "Feixe Branco", nomeSci: "Sorbus aria" },
  { nomeVul: "Flamboyant", nomeSci: "Delonix regia" },
  { nomeVul: "Fortunela", nomeSci: "Fortunella spp." },
  { nomeVul: "Freixo (F. bungeana)", nomeSci: "Fraxinus bungeana" },
  { nomeVul: "Freixo (F. excelsior)", nomeSci: "Fraxinus excelsior" },
  { nomeVul: "Fruta Pão", nomeSci: "Artocarpus altilis" },
  { nomeVul: "Gafanhoto Preto", nomeSci: "Robinia pseudoacacia" },
  { nomeVul: "Goiaba", nomeSci: "Psidium guajava" },
  { nomeVul: "Goma Preta", nomeSci: "Nyssa sylvatica" },
  { nomeVul: "Gomuto", nomeSci: "Arenga pinnata" },
  { nomeVul: "Grão Amargo", nomeSci: "Prunus virginiana" },
  { nomeVul: "Helicônia", nomeSci: "Heliconia spp." },
  { nomeVul: "Heliconiaceae (espécies desta família)", nomeSci: "Heliconiaceae (espécies desta família)" },
  { nomeVul: "Jaca", nomeSci: "Artocarpus integrifolia" },
  { nomeVul: "Jambo Branco (S. aqueum)", nomeSci: "Syzygium aqueum" },
  { nomeVul: "Jambo Branco (S. samarangense)", nomeSci: "Syzygium samarangense" },
  { nomeVul: "Jambo D'água", nomeSci: "Syzygium aqueum" },
  { nomeVul: "Jambo Rosa", nomeSci: "Syzygium jambos" },
  { nomeVul: "Jambo Vermelho", nomeSci: "Syzygium malaccense" },
  { nomeVul: "Jerivá", nomeSci: "Syagrus romanzoffianum" },
  { nomeVul: "Juglans", nomeSci: "Juglans sp." },
  { nomeVul: "Jujuba (Z. jujuba)", nomeSci: "Ziziphus jujuba" },
  { nomeVul: "Jujuba (Z. mauritiana)", nomeSci: "Ziziphus mauritiana" },
  { nomeVul: "Jurema", nomeSci: "Acacia sp." },
  { nomeVul: "Karamu", nomeSci: "Coprosma lucida" },
  { nomeVul: "Kowhai", nomeSci: "Sophora microphylla" },
  { nomeVul: "Laranja", nomeSci: "Citrus sinensis" },
  { nomeVul: "Laranja Azeda", nomeSci: "Citrus aurantium" },
  { nomeVul: "Licuala", nomeSci: "Licuala grandis" },
  { nomeVul: "Lima", nomeSci: "Citrus aurantiifolia" },
  { nomeVul: "Limão Cayena", nomeSci: "Averrhoa bilimbi" },
  { nomeVul: "Limão Tahiti", nomeSci: "Citrus latifolia" },
  { nomeVul: "Limão", nomeSci: "Citrus limon" },
  { nomeVul: "Linda-dos-jardins", nomeSci: "Rhus typhina" },
  { nomeVul: "Louro Califórnia", nomeSci: "Umbelluraria californica" },
  { nomeVul: "Louro-de-baiano", nomeSci: "Alpínia zerumbet" },
  { nomeVul: "Maçã (M. communis)", nomeSci: "Malus communis" },
  { nomeVul: "Maçã (M. pumila var domestica)", nomeSci: "Malus pumila var domestica" },
  { nomeVul: "Maçã (M. pumila)", nomeSci: "Malus pumila" },
  { nomeVul: "Maçã (M. x domestica)", nomeSci: "Malus x domestica" },
  { nomeVul: "Maçã (Pyrus malus)", nomeSci: "Pyrus malus" },
  { nomeVul: "Maçã Silvestre", nomeSci: "Malus sylvestris" },
  { nomeVul: "Maça", nomeSci: "Malus sp." },
  { nomeVul: "Maçaranduba", nomeSci: "Manilkara zapota" },
  { nomeVul: "Manchu Cinza", nomeSci: "Fraxinus mandshurica" },
  { nomeVul: "Mandioca", nomeSci: "Manihot esculenta" },
  { nomeVul: "Manga", nomeSci: "Mangifera indica" },
  { nomeVul: "Mararaju", nomeSci: "Manilkara zapota" },
  { nomeVul: "Mexerica", nomeSci: "Citrus reticulata" },
  { nomeVul: "Miraguama", nomeSci: "Coccothrinax miraguama" },
  { nomeVul: "Mogno Indiano Ocidental", nomeSci: "Swietenia mahagoni" },
  { nomeVul: "Mogno", nomeSci: "Switenia macrophyla" },
  { nomeVul: "Murta", nomeSci: "Murraya paniculata" },
  { nomeVul: "Musaceae (espécies desta família)", nomeSci: "Musaceae (espécies desta família)" },
  { nomeVul: "Nespereira", nomeSci: "Eriobotrya japonica" },
  { nomeVul: "Nim", nomeSci: "Azadirachta indica" },
  { nomeVul: "Nogueira Amarga Casca de Pelúcia", nomeSci: "Carya ovata" },
  { nomeVul: "Nogueira Amarga Coração Branco", nomeSci: "Carya tomentosa" },
  { nomeVul: "Nogueira Amarga de Porco", nomeSci: "Carya glabra" },
  { nomeVul: "Nogueira Amarga", nomeSci: "Carya cordiformis" },
  { nomeVul: "Nogueira Amarga", nomeSci: "Carya spp." },
  { nomeVul: "Nogueira Branca", nomeSci: "Juglans cinerea" },
  { nomeVul: "Nogueira Comum", nomeSci: "Juglans regia" },
  { nomeVul: "Nogueira europeia", nomeSci: "Juglans regia" },
  { nomeVul: "Nogueira Pecã", nomeSci: "Carya illinoensis" },
  { nomeVul: "Nogueira Preta", nomeSci: "Juglans nigra" },
  { nomeVul: "Nogueira", nomeSci: "Juglans sp." },
  { nomeVul: "Noruega Abeto", nomeSci: "Picea abies" },
  { nomeVul: "Olmo Americano", nomeSci: "Ulmus americana" },
  { nomeVul: "Olmo Escocês", nomeSci: "Ulmus glabra (syn. montana)" },
  { nomeVul: "Olmo", nomeSci: "Ulmus sp." },
  { nomeVul: "Padreiro", nomeSci: "Acer pseudoplatanus" },
  { nomeVul: "Palma Corcho", nomeSci: "Microcycas calocoma" },
  { nomeVul: "Palma forrageira", nomeSci: "Opuntia cochenillifera" },
  { nomeVul: "Palmeira (Aiphanes spp.)", nomeSci: "Aiphanes spp." },
  { nomeVul: "Palmeira (Coccothrinax barbadensis)", nomeSci: "Coccothrinax barbadensis" },
  { nomeVul: "Palmeira (Pseudophoenix vinifera)", nomeSci: "Pseudophoenix vinifera" },
  { nomeVul: "Palmeira Areca", nomeSci: "Areca sp." },
  { nomeVul: "Palmeira areca-bambu", nomeSci: "Dypsis lutescens" },
  { nomeVul: "Palmeira arecina", nomeSci: "Veitchia arecina" },
  { nomeVul: "Palmeira Bismarckia", nomeSci: "Bismarckia nobilis" },
  { nomeVul: "Palmeira chamaedora", nomeSci: "Chamaedora spp." },
  { nomeVul: "Palmeira Fênix", nomeSci: "Phoenix roebelenii" },
  { nomeVul: "Palmeira Real Australiana", nomeSci: "Archontophoenix alexandrae" },
  { nomeVul: "Palmeira Real", nomeSci: "Roystonia regia" },
  { nomeVul: "Palmeira Sagu", nomeSci: "Cycas spp." },
  { nomeVul: "Palmeira Solitária", nomeSci: "Ptychosperma elegans" },
  { nomeVul: "Palmeira- triângulo", nomeSci: "Dypsis decaryi" },
  { nomeVul: "Palmeira-azul", nomeSci: "Bismarckia nobilis" },
  { nomeVul: "Palmeira-da-California", nomeSci: "Washingtonia robusta" },
  { nomeVul: "Palmeira-de-bismarck", nomeSci: "Bismarckia nobilis" },
  { nomeVul: "Palmeira-de-macarthur", nomeSci: "Ptychosperma macarthurii" },
  { nomeVul: "Palmeira-de-manarano", nomeSci: "Beccariophoenix madagascariensis" },
  { nomeVul: "Palmeira-de-Manila", nomeSci: "Veitchia maerrillii" },
  { nomeVul: "Palmeira-de-saia", nomeSci: "Washingtonia filifera" },
  { nomeVul: "Palmeira-fuso", nomeSci: "Pseudophoenix sargentii" },
  { nomeVul: "Palmeira-imperial-de-Porto Rico", nomeSci: "Roystonea borinquena" },
  { nomeVul: "Palmeira-leque", nomeSci: "Schippia concolor" },
  { nomeVul: "Palmeira-leque-brilhante", nomeSci: "Thrinax radiata" },
  { nomeVul: "Palmeira-leque-da-china", nomeSci: "Livistona chinensis" },
  { nomeVul: "Palmeira-leque-de-Fiji", nomeSci: "Pritchardia pacifica" },
  { nomeVul: "Palmeira-paorotis", nomeSci: "Acoelorraphe wrightii" },
  { nomeVul: "Palmeira-prateada-de-leque", nomeSci: "Coccothrinax argentata" },
  { nomeVul: "Palmeira-princesa", nomeSci: "Dictyosperma album" },
  { nomeVul: "Palmeira-rabo-de-peixe (Caryota mitis)", nomeSci: "Caryota mitis" },
  { nomeVul: "Palmeira-rabo-de-peixe (Caryota urens)", nomeSci: "Caryota urens" },
  { nomeVul: "Palmeira-rabo-de-raposa", nomeSci: "Wodyetia bifurcata" },
  { nomeVul: "Palmeira-ráfia", nomeSci: "Raphis excelsa" },
  { nomeVul: "Pandanaceae (espécies desta família)", nomeSci: "Pandanaceae (espécies desta família)" },
  { nomeVul: "Pau Cachorro do Pacífico", nomeSci: "Cornus muttallii" },
  { nomeVul: "Pau Cachorro", nomeSci: "Cornus sp." },
  { nomeVul: "Pera Asiática", nomeSci: "Pyrus pyrifolia" },
  { nomeVul: "Pera Nashi", nomeSci: "Pyrus pyrifolia" },
  { nomeVul: "Pereira Europeia", nomeSci: "Pyrus communis" },
  { nomeVul: "Pereira Japonesa", nomeSci: "Pyrus pyrifolia var culta" },
  { nomeVul: "Pimenta Picante", nomeSci: "Capsicum annuum" },
  { nomeVul: "Pimenta-do-diabo", nomeSci: "Capsicum annuum" },
  { nomeVul: "Pitanga Vermelha", nomeSci: "Eugenia uniflora" },
  { nomeVul: "Plátano Oriental", nomeSci: "Platanus orientalis" },
  { nomeVul: "Plátano", nomeSci: "Platanus orientalis" },
  { nomeVul: "Pomelo", nomeSci: "Citrus paradisi" },
  { nomeVul: "Poncirus", nomeSci: "Poncirus spp." },
  { nomeVul: "Ponkan", nomeSci: "Citrus reticulata" },
  { nomeVul: "Pritchardia", nomeSci: "Pritchardia vuylstekeana" },
  { nomeVul: "Pupunha Silvestre", nomeSci: "Bactris plumeriana" },
  { nomeVul: "Pupunha", nomeSci: "Bactris gasipaes" },
  { nomeVul: "Ribes", nomeSci: "Ribes sp." },
  { nomeVul: "Rosa", nomeSci: "Rosa spp." },
  { nomeVul: "Rustifina Rus", nomeSci: "Rhus typhina" },
  { nomeVul: "Salgueiro Branco", nomeSci: "Salix alba" },
  { nomeVul: "Salgueiro Cinza", nomeSci: "Salix cinerea" },
  { nomeVul: "Salgueiro Dourado", nomeSci: "Salix alba var Vitelina" },
  { nomeVul: "Salgueiro Preto", nomeSci: "Salix nigricans" },
  { nomeVul: "Salgueiro Púrpura", nomeSci: "Salix purpurea" },
  { nomeVul: "Salgueiro Velho Mundo", nomeSci: "Salix amygdalina" },
  { nomeVul: "Salgueiro-folha-de-pêssego", nomeSci: "Salix amygdaloides" },
  { nomeVul: "Salgueiro-taco-de-críquete", nomeSci: "Salix alba L. Coerulea" },
  { nomeVul: "Salix", nomeSci: "Salix spp." },
  { nomeVul: "Sanguinho", nomeSci: "Frangula almus" },
  { nomeVul: "Sapoti", nomeSci: "Manilkara zapota" },
  { nomeVul: "Seringueira", nomeSci: "Hevea brasiliensis" },
  { nomeVul: "Sete Copas", nomeSci: "Terminalia catappa" },
  { nomeVul: "Sófora", nomeSci: "Sophora microphylla" },
  { nomeVul: "Sorgo", nomeSci: "Sorghum bicolor" },
  { nomeVul: "Sorva (S. domestica)", nomeSci: "Sorbus domestica" },
  { nomeVul: "Sorva", nomeSci: "Sorbus sp." },
  { nomeVul: "Strelitziaceae (espécies desta família)", nomeSci: "Strelitziaceae (espécies desta família)" },
  { nomeVul: "Sumac Staghorn", nomeSci: "Rhus typhina" },
  { nomeVul: "Tamareira", nomeSci: "Phoenix dactylifera" },
  { nomeVul: "Tamareira-das-canárias", nomeSci: "Phoenix canariensis" },
  { nomeVul: "Tamareira-do-Senegal", nomeSci: "Phoenix reclinata" },
  { nomeVul: "Tangerina", nomeSci: "Citrus reticulata" },
  { nomeVul: "Taperebá", nomeSci: "Spondias lutea" },
  { nomeVul: "Teca", nomeSci: "Tectona grandis" },
  { nomeVul: "Teja", nomeSci: "Tilia cordata" },
  { nomeVul: "Tejo", nomeSci: "Tilia cordata" },
  { nomeVul: "Tella", nomeSci: "Tilia cordata" },
  { nomeVul: "Texa", nomeSci: "Tilia cordata" },
  { nomeVul: "Tilha", nomeSci: "Tilia cordata" },
  { nomeVul: "Tília", nomeSci: "Tilia sp." },
  { nomeVul: "Tillera", nomeSci: "Tilia cordata" },
  { nomeVul: "Tilo", nomeSci: "Tilia americana" },
  { nomeVul: "Tomate", nomeSci: "Licopersicum esculentum" },
  { nomeVul: "Toranja", nomeSci: "Citrus paradisi" },
  { nomeVul: "Tramazeira", nomeSci: "Sorbus aucuparia" },
  { nomeVul: "Tulipeiro", nomeSci: "Liriodendron tulipifera" },
  { nomeVul: "Tupelo", nomeSci: "Nyssa sylvatica" },
  { nomeVul: "Ulmeiro", nomeSci: "Ulmus sp." },
  { nomeVul: "Unha-de-gato", nomeSci: "Acacia sp." },
  { nomeVul: "Videira e seus híbridos", nomeSci: "Vitis spp. e seus híbridos" },
  { nomeVul: "Vimeiro Púrpura", nomeSci: "Salix purpurea" },
  { nomeVul: "Viola", nomeSci: "Viola sp." },
  { nomeVul: "Zingiberaceae (espécies desta família)", nomeSci: "Zingiberaceae (espécies desta família)" }
];

if (typeof module === 'object') {
  exports.db = db
  exports.hospedeiros = hospedeiros
  exports.version = vsersion
}

/*
Citrus aurantium: laranja
Citrus reticulata - tangerina
Citrus medica - cidra
Citrus maxima - cimboa
Citrus x sinensis - Laranja-doce
Citrus × aurantium - Laranja-amarga
Citrus × paradisi - Toranja
Citrus × limon - Limão (Pt)
Limas (Pt) ou Limões (Br)
Citrus × latifolia - Limão taiti[2] [3]
Citrus aurantiifolia[3] [4]
Citrus x limonia - Limão-cravo
Citrus x hystrix - Combava ou Lima cafre
Citrus x limetta - Lima doce
Citrus x limettioides - lima-da-pérsia[3] [5]
Citrus reticulata : mexerica, pokan, tangerina
Citrus aurantiifolia: lima
Citrus limon: limão
Citrus latifolia: limão tahiti
*/

/*       
TRÂNSITO NACIONAL DE PARTIDA IMPORTADA

  1 – SE A PARTIDA AINDA NÃO FOI INTERNALIZADA PELO MAPA E ESTIVER EM TRÂNSITO A UMA ÁREA ALFANDEGADA NO INTERIOR DO BRASIL:
     - Certificado Fitossanitário ou Certificado Fitossanitário de Reexportação;
  2 – SE A PARTIDA JÁ FOI INTERNALIZADA PELO MAPA E ESTIVER EM TRÂNSITO AO PONTO DE DESTINO DECLARADO NA IMPORTAÇÃO:
     - Cópia autenticada do Certificado Fitossanitário ou do Certificado Fitossanitário de Reexportação; 
     - Original ou cópia autenticada do Requerimento para Fiscalização de Produtos Agropecuários, emitido pelo MAPA;
  3 – SE A PARTIDA JÁ FOI INTERNALIZADA PELO MAPA E ESTIVER SAINDO DO DESTINO DECLARADO NA IMPORTAÇÃO, EM DIREÇÃO A QUALQUER UF:
     - Cumprir os requisitos fitossanitários para o trânsito interestadual.

TRÂNSITO NACIONAL DE PARTIDA EXPORTADA
  1 – SE A PARTIDA JÁ ESTIVER COM CERTIFICADO FITOSSANITÁRIO NO INTERIOR DO BRASIL, EM TRÂNSITO PARA PONTO DE EGRESSO:
      - Certificado Fitossanitário.
*/

/*
#MUDANÇAS DE VERSÃO: 

##Versão 11:
- Alterou a regra de Sigatoka Negra excluindo as regras de "DE área de ocorrência PARA área livre de Sigatoka", substituindo a regra para "DE área de ocorrência de Sigatoka Negra PARA demais áreas", para atender ao art. 2º, VI, da IN nº 17/2007  

##Versão 12:
- Cancro Cítrico: Santa Catarina passa de Área de Risco Desconhecido para Área sob Mitigação de Risco, conforme a Resolução 12/2017

##Versão 13:
- Alteração do status fitossanitário dos Estados Bahia, Ceará, Goiás, Minas Gerais, Pará, Paraná, Rio Grande do Norte, São Paulo, Sergipe e no Distrito Federal, de ausente para presente da praga Ácaro Vermelho ('Raoiella indica'), conforme processo SEI 21000.022348/2017-84.

*/
