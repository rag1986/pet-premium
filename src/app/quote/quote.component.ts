import { Component } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { EditWarningComponent } from '../edit-warning/edit-warning.component';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})



export class QuoteComponent {
 selectedValue: string | undefined;
 selected = 'option2';

 constructor(public dialog: MatDialog) {}

 openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
   this.dialog.open(EditWarningComponent, {
     width: '90%',
     enterAnimationDuration,
     exitAnimationDuration,
   });
   

   


 };



}
