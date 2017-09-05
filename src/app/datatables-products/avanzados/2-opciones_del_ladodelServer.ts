/*A veces, las opciones de DataTable se almacenan o se computan en el lado del servidor. 
Todo lo que necesitas hacer es devolver el resultado esperado como una promesa.*/
import { Component, Inject, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'; //http es un observador, donde luego me voy a suscribir para obtener datos
import 'rxjs/add/operator/toPromise';




@Component({
     selector: 'app-datatables-products',
  templateUrl: './datatables-products.component.html'
})
export class DatatablesProductsComponent implements OnInit {
dtOptions: DataTables.Settings = {};

  constructor(@Inject(HttpClient) private http: HttpClient) {}

  ngOnInit(): void {
    this.dtOptions = this.http.get<Personas>('assets/opciones.json') 
	    .toPromise()
	    .then(response => response) 
	    .catch(this.handleError);

  }

  private handleError(error: any): Promise<Personas> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
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
