import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ListboxModule} from 'primeng/listbox';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {DropdownModule} from "primeng/dropdown";
import {DragDropModule} from 'primeng/dragdrop';
import {TableModule} from 'primeng/table';
import {ToastModule} from "primeng/toast";
import {ButtonModule} from "primeng/button";
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import { MatDialogModule} from '@angular/material/dialog';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {DialogModule} from "primeng/dialog";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ListboxModule,
    FormsModule,
    InputTextModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DropdownModule,
    DragDropModule,
    TableModule,
    ToastModule,
    ButtonModule,
    ConfirmPopupModule,
    MatDialogModule,
    ConfirmDialogModule,
    DialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
