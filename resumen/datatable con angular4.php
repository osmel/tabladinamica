sudo npm install angular-4-data-table-bootstrap-4 --save
https://github.com/afermon/angular-4-data-table-bootstrap-4
https://www.npmjs.com/package/angular-4-data-table-bootstrap-4/tutorial


https://l-lin.github.io/angular-datatables/#/getting-started



  npm install zone.js@0.8.5 --save
  sudo npm install zone.js@0.8.5 --save
  
  sudo npm install bootstrap@4.0.0-alpha.6 --save
  sudo npm install jquery --save
  sudo npm install tether --save


      "styles": [
        "styles.css",
        "../node_modules/bootstrap/dist/css/bootstrap.min.css",
        "../node_modules/datatables.net-dt/css/jquery.dataTables.css"
      ],
      "scripts": [
        "../node_modules/jquery/dist/jquery.slim.min.js",
        "../node_modules/tether/dist/js/tether.min.js",
        "../node_modules/bootstrap/dist/js/bootstrap.min.js",
        "../node_modules/datatables.net/js/jquery.dataTables.js"
      ],


      







      ///////////////////////////


sudo npm install jquery --save
sudo npm install datatables.net --save
sudo npm install datatables.net-dt --save
sudo npm install angular-datatables --save

sudo npm install @types/jquery --save-dev
sudo npm install @types/datatables.net --save-dev

////
.angular-cli.json

      "styles": [
        "styles.css",
        "../node_modules/bootstrap/dist/css/bootstrap.min.css",
        "../node_modules/datatables.net-dt/css/jquery.dataTables.css"
      ],
      "scripts": [
        "../node_modules/jquery/dist/jquery.slim.min.js",
        "../node_modules/tether/dist/js/tether.min.js",
        "../node_modules/bootstrap/dist/js/bootstrap.min.js",
        "../node_modules/datatables.net/js/jquery.dataTables.js"
      ],


//////////

import { DataTablesModule } from 'angular-datatables';

imports: [
    DataTablesModule
],

//////////

tsconfig.json

	{
	  "compilerOptions": {
	    ...
	    "paths": {
	      "@angular/*": [
	        "../node_modules/@angular/*"
	      ]
	    }
	  }
	}


///////////////

import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'; //http es un observador, donde luego me voy a suscribir para obtener datos
@Component({
  selector: 'app-datatables-products',
  templateUrl: './datatables-products.component.html',
  styleUrls: ['./datatables-products.component.css'],
})
export class DatatablesProductsComponent implements OnInit {


  constructor(private _http: HttpClient) { }   


dtOptions: DataTables.Settings = {};

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',

		language: {  //tratamiento de lenguaje
			"lengthMenu": "Mostrar _MENU_ registros por página",
			"zeroRecords": "No hay registros",
			"info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
			"infoEmpty": "No hay registros disponibles",
			"infoFiltered": "(Mostrando _TOTAL_ de _MAX_ registros totales)",  
			"emptyTable":     "No hay registros",
			"infoPostFix":    "",
			"thousands":      ",",
			"loadingRecords": "Leyendo...",
			"processing":     "Procesando...",
			"search":         "Buscar:",
			"paginate": {
				"first":      "Primero",
				"last":       "Último",
				"next":       "Siguiente",
				"previous":   "Anterior"
			},
			"aria": {
				"sortAscending":  ": Activando para ordenar columnas ascendentes",
				"sortDescending": ": Activando para ordenar columnas descendentes"
			},
		}



    };
  }


}
/////////////

<h1>probando</h1>
<div class="container">
	<table datatable class="row-border hover" [dtOptions]="dtOptions">
	  <thead>
	    <tr>
	      <th>ID</th>
	      <th>First name</th>
	      <th>Last name</th>
	    </tr>
	  </thead>
	  <tbody>
	    <tr>
	      <td>1</td>
	      <td>Foo</td>
	      <td>Bar</td>
	    </tr>
	    <tr>
	      <td>2</td>
	      <td>Someone</td>
	      <td>Youknow</td>
	    </tr>
	    <tr>
	      <td>3</td>
	      <td>Iamout</td>
	      <td>Ofinspiration</td>
	    </tr>
	  </tbody>
	</table>
</div>	

/////////////