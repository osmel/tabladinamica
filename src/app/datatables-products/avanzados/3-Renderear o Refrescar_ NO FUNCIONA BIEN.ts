/*

En algunos casos, puede que necesite "volver a generar su tabla". Puede utilizar la API DataTable destroy() https://datatables.net/reference/api/destroy()
 para quitar la tabla y volver a utilizar la dtTrigger para procesar la tabla de nuevo.
*/
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs/Rx';



@Component({
     selector: 'app-datatables-products',
  templateUrl: './datatables-products.component.html'
})
export class DatatablesProductsComponent implements OnInit {
	@ViewChild(DataTableDirective)
	  dtElement: DataTableDirective;
	  dtOptions: DataTables.Settings = {};
	  dtTrigger: Subject<Personas> = new Subject();

	  ngOnInit(): void {
	    this.dtOptions = {
	      ajax: 'assets/data.json',
	       columns: [{
		        title: 'Nombre',
		        data: 'name'
		      }, {
		        title: 'correo',
		        data: 'email'
		      }, {
		        title: 'edad',
		        data: 'age'
		    }]
	    };
	  }

	  ngAfterViewInit(): void { //"Hook del ciclo de vida": que se llama después de que la vista de un componente se ha inicializado completamente.
	    this.dtTrigger.next();
	  }

	  rerender(): void {
	    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
	      // Destruye primero la tabla
	      dtInstance.destroy();
	      // Llame al dtTrigger para volver a renderear nuevamente
	      this.dtTrigger.next();
	    });
	  }

	  /*
	  		No funcionan
		  //dtInstance.fnReloadAjax();
	      //dtInstance.dataTable()._fnAjaxUpdate();
	  */

	}


////////////////////////////////////
export interface Personas {
    data : {
	    name: string;
	    email: string;
	    regDate: string;
	    city: string;
	     age: number;
    }
}

