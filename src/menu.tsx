/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useStore } from './store'

const Menu = () => {
  const [, setStore] = useStore()
  const handleMenu = (menu: string) => {
    setStore(d => {
      d.handleMenu(menu)
    })
  }
  return (
    <div id="moldura-navegacao-global">
      <div id="navegacao-global">
        <p>
          <span>
            <a href="#" onClick={() => handleMenu('Base')}>
              Ver Base de Dados
            </a>
          </span>
          <span title="Baixar o sistema para uso off-line. Descompacte o arquivo CEFiTI.zip e acesse o arquivo index.html">
            <a href="#" onClick={() => handleMenu('Download')}>
              Download
            </a>
          </span>
          <span title="Para salvar o resultado como PDF, utilize o navegador Chrome, e altere a impressora para 'Salvar como PDF' na página de impressão">
            <a href="#" onClick={() => handleMenu('Print')}>
              Imprimir
            </a>
          </span>
          <span>
            <a href="#" onClick={() => handleMenu('Nova')}>
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
          */
