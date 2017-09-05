import { Component, OnInit } from '@angular/core';

@Component({
     selector: 'app-datatables-products',
  templateUrl: './datatables-products.component.html'
})
export class DatatablesProductsComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

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


 