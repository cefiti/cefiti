import { store as state } from './store'
import { uiStore as uiState } from './uistore'
import { useProxy } from 'valtio'

interface PropsSelect {
  value: string
  source: string[]
  name: string
  empty: boolean
}

function Select({ value, source, name, empty }: PropsSelect) {
  return (
    <select
      style={name === 'prod' ? { minWidth: '145px' } : {}}
      id={name}
      className={name === 'hospSci' ? 'italic form-select' : 'form-select'}
      value={value}
      name={name}
      onChange={(e) => state.handleChanges(e)}>
      {empty && <option value={''} aria-selected="true" />}
      {source.map((option) => {
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
  const uiStore = useProxy(uiState)
  const store = useProxy(state)
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
          onChange={(e) => state.handleChanges(e)}>
          {store.origem.map((option: Estado, i: number) => {
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
          onChange={(e) => state.handleChanges(e)}>
          {store.destino.map((option: Estado, i: number) => {
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
          href={`https://www.google.com.br/search?site=imghp&tbm=isch&q=${store.dados.hospSci}+plant+OR+planta+ORfruto+OR+fruit+OR+flor+OR+flower`}>
          Fotos da Espécie Vegetal
        </a>
        <button
          onClick={(e) => uiState.handleSearch(e)}
          className="form-button margin-left-100"
          disabled={false}>
          Pesquisar
        </button>
      </div>
    </form>
  )
}

export default Form
