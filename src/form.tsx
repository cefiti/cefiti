import React from 'react'
import { store } from './store'
//import { uiStore } from './uistore'
import { observer } from 'mobx-react-lite'

interface PropsSelect {
  value: string
  source: string[]
  name: string
  empty: boolean
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Select({ value, source, name, empty }: PropsSelect) {
  return (
    <select
      style={name === 'prod' ? { minWidth: '145px' } : {}}
      id={name}
      className={name === 'hospSci' ? 'italic form-select' : 'form-select'}
      value={value}
      name={name}
      onChange={store.handleChanges}
    >
      {empty && <option value={''} aria-selected="true" />}
      {source.map(option => {
        return (
          <option value={option} key={option} aria-selected="false">
            {option}
          </option>
        )
      })}
    </select>
  )
}

function Form({ store, setStore, uiStore, setUiStore }: Stores) {
  return uiStore.searched ? (
    <div />
  ) : (
    <form>
      <div>
        <label className="form" htmlFor="hospSci">
          Espécie Vegetal (nome científico):
        </label>
        <Select
          value={store.dados.hospSci}
          name="hospSci"
          source={store.listaNomesSci}
          empty={true}
        />
      </div>
      <div>
        <label className="form" htmlFor="hospVul">
          Espécie Vegetal (nome vulgar):
        </label>
        <Select
          value={store.dados.hospVul}
          name="hospVul"
          source={store.listaNomesVul}
          empty={true}
        />
      </div>
      <div>
        <label className="form" htmlFor="prod">
          Parte da Planta:
        </label>
        <Select value={store.dados.prod} name="prod" source={store.partes} empty={false} />
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
          onChange={store.handleChanges}
        >
          {// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
          onChange={store.handleChanges}
        >
          {// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
          href={`https://www.google.com.br/search?site=imghp&tbm=isch&q=${store.dados.hospSci}+plant+OR+planta+ORfruto+OR+fruit+OR+flor+OR+flower`}
        >
          Fotos da Espécie Vegetal
        </a>
        <button
          onClick={uiStore.handleSearch}
          className="form-button margin-left-100"
          disabled={false}
        >
          Pesquisar
        </button>
      </div>
    </form>
  )
}

export default observer(Form as React.SFC)
