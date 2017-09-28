import * as React from 'react'
import store from './store'
import uiStore from './uistore'
import { observer } from 'mobx-react'

let msgFamilias =
  'Se a espécie pertencer à família "Arecaceae", ou "Heliconiaceae", ou "Musaceae",'
msgFamilias +=
  ' ou "Pandanaceae", ou "Strelitziaceae" ou "Zingiberaceae", fazer a consulta para a Espécie e'
msgFamilias +=
  ' para a Família, ou só para a Família se a espécie não estiver relacionada'

function Form() {
  return uiStore.searched ? (
    <div />
  ) : (
    <form>
      <table className="table-form no-print">
        <tbody>
          <tr title={msgFamilias}>
            <td className="col30">
              <label>Espécie Vegetal (nome científico):</label>
            </td>
            <td className="col30">
              <select
                title={msgFamilias}
                className="italic form-select"
                value={store.dados.hospSci}
                name="hospSci"
                onChange={store.handleChanges}
              >
                <option value={''} />
                {store.listaNomesSci.map((option, i) => {
                  return (
                    <option value={option} key={i}>
                      {option}
                    </option>
                  )
                })}
              </select>
            </td>
            <td className="col30" />
          </tr>
          <tr title={msgFamilias}>
            <td className="col30">
              <label>Espécie Vegetal (nome vulgar):</label>
            </td>
            <td className="col30">
              <select
                title={msgFamilias}
                className="form-select"
                name="hospVul"
                value={store.dados.hospVul}
                onChange={store.handleChanges}
              >
                <option value={''} />
                {store.hospedeiros.map((option, i) => {
                  return (
                    <option value={option.nomeVul} key={i}>
                      {option.nomeVul}
                    </option>
                  )
                })}
              </select>
            </td>
            <td rowSpan={4} className="col30 space-line">
              {msgFamilias}
            </td>
          </tr>
          <tr>
            <td className="col30">
              <label>Parte da Planta:</label>
            </td>
            <td className="col30">
              <select
                className="form-select"
                name="prod"
                value={store.dados.prod}
                onChange={store.handleChanges}
              >
                {store.partes.map((option, i) => {
                  return (
                    <option value={option} key={i}>
                      {option}
                    </option>
                  )
                })}
              </select>
            </td>
            <td className="col30" />
          </tr>
          <tr>
            <td className="col30">
              <label>Origem:</label>
            </td>
            <td className="col30">
              <select
                className="form-select"
                name="orig"
                value={store.dados.orig}
                onChange={store.handleChanges}
              >
                {store.origem.map((option, i) => {
                  return (
                    <option value={option.UF} key={i}>
                      {option.estado}
                    </option>
                  )
                })}
              </select>
            </td>
            <td className="col30" />
          </tr>
          <tr>
            <td className="col30">
              <label>Destino:</label>
            </td>
            <td className="col30">
              <select
                className="form-select"
                name="dest"
                value={store.dados.dest}
                onChange={store.handleChanges}
              >
                {store.destino.map((option, i) => {
                  return (
                    <option value={option.UF} key={i}>
                      {option.estado}
                    </option>
                  )
                })}
              </select>
            </td>
            <td className="col30" />
          </tr>
          <tr>
            <td className="col30">
              <a
                target="_blank"
                href={
                  'https://www.google.com.br/search?site=imghp&tbm=isch&q=' +
                  store.dados.hospSci +
                  '+plant+OR+planta+ORfruto+OR+fruit+OR+flor+OR+flower'
                }
              >
                Fotos da Espécie Vegetal
              </a>
            </td>
            <td style={{ textAlign: 'center' }} className="col30">
              <button
                onClick={uiStore.handleSearch}
                className="form-button"
                disabled={false}
              >
                Pesquisar
              </button>
              <br />
            </td>
            <td className="col30" />
          </tr>
        </tbody>
      </table>
    </form>
  )
}

export default observer(Form)
