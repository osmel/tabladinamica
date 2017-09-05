/*El elemento html proporciona una promesa que devuelve la instancia de DataTable.*/
import { Component, ViewChild, OnInit } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';

@Component({
     selector: 'app-datatables-products',
  templateUrl: './datatables-products.component.html'
})
export class DatatablesProductsComponent implements OnInit {

@ViewChild(DataTableDirective)
  private datatableElement: DataTableDirective;

  dtOptions: DataTables.Settings = {};

  displayToConsole(datatableElement: DataTableDirective): void {
    datatableElement.dtInstance.then((dtInstance: DataTables.Api) => console.log(dtInstance));
  }

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
}

