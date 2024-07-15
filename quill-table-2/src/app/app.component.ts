import { Component ,AfterViewInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import  Quill  from 'quill'
import QuillBetterTable from 'quill-better-table'

Quill.register({
  'modules/better-table': QuillBetterTable
}, true)
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'quill-table-2';
  quill : any 
  module : any
  ngAfterViewInit() {
 this.quill = new Quill('#editor', {
   modules: {
    table: false,  // disable table module
    'better-table': {
      operationMenu: {
        items: {
          insertColumnRight: {
            text: 'Insert Column Right'
          },
          insertColumnLeft: {
            text: 'Insert Column Left'
          },
          insertRowUp: {
            text: 'Insert Row Up'
          },
          insertRowDown: {
            text: 'Insert Row Down'
          },
          mergeCells: {
            text: 'Merge Cells'
          },
          unmergeCells: {
            text: 'Unmerge Cells'
          },
          deleteColumn: {
            text: 'Delete Column'
          },
          deleteRow: {
            text: 'Delete Row'
          },
          deleteTable: {
            text: 'Delete Table'
          }
        },
        color: {
          colors: ['#fff', 'red', 'rgb(0, 0, 0)'],  // colors in operationMenu
          text: 'Background Colors'  // subtitle
        } 
      }
    },
    keyboard: {
      bindings: QuillBetterTable.keyboardBindings
    }
,
     toolbar: [
       ['bold', 'italic', 'underline'],
       [{ 'table': [
        'insertTable',    // Insert a new table
        'insertRowAbove', // Insert a row above the current row
        'insertRowBelow', // Insert a row below the current row
        'insertColumnLeft', // Insert a column to the left of the current column
        'insertColumnRight', // Insert a column to the right of the current column
        'deleteRow',      // Delete the current row
        'deleteColumn',   // Delete the current column
        'deleteTable',    // Delete the entire table
        'mergeCells',     // Merge selected cells
        'unmergeCells'    // Unmerge selected cells
      ]}]
     ],
   },
   placeholder: 'Compose an epic...',
   theme: 'snow', // or 'bubble'
 });
 this.module  = this.quill.getModule('better-table')
 this.module.getTable()  // current selection
this.module.insertTable(1, 4)
this.module.getTable()
this.module.deleteTable()
}

addRow() {
  this.module  = this.quill.getModule('better-table')

  this.module.insertRowBelow();

}
addTable(){

}

}
