import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'; //http es un observador, donde luego me voy a suscribir para obtener datos

//import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Rx';

import 'rxjs/add/operator/map';





@Component({
  selector: 'app-datatables-products',
  //templateUrl: './datatables-products.component.html'
  //styleUrls: ['./datatables-products.component.css'],

  template: './datatables-products.component.html'
})
export class DatatablesProductsComponent implements OnInit {


  constructor(private _http:HttpClient) { }   //private _http: HttpClient


dtOptions: DataTables.Settings = {};
//persons: Person[]; // = [];
persons:Personas[] = [];

  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  //dtTrigger: Subject = new Subject();
 

   ngOnInit(): void {
   	/*
	this.dtOptions = {
      paginationType: 'full_numbers',
      displayLength: 2
    };*/


		this._http.get<Personas>("assets/data.json")
		  //.map(personas['data'])
	      .subscribe(datos => {
	        //this.persons = datos.data; 
	        // Calling the DT trigger to manually render the table
	        //this.dtTrigger.next();
	        console.log(datos.data);

	      });





														/*	this._http.get("assets/data.json")
														      .subscribe((datos)=> {
														        setTimeout(()=> {
														          //this.data = datos.json();
														          //this.data = datos;
														          console.log(datos);
														        }, 500);
														      });
														      */

      
    /*

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
*/


    
  }

/*
  private extractData(res: Response) {
    const body = res.json();
    return body.data || {};
  }
*/

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



/*


  public data: any;
  public filterQuery = "";
  public rowsOnPage = 5;
  public sortBy = "email";
  public sortOrder = "asc";



  ngOnInit(): void {
    this._http.get("assets/data.json")
      .subscribe((datos)=> {
        setTimeout(()=> {
          //this.data = datos.json();
          this.data = datos;
          console.log(datos);
        }, 500);
      });
  }

*/