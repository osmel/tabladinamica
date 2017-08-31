import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-datatables-products',
  templateUrl: './datatables-products.component.html'
})
export class DatatablesProductsComponent implements OnInit {


  constructor() { }   //private _http: HttpClient


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
		},

	      ajax: 'assets/data.json',
	      columns: [{
	        title: 'Nombre',
	        data: 'name'
	      }, {
	        title: 'Correo',
	        data: 'email'
	      }, {
	        title: 'Edad',
	        data: 'age'
	      }, {
	        title: 'Ciudad',
	        data: 'city'
	      }, {
	        title: 'Fecha',
	        data: 'regDate'
	      }]
    };  //fin de las opciones



    
  }
}

