import { Component } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-edit-warning',
  templateUrl: './edit-warning.component.html',
  styleUrls: ['./edit-warning.component.scss']
})
export class EditWarningComponent {
  constructor(public dialogRef: MatDialogRef<EditWarningComponent>) {}

  
}
