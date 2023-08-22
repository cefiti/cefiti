import { useUiStore } from './uistore'

const Menu = () => {
  const uiStore = useUiStore()
  return (
    <div id="moldura-navegacao-global">
      <div id="navegacao-global">
        <p>
          <span>
            <a href="#" onClick={() => uiStore.handleMenu('Base')}>
              Ver Base de Dados
            </a>
          </span>
          <span title="Para salvar o resultado como PDF, utilize o navegador Chrome, e altere a impressora para 'Salvar como PDF' na página de impressão">
            <a href="#" onClick={() => uiStore.handleMenu('Print')}>
              Imprimir
            </a>
          </span>
          <span>
            <a href="#" onClick={() => uiStore.handleMenu('Nova')}>
              NOVA CONSULTA
            </a>
          </span>
        </p>
      </div>
    </div>
  )
}

export default Menu

//style="float:right;color:#fff;padding:5px 10px 5px 15px;"
/*          <span>
          <span ><a href="#">Para baixar o Sistema: CTRL + S </a></span>
            <a href="#" onClick={uiStore.handleMenu.bind(this, 'Mapa')}>
              <span>{uiStore.exibeMapa ? 'Fechar' : 'Ver'}</span>          Mapa de Área Livre         .
            </a>
          </span>


           <span title="Baixar o sistema para uso off-line. Descompacte o arquivo CEFiTI.zip e acesse o arquivo index.html">
            <a href="#" onClick={() => uiStore.handleMenu('Download')}>
              Download
            </a>
          </span>
          
              "zip": "jszip ./build -o ./build/CEFiTI.zip",
    "deploy": "jszip -c package.json -o CEFiTI%npm_package_version%.zip",
          */
