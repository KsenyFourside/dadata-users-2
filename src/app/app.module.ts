import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDadataModule } from '@kolkov/ngx-dadata';

import { HeaderComponent } from 'src/components/header/header.component';
import { ModalComponent } from 'src/components/modal/modal.component';
import { TableComponent } from 'src/components/table/table.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ModalComponent, TableComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, NgxDadataModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
