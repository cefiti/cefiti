
import expect from 'expect';


//var expect = require('expect')

//console.log(expect)

describe('Teste', ()=>{
  it('cefiti',()=>{
    
    expect(true).toBe(true);
  });
  
  it('experimentabndo', ()=>{
    expect(true).toBe(true, 'verdadeiro');
  })
  
  it('asdfsdfad', ()=>{
    expect(true).toBe(true);
  })
    

})

describe('Outro teset', ()=>{
  it('desenhenado o teste ', ()=>{
    expect(1+2).toBe(3);
  })
})
