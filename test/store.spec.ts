import store from './../src/store'
import expect from 'expect';

  var estadosSemAC = [
    /*{estado: 'Acre', UF: 'AC'},*/{estado: 'Alagoas', UF: 'AL'},{estado: 'Amazonas', UF: 'AM'},
    {estado: 'Amapá', UF: 'AP'},{estado: 'Bahia', UF: 'BA'},{estado: 'Ceará', UF: 'CE'},
    {estado: 'Distrito Federal', UF: 'DF'},{estado: 'Espirito Santo', UF: 'ES'},{estado: 'Goiás', UF: 'GO'}, 
    {estado: 'Maranhão', UF: 'MA'},{estado: 'Minas Gerais', UF: 'MG'},{estado: 'Mato Grosso do Sul', UF: 'MS'},
    {estado: 'Mato Grosso', UF: 'MT'},{estado: 'Pará', UF: 'PA'},{estado: 'Paraíba', UF: 'PB'},
    {estado: 'Pernanbuco', UF: 'PE'},{estado: 'Piauí', UF: 'PI'},{estado: 'Paraná', UF: 'PR'},
    {estado: 'Rio de janeiro', UF: 'RJ'},{estado: 'Rio Grande do Norte', UF: 'RN'},
    {estado: 'Rondônia', UF: 'RO'},{estado: 'Roraima', UF: 'RR'},{estado: 'Rio Grande do Sul', UF: 'RS'},
    {estado: 'Santa Catarina', UF: 'SC'},{estado: 'Sergipe', UF: 'SE'},{estado: 'São Paulo', UF: 'SP'},
    {estado: 'Tocantins', UF: 'TO'}
  ]; 
  
  var hosp10 =["Persea gratissima", "Picea abies", "Chrysophyllum cainito", "Acacia sp.", "Euterpe oleracea", "Euterpe precatoria",
   "Malpighia punicifolia", "Malpighia spp.", "Populus spp.", "Tilia americana"]
  var hosp_10 = ["Citrus reticulata", "Tectona grandis", "Tilia cordata", "Tilia sp.", "Licopersicum esculentum", 
  "Sorbus aucuparia", "Liriodendron tulipifera", "Vitis spp. e seus híbridos", "Viola sp.", "Zingiberaceae (espécies desta família)"]

describe('Store origem e destino', ()=>{
  
  it('origem AC', ()=>{
    store.dados.orig = 'AC'
    expect(store.destino).toEqual(estadosSemAC)
  })
  
  it('origem MT', ()=>{
    store.dados.orig = 'MT'
    expect(store.destino).toNotEqual(estadosSemAC)
  })
  
  it('destino AC', ()=>{
    store.dados.dest = 'AC'
    expect(store.origem).toEqual(estadosSemAC)
  })
  
  it('destino MT', ()=>{
    store.dados.dest = 'MT'
    expect(store.origem).toNotEqual(estadosSemAC)
  })
})

describe('Store hospedeiros nomeSci', ()=>{
  
  it('unique values', ()=>{
    expect(store.listaNomesSci.take(10)).toEqual(hosp10);
    expect(store.listaNomesSci.take(-10)).toEqual(hosp_10);
    expect(store.listaNomesSci.length).toBe(249);
  })
})

describe('Store hospedeiros nomeVul', ()=>{
  
  it('unique values', ()=>{

  })
})