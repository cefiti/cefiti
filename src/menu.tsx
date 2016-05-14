import * as React from 'react';
import store from './store';
import {observer} from 'mobx-react'

var handleClick = (i, event) => {
  if (i === 'Base') {store.exibeBase = !store.exibeBase};
  if (i === 'Mapa') {store.exibeMapa = !store.exibeMapa};
  console.log('this:',this, 'iii:', i, 'event:',event.target, event.type, store.exibeBase)
}

var Menu = () => { return (
        <p>
          <span><a href="#" onClick={handleClick.bind(this, 'Base')}>Ver Base de Dados</a></span>
          <span><a href="#" onClick={handleClick.bind(this, 'Mapa')}><span>{store.exibeMapa ? 'Fechar' : 'Ver'}</span>          Mapa de Área Livre</a>         </span>
          <span title="Para salvar o resultado como PDF, utilize o navegador Chrome, e altere a impressora para 'Salvar como PDF' na página de impressão"><a href="#" onClick={handleClick.bind(this)}>Imprimir</a></span>
          <span >Para baixar o Sistema: CTRL + S </span>
        </p>)
}

export default observer(Menu)

//style="float:right;color:#fff;padding:5px 10px 5px 15px;"