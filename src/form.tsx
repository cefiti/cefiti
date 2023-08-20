import { /* store, */ Store, useState } from './store'
import { uiStore } from './uistore'
import { useSnapshot } from 'valtio'

interface PropsSelect {
  value: string
  source: string[]
  name: string
  empty: boolean
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Select({ value, source, name, empty }: PropsSelect) {
  const snap = useState()
  return (
    <select
      style={name === 'prod' ? { minWidth: '145px' } : {}}
      id={name}
      className={name === 'hospSci' ? 'italic form-select' : 'form-select'}
      value={value}
      name={name}
      onChange={(e)=>/* store*/snap.handleChanges(e)}
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

function Form() {
  const uiSnap = useSnapshot(uiStore) 
  //const snap = useSnapshot(store) as Store
  const snap = useState() as Store
  return uiSnap.searched ? (
    <div />
  ) : (
    <form>
      <div>
        <label className="form" htmlFor="hospSci">
          Espécie Vegetal (nome científico):
        </label>
        <Select
          value={snap.dados.hospSci}
          name="hospSci"
          source={snap.listaNomesSci} 
          empty={true}
        />
      </div>
      <div>
        <label className="form" htmlFor="hospVul">
          Espécie Vegetal (nome vulgar):
        </label>
        <Select
          value={snap.dados.hospVul}
          name="hospVul"
          source={snap.listaNomesVul}
          empty={true}
        />
      </div>
      <div>
        <label className="form" htmlFor="prod">
          Parte da Planta:
        </label>
        <Select value={snap.dados.prod} name="prod" source={snap.partes} empty={false} />
      </div>
      <div>
        <label className="form" htmlFor="orig">
          Origem:
        </label>
        <select
          id="orig"
          className="form-select"
          name="orig"
          value={snap.dados.orig}
          onChange={(e)=>/* store*/snap.handleChanges(e)}
        >
          {// eslint-disable-next-line @typescript-eslint/no-unused-vars
          snap.origem.map((option: Estado, i: number) => {
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
          value={/* store*/snap.dados.dest}
          onChange={(e)=>/* store*/snap.handleChanges(e)}
        >
          {// eslint-disable-next-line @typescript-eslint/no-unused-vars
          snap.destino.map((option: Estado, i: number) => {
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
            snap.dados.hospSci
          }+plant+OR+planta+ORfruto+OR+fruit+OR+flor+OR+flower`}
        >
          Fotos da Espécie Vegetal
        </a>
        <button
          onClick={(e)=> uiStore.handleSearch(e)}
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
