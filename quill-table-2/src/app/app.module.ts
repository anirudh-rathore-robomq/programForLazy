import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import QuillBetterTable from 'quill-better-table'

import { QuillModule } from 'ngx-quill';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    QuillModule.forRoot(),
    QuillBetterTable
  ]
})
export class AppModule { }