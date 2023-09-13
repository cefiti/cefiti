import Base from './base'
import Result from './result'
import Form from './form'
import { Head } from './head'
import { Botton } from './botton'

export const App = () => (
  <div id="resolucao">
    <Head />
    <div id="corpo">
      <div id="conteúdo">
        <Form />
        <Result />
        <Base />
      </div>
    </div>
    <Botton />
  </div>
)
