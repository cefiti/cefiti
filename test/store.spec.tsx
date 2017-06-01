import store from './../src/store';
import {useStrict} from 'mobx';
import 'jest';

useStrict(false);

const estadosSemAC = [
    /*{estado: 'Acre', UF: 'AC'},*/{estado: 'Alagoas', UF: 'AL'}, {estado: 'Amazonas', UF: 'AM'},
    {estado: 'Amapá', UF: 'AP'}, {estado: 'Bahia', UF: 'BA'}, {estado: 'Ceará', UF: 'CE'},
    {estado: 'Distrito Federal', UF: 'DF'}, {estado: 'Espirito Santo', UF: 'ES'}, {estado: 'Goiás', UF: 'GO'},
    {estado: 'Maranhão', UF: 'MA'}, {estado: 'Minas Gerais', UF: 'MG'}, {estado: 'Mato Grosso do Sul', UF: 'MS'},
    {estado: 'Mato Grosso', UF: 'MT'}, {estado: 'Pará', UF: 'PA'}, {estado: 'Paraíba', UF: 'PB'},
    {estado: 'Pernambuco', UF: 'PE'}, {estado: 'Piauí', UF: 'PI'}, {estado: 'Paraná', UF: 'PR'},
    {estado: 'Rio de janeiro', UF: 'RJ'}, {estado: 'Rio Grande do Norte', UF: 'RN'},
    {estado: 'Rondônia', UF: 'RO'}, {estado: 'Roraima', UF: 'RR'}, {estado: 'Rio Grande do Sul', UF: 'RS'},
    {estado: 'Santa Catarina', UF: 'SC'}, {estado: 'Sergipe', UF: 'SE'}, {estado: 'São Paulo', UF: 'SP'},
    {estado: 'Tocantins', UF: 'TO'},
  ];

const hosp10 = ["Acacia sp.", "Acer circinatum", "Acer macrophyllum", "Acer mono subsp. Heterophyllum", "Acer negundo",
   "Acer palmatum", "Acer pennsylvanicum", "Acer pseudoplatanus", "Acer rubrum", "Acer saccharum"];
const hosp_20 = ["Tectona grandis", "Terminalia catappa",  "Thrinax radiata", "Tilia americana", "Tilia cordata", "Tilia sp.", "Ulmus americana", "Ulmus glabra (syn. montana)",
   "Ulmus sp.", "Umbelluraria californica", "Veitchia arecina", "Veitchia maerrillii", "Viola sp.", "Vitis spp. e seus híbridos",
   "Washingtonia filifera", "Washingtonia robusta", "Wodyetia bifurcata", "Zingiberaceae (espécies desta família)", "Ziziphus jujuba", "Ziziphus mauritiana"];

describe('Store origem e destino', () => {

  it('origem AC', () => {
    store.dados.orig = 'AC';
    expect(store.destino).toEqual(estadosSemAC);
  });

  it('origem MT', () => {
    store.dados.orig = 'MT';
    expect(store.destino).not.toEqual(estadosSemAC);
  });

  it('destino AC', () => {
    store.dados.dest = 'AC';
    expect(store.origem).toEqual(estadosSemAC);
  });

  it('destino MT', () => {
    store.dados.dest = 'MT';
    expect(store.origem).not.toEqual(estadosSemAC);
  });
});

describe('Store hospedeiros nomeSci', () => {

  it('unique values', () => {
    expect(store.listaNomesSci.take(10)).toEqual(hosp10);
    expect(store.listaNomesSci.take(-20)).toEqual(hosp_20);
    expect(store.listaNomesSci.length).toBe(246);
  });
});

describe('Store partes', () => {

  it('de Acerola', () => {
    store.dados.hospSci = 'Malpighia spp.';
    expect(store.partes).toEqual(['frutos']);
  });

  it('de Banana', () => {
    store.dados.hospSci = 'Musa spp.';
    expect(store.partes).toEqual([ "caules",  "flores",  "folhas", "frutos", "material para pesquisa", "mudas", "plantas", "raízes", "ramos", "rizomas"]);
  });

  it('de Mandioca', () => {
    store.dados.hospSci = 'Manihot esculenta';
    expect(store.partes).toEqual([ "estaca", "madeira", "maniva"]);
  });

});

describe('Store: gender', () => {

  it('Acacia sp.', () => {
    store.dados.hospSci = 'Acacia sp.';
    expect(store.gender).toBe('Acacia');
  });

  it('Acer macrophyllum', () => {
    store.dados.hospSci = 'Acer macrophyllum';
    expect(store.gender).toBe('Acer');
  });

  it('Betula lutea (synonym: alleghaniensis) ', () => {
    store.dados.hospSci = 'Betula lutea (synonym: alleghaniensis)';
    expect(store.gender).toBe('Betula');
  });
});

describe('Store filtro geral', () => {

  it('Musa spp.', () => {
    store.dados.hospSci = 'Musa spp.';
    store.dados.prod = 'frutos';
    store.dados.orig = 'MG';
    store.dados.dest = 'MT';
    expect(store.result.length).toBe(3);
    expect(store.result.by('link')).toEqual(['leg/IN17-2009.pdf', 'leg/IN17-2005.pdf', 'leg/IN17-2005.pdf']);
    expect(store.result.by('pragc')).toEqual(['MOKO-DA-BANANEIRA', 'SIGATOKA NEGRA', 'SIGATOKA NEGRA']);
  });

  it('Eugenia uniflora', () => {
    store.dados.hospSci = 'Eugenia uniflora';
    store.dados.prod = 'frutos';
    store.dados.orig = 'PI';
    store.dados.dest = 'DF';
    expect(store.result.length).toBe(0);
  });

  it('Malus spp.', () => {
    store.dados.hospSci = 'Malus spp.';
    store.dados.prod = 'frutos';
    store.dados.orig = 'SC';
    store.dados.dest = 'MT';
    expect(store.result.length).toBe(1);
    expect(store.result.by('link')).toEqual(['leg/IN20-2013.pdf']);
    expect(store.result.by('pragc')).toEqual(['CANCRO EUROPEU DAS POMÁCEAS']);
  });

  it('Citrus sinensis', () => {
    store.dados.hospSci = 'Citrus sinensis';
    store.dados.prod = 'sementes';
    store.dados.orig = 'SP';
    store.dados.dest = 'ES';
    expect(store.result.length).toBe(2);
    expect(store.result.by('link')).toEqual(['leg/PORT291-1997.pdf', 'leg/IN53-2008.pdf']);
    expect(store.result.by('pragc')).toEqual(['CANCRO CÍTRICO', 'GREENING']);
  });

  it('Musa spp.', () => {
    store.dados.hospSci = 'Musa spp.';
    store.dados.prod = 'mudas';
    store.dados.orig = 'AC';
    store.dados.dest = 'AL';
    expect(store.result.by('proib').includes(true)).toBe(true);
  });
});
