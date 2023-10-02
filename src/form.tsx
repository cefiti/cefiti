import { memo } from 'react'
import {  Store, useStore } from './store'

interface PropsSelect {
  source: "listaNomesSci" | "listaNomesVul" | "partes" //  keyof Store
  name: keyof Store["dados"]
  empty: boolean
}

const Select = memo(({ source, name, empty }: PropsSelect) => {
  const store = useStore()
  return (
    <select
      style={name === 'prod' ? { minWidth: '145px' } : {}}
      id={name}
      className={name === 'hospSci' ? 'italic form-select' : 'form-select'}
      value={store.dados[name]}
      name={name}
      onChange={(e)=> store.handleChanges(e)}
    >
      {empty && <option value={''} aria-selected="true" />}
      {store[source].map(option => {
        return (
          <option value={option} key={option} aria-selected="false">
            {option}
          </option>
        )
      })}
    </select>
  )
})

function Form() {
  const store = useStore() 
  return store.searched ? (
    <div />
  ) : (
    <form>
      <div>
        <label className="form" htmlFor="hospSci">
          Espécie Vegetal (nome científico):
        </label>
        <Select
          name="hospSci"
          source="listaNomesSci"
          empty={true}
        />
      </div>
      <div>
        <label className="form" htmlFor="hospVul">
          Espécie Vegetal (nome vulgar):
        </label>
        <Select
          name="hospVul"
          source="listaNomesVul"
          empty={true}
        />
      </div>
      <div>
        <label className="form" htmlFor="prod">
          Parte da Planta:
        </label>
        <Select name="prod" source="partes" empty={false} />
      </div>
      <div>
        <label className="form" htmlFor="orig">
          Origem:
        </label>
        <select
          id="orig"
          className="form-select"
          name="orig"
          value={store.dados.orig}
          onChange={(e)=> store.handleChanges(e)}
        >
          {
          store.origem.map((option: Estado, i: number) => {
            return (
              <option value={option.UF} key={i} aria-selected="false">
                {option.estado}
              </option>
            )
          })}
        </select>
      </div>
      <div>
        <label className="form" htmlFor="dest">
          Destino:
        </label>
        <select
          id="dest"
          className="form-select"
          name="dest"
          value={store.dados.dest}
          onChange={(e)=>store.handleChanges(e)}
        >
          {
          store.destino.map((option: Estado, i: number) => {
            return (
              <option value={option.UF} key={i} aria-selected="false">
                {option.estado}
              </option>
            )
          })}
        </select>
      </div>
      <br />
      <div>
        <a
          style={{ marginBottom: '10px' }}
          target="_blank"
          rel="noopener noreferrer"
          href={`https://www.google.com.br/search?site=imghp&tbm=isch&q=${
            store.dados.hospSci
          }+plant+OR+planta+ORfruto+OR+fruit+OR+flor+OR+flower`}
        >
          Fotos da Espécie Vegetal
        </a>
        <button
          onClick={(e)=> store.handleSearch(e)}
          className="form-button margin-left-100"
          disabled={false}
        >
          Pesquisar
        </button>
      </div>
    </form>
  )
}

export default Form// as React.SFC
