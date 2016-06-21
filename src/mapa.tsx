import * as React from 'react';
import uiStore from './uistore'
import {observer} from 'mobx-react'

var Mapa = ({}) => (uiStore.exibeMapa ? (<div className="center"><img src="moko_sigatoka_s.png" width="60%"/></div>) : null)


export default observer(Mapa);
