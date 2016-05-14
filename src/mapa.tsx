import * as React from 'react';
import store from './store'
import {observer} from 'mobx-react'

var Mapa = ({}) => (store.exibeMapa ? (<div class="center"><img src="moko_sigatoka_s.png" width="60%"/></div>) : null)


export default observer(Mapa);
