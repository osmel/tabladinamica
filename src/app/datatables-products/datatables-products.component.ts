/*
	dtTrigger : para presentar manualmente la tabla
	Puede utilizar las directivas angulares para representar la tabla. 
	Angular-datatables proporciona una dtTrigger que puede utilizar para accionar manualmente la representación de la tabla.
*/
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'; //http es un observador, donde luego me voy a suscribir para obtener datos

import { Subject } from 'rxjs/Rx';




@Component({
  selector: 'app-datatables-products',
  templateUrl: './datatables-products.component.html'
  //styleUrls: ['./datatables-products.component.css'],
  //template: './datatables-products.component.html' 
})
export class DatatablesProductsComponent implements OnInit { 
	persons: Personas[] = [];
	dtTrigger: Subject<Personas> = new Subject();
	dtOptions: DataTables.Settings = {};
  constructor(private _http:HttpClient) { }   //private _http: HttpClient


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
					//displayLength: 2
			    };  //fin de las opciones	   	



				  //this._http.post("http://localhost/tabladinamica/data/tabla.php",'From an Input field')
				  this._http.post<Personas>("http://localhost/tabladinamica/data/tabla.php","datoxxx")
			      .subscribe(datos => {
			    	    //console.log(datos );
			          	for (let key$ in datos.data ) {
			          		//for (let midata$ in datos ) {
			          			console.log(datos.data[key$]);
			          			
			  			 	//console.log(datos.data[key$]);
			  			 	this.persons.push(datos.data[key$]); 
			  				 //}
			  			}
			  	

			       this.dtTrigger.next();
			       

			      });
		}


}


///////////////////////////////////
export interface Personas {
    data : {
	    name: string;
	    email: string;
	    regDate: string;
	    city: string;
	     age: number;
    }
}