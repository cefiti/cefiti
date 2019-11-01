import React from 'react'
import /* useStore , useTeste */ './context'

export const Teste = () => {
  //const [store, setStore] = useStore()
  //const [teste, setTeste] = useTeste()

  /* setStore(d => {
    d.count++
  })

  console.log(store.teste, 'teste1', store.count)
  setStore(d => {
    d.teste = 'p0ppppp'
  })
  console.log(store.teste, 'teste2') */

  return (
    <div>
      {/*       <label>
        Teste
        {         <input
          value={store.teste}
          onChange={({ target }) =>
            setStore(d => {
              console.log(target.value, d.teste)

              d.teste = target.value
            })
          }
        ></input> }
        <input
          value={teste.valor}
          onChange={({ target }) =>
            setTeste(d => {
              console.log(target.value, d.valor, 'teste')
              d.valor = target.value
            })
          }
        ></input>
      </label>
      <button
        onClick={() => {
          setTeste(d => {
            d.handleMenu()
          })
        }}
      >
        XXX
      </button>
      <select
        value={teste.valor}
        onChange={() => {
          setTeste(d => {
            d.update()
          })
        }}
      >
        <option value={'A'} key={1} aria-selected="false">
          A
        </option>
        <option value={'B'} key={2} aria-selected="false">
          B
        </option>
        <option value={'C'} key={3} aria-selected="false">
          C
        </option>
        <option value={'D'} key={4} aria-selected="false">
          D
        </option>
        <option value={'E'} key={5} aria-selected="false">
          E
        </option>
        )
      </select>
      {JSON.stringify(teste.exibeBase)}
      {teste.sel} */}
    </div>
  )
}
