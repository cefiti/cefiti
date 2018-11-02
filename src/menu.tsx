import React from 'react'
import uiStore from './uistore'
import { observer } from 'mobx-react'

const Menu = () => {
  return (
    <p>
      <span>
        <a href="#" onClick={uiStore.handleMenu.bind(undefined, 'Base')}>
          Ver Base de Dados
        </a>
      </span>
      <span title="Baixar o sistema para uso off-line. Descompacte o arquivo CEFiTI.zip e acesse o arquivo index.html">
        <a href="#" onClick={uiStore.handleMenu.bind(undefined, 'Download')}>
          Download
        </a>
      </span>
      <span title="Para salvar o resultado como PDF, utilize o navegador Chrome, e altere a impressora para 'Salvar como PDF' na página de impressão">
        <a href="#" onClick={uiStore.handleMenu.bind(undefined, 'Print')}>
          Imprimir
        </a>
      </span>
      <span>
        <a href="#" onClick={uiStore.handleMenu.bind(undefined, 'Nova')}>
          NOVA CONSULTA
        </a>
      </span>
    </p>
  )
}

export default observer(Menu as React.SFC)

//style="float:right;color:#fff;padding:5px 10px 5px 15px;"
/*          <span>
          <span ><a href="#">Para baixar o Sistema: CTRL + S </a></span>
            <a href="#" onClick={uiStore.handleMenu.bind(this, 'Mapa')}>
              <span>{uiStore.exibeMapa ? 'Fechar' : 'Ver'}</span>          Mapa de Área Livre         .
            </a>
          </span>
          */
