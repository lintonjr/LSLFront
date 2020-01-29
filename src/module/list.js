import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

class listComponent extends React.Component  {
  render()
  {
    return (
      <table class="table table-hover table-striped">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Item</th>
            <th scope="col">Descrição</th>
            <th scope="col">Modelo</th>
            <th scope="col">Tipo Emb</th>
            <th scope="col">Resp.</th>
            <th colspan="2">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>18165K26B011Y1</td>
            <td>CATALISADOR  THAI</td>
            <td>GS</td>
            <td>CAIXA</td>
            <td>Linton</td>
            <td>
              <button class="btn btn-outline-info "> Edit </button>
            </td>
            <td>
              <button class="btn btn-outline-danger "> Delete </button>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default listComponent;