import * as React from 'react';

var cat:any={};

function Form() {
        return ( 
          <form >
          <table class="table-form no-print">
            <tr title={cat.msgFamilias}>
              <td class="col30">
                <label>Espécie Vegetal (nome científico):</label>
              </td>
              <td>
                <select title={`Se a espécie vegetal não constar destas duas listas, descubra a família da espécie vegetal.
Se a família for Arecaceae, ou Heliconiaceae, ou Pandanaceae, ou Strelitziaceae, ou Zingiberaceae, consulte, novamente, uma das duas listas pelo nome da família.
Se a espécie vegetal ou a família da espécie vegetal não constar da lista consultada, então não há nenhuma exigência fitossanitária para o trânsito nacional da planta ou do produto vegetal.`}
                class="italic form-select" ng-model="cat.select.hosp" ng-options="hosp as hosp.nomeSci for hosp in cat.hospedeiros | orderBy:'nomeSci' | unique:cat.select.hosp"
                ng-change="cat.changes()">
                  <option value=""></option>
                </select>
              </td>
            </tr>
            <tr title={cat.msgFamilias}>
              <td class="col30">
                <label>Espécie Vegetal (nome vulgar):</label>
              </td>
              <td>
                <select title= {`Se a espécie vegetal não constar destas duas listas, descubra a família da espécie vegetal.
Se a família for Arecaceae, ou Heliconiaceae, ou Pandanaceae, ou Strelitziaceae, ou Zingiberaceae, consulte, novamente, uma das duas listas pelo nome da família.
Se a espécie vegetal ou a família da espécie vegetal não constar da lista consultada, então não há nenhuma exigência fitossanitária para o trânsito nacional da planta ou do produto vegetal.`}
                class="form-select" ng-model="cat.select.hosp" ng-options="hosp as hosp.nomeVul for hosp in cat.hospedeiros | orderBy:normalizedName:'nomeVul'"
                ng-change="cat.changes()">
                  <option value=""></option>
                </select>
              </td>
            </tr>
            <tr>
              <td class="col30">
                <label>Parte da Planta:</label>
              </td>
              <td>
                <select class="form-select" ng-model="cat.select.part" ng-options="part as part for part in cat.part | orderBy | unique:'part'">
                  <option value="cat.clear()"></option>
                </select>
              </td>
            </tr>
            <tr>
              <td class="col30">
                <label>Origem:</label>
              </td>
              <td>
                <select class="form-select" ng-model="cat.select.orig" ng-options="est.UF as est.estado for est in cat.estados | same:cat.select.dest"
                ng-change="cat.clear()">
                  <option value=""></option>
                </select>
              </td>
            </tr>
            <tr>
              <td class="col30">
                <label>Destino:</label>
              </td>
              <td>
                <select class="form-select" ng-model="cat.select.dest" ng-options="est.UF as est.estado for est in cat.estados | same:cat.select.orig"
                ng-change="cat.clear()">
                  <option value=""></option>
                </select>
              </td>
            </tr>
            <tr>
              <td class="col30"><a target="_blank" href="https://www.google.com.br/search?site=imghp&tbm=isch&q={cat.select.hosp.nomeSci}+plant+OR+planta">Fotos da Espécie Vegetal</a></td>
              <td align="center">
                <button ng-click="cat.search()" class="form-button">Pesquisar</button>
                <br/>
              </td>
            </tr>
          </table>
        </form> )
}



