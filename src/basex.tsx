import * as React from 'react';

var item: any = {};

function Base () {
  return (
     <div ng-hide="cat.base">
          <br/>
          <table tyle="width: 100%;" class="table-grid">
            <caption>Exigências</caption>
            <thead>
              <tr>
                <th style="width: 10%;">Descrição</th>
                <th style="width: 20%;">Hospedeiro</th>
                <th style="width: 10%;">Partida</th>
                <th style="width: 10%;">Origem</th>
                <th style="width: 10%;">Destino</th>

                <th style="width: 15%;">Legislação</th>
                <th style="width: 30%;">Exigências</th>
                <th style="width: 5%;">Trânsito Proibido</th>
              </tr>
            </thead>
            <tbody>
              <tr ng-repeat="item in cat.db track by $index" ng-class-even="'linha-alternada'">

                <td style="width: 10%;"><span>{item.desc}</span></td>
                <td style="width: 20%;" class="italic"><span>{item.hosp.toString()}</span></td>
                <td style="width: 10%;"><span>{item.part.toString()}</span></td>
                <td style="width: 10%;"><span>{item.orig.toString()}</span></td>
                <td style="width: 10%;"><span>{item.dest.toString()}</span></td>
                <td style="width: 15%;">
                  <a target="_blank" ng-href="{item.link}">{item.leg}</a>
                  <br/>
                  <br/>
                  <span>{item.pragc}</span>
                  <br/>
                  <br/>
                  <span class="italic">{item.prag}</span>
                </td>
                <td style="width: 30%;">
                  <div ng-repeat="exig in item.exig track by $index" style="margin:6px;"><span>{"$index+1"} - {"exig"}</span></div>
                </td>
                <td style="width: 5%;" align="center">
                  <input type="checkbox" onclick="return false;" ng-model="item.proib"/>
                </td>
              </tr>
            </tbody>
            <tfoot class="form-barra-botoes">
              <tr>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
  )
}
