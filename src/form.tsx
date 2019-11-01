import React from 'react'
//import { store as sstore } from './store'
import { useStore, useUiStore } from './context'
//import { observer } from 'mobx-react-lite'
import Select from './select'
//import produce from 'immer'

/* function useForceUpdate() {
  const [value, setValue] = React.useState(true) //boolean state
  return () => setValue(!value) // toggle the state to force render
} */

function Form() {
  const [value, setValue] = React.useState(true)
  const [store, setStore] = useStore()
  const [uiStore, setUiStore] = useUiStore()

  /*  store.getDb().then(db =>
    //@ts-ignore
    setStore(d => {
      console.log(db, 'dfdsf')
      d = db
    })
  ) */

  //produce( d => {d.getDb().then(res => setStore)})
  /*   async function getDb() {
    await setStore(async d => {
      await d.getDb()
      console.log(d.db.length, 'dfdsf')
    })
  }
  getDb() */
  /*   const db = produce(async d => {
    return await d.getDb()
  }) */
  //@ts-ignore
  //setStore(db)
  React.useEffect(() => {
    if (store.db.length === 0) {
      setValue(!value)
      console.log('effectxx', store.db.length)
    }
  })

  const handleChange = ({ currentTarget }: React.FormEvent<HTMLSelectElement>) => {
    setStore((d: Store) => {
      d.handleChanges(currentTarget.name, currentTarget.value)
      console.log(currentTarget.name, currentTarget.value, 'form')
    })
  }
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
          handleChange={handleChange}
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
          handleChange={handleChange}
        />
      </div>
      <div>
        <label className="form" htmlFor="prod">
          Parte da Planta:
        </label>
        <Select
          value={store.dados.prod}
          name="prod"
          source={store.partes}
          empty={false}
          handleChange={handleChange}
        />
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
          onChange={handleChange}
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
          onChange={handleChange}
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
          type="button"
          onClick={() => {
            setUiStore(d => {
              d.handleSearch()
            })
          }}
          className="form-button margin-left-100"
          disabled={false}
        >
          Pesquisar
        </button>
      </div>
    </form>
  )
}

//export default observer(Form as React.SFC)
export default Form
