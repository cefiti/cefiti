import React from 'react'
import { store } from './store'
import { uiStore } from './uistore'
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
    <select className="italic form-select" value={value} name={name} onChange={store.handleChanges}>
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

function Form() {
  return uiStore.searched ? (
    <div />
  ) : (
    <form>
      <table className="table-form no-print">
        <tbody>
          <tr>
            <td className="col30">
              <label>Espécie Vegetal (nome científico):</label>
            </td>
            <td className="col60">
              <Select
                value={store.dados.hospSci}
                name="hospSci"
                source={store.listaNomesSci}
                empty={true}
              />
            </td>
          </tr>
          <tr>
            <td className="col30">
              <label>Espécie Vegetal (nome vulgar):</label>
            </td>
            <td className="col60">
              <Select
                value={store.dados.hospVul}
                name="hospSci"
                source={store.listaNomesVul}
                empty={true}
              />
            </td>
          </tr>
          <tr>
            <td className="col30">
              <label>Parte da Planta:</label>
            </td>
            <td className="col60">
              <Select value={store.dados.prod} name="prod" source={store.partes} empty={false} />
            </td>
          </tr>
          <tr>
            <td className="col30">
              <label>Origem:</label>
            </td>
            <td className="col60">
              <select
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
            </td>
          </tr>
          <tr>
            <td className="col30">
              <label>Destino:</label>
            </td>
            <td className="col60">
              <select
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
            </td>
          </tr>
          <tr>
            <td className="col30">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://www.google.com.br/search?site=imghp&tbm=isch&q=${
                  store.dados.hospSci
                }+plant+OR+planta+ORfruto+OR+fruit+OR+flor+OR+flower`}
              >
                Fotos da Espécie Vegetal
              </a>
            </td>
            <td style={{ textAlign: 'left' }} className="col60">
              <button onClick={uiStore.handleSearch} className="form-button" disabled={false}>
                Pesquisar
              </button>
              <br />
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  )
}

export default observer(Form as React.SFC)
