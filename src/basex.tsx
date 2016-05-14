import * as React from 'react'
import store from './store'
import {observer} from 'mobx-react'

var Base = ({db}) => {
  return (
     store.exibeBase ? (<div>
          <br/>
          <table style={{"width": "100%"}} class="table-grid">
            <caption>Exigências</caption>
            <thead>
              <tr>
                <th style={{"width": "10%"}}>Descrição</th>
                <th style={{"width": "20%"}}>Hospedeiro</th>
                <th style={{"width": "10%"}}>Partida</th>
                <th style={{"width": "10%"}}>Origem</th>
                <th style={{"width": "10%"}}>Destino</th>
                <th style={{"width": "15%"}}>Legislação</th>
                <th style={{"width": "30%"}}>Exigências</th>
                <th style={{"width": "5%"}}>Trânsito Proibido</th>
              </tr>
            </thead>
            <tbody>
            {db.map((item, i)=>{ return (
              <tr key={i}>
                <td style={{"width": "10%"}}><span>{item.desc}</span></td>
                <td style={{"width": "20%"}} class="italic"><span>{item.hosp}</span></td>
                <td style={{"width": "10%"}}><span>{item.part}</span></td>
                <td style={{"width": "10%"}}><span>{item.orig}</span></td>
                <td style={{"width": "10%"}}><span>{item.dest}</span></td>
                <td style={{"width": "15%"}}>
                  <a target="_blank" ng-href="{item.link}">{item.leg}</a>
                  <br/>
                  <br/>
                  <span>{item.pragc}</span>
                  <br/>
                  <br/>
                  <span class="italic">{item.prag}</span>
                </td>
                <td style={{"width": "30%"}}>
                  <div ng-repeat="exig in item.exig track by $index" style={{"margin":"6px"}}><span>{"$index+1"} - {"exig"}</span></div>
                </td>
                <td style={{"width": "5%"}} align="center">
                  <input type="checkbox" onclick="return false;" ng-model="item.proib"/>
                </td>
              </tr>
            )})}
            </tbody>
            <tfoot class="form-barra-botoes">
              <tr>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>) : null
  ) 
}


export default observer(Base)

//ng-class-even="'linha-alternada'"