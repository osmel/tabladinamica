import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import {DataTableModule} from "angular2-datatable";
import { DataTablesModule } from 'angular-datatables';


import {HttpClientModule} from '@angular/common/http';




import { FormsModule } from '@angular/forms';




import { AppComponent } from './app.component';
import { DatatablesProductsComponent } from './datatables-products/datatables-products.component';
import { DataFilterPipe } from './pipes/data-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DatatablesProductsComponent,
    DataFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DataTablesModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
