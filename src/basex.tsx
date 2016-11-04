import * as React from 'react';
import uiStore from './uistore';
import {observer} from 'mobx-react';

let Base = ({db}) => {
  return (
     uiStore.exibeBase ? (<div>
          <br/>
          <table style={{"width": "100%"}} className="table-grid">
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
            {db.map((item, i) => { return (
              <tr key={i}>
                <td style={{"width": "10%"}}><span>{item.desc}</span></td>
                <td style={{"width": "20%"}} className="italic"><span>{item.hosp.toString()}</span></td>
                <td style={{"width": "10%"}}><span>{item.part.toString()}</span></td>
                <td style={{"width": "10%"}}><span>{item.orig.toString()}</span></td>
                <td style={{"width": "10%"}}><span>{item.dest.toString()}</span></td>
                <td style={{"width": "15%"}}>
                  <a target="_blank" href="{item.link}">{item.leg}</a>
                  <br/>
                  <br/>
                  <span>{item.pragc}</span>
                  <br/>
                  <br/>
                  <span className="italic">{item.prag}</span>
                </td>
                <td style={{"width": "30%"}}>
                <div style={{"margin":"6px"}}>
                  {item.exig.map((exig, ix) => { return (
                    <span key={ix}>{ix + 1} - {exig}</span>
                  );})}
                </div>
                </td>
                <td style={{"width": "5%", "text-align":"center"}}>
                  <input type="checkbox"  disabled={true} selected={item.proib}/>
                </td>
              </tr>
            );})}
            </tbody>
            <tfoot className="form-barra-botoes">
              <tr>
                <td/>
              </tr>
            </tfoot>
          </table>
        </div>) : null
  );
};

export default observer(Base);

//ng-class-even="'linha-alternada'"
