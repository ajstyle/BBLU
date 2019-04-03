import { Component, OnInit , Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-forward',
  templateUrl: './forward.component.html',
  styleUrls: ['./forward.component.scss']
})
export class ForwardComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<ForwardComponent>,
    @Inject(MAT_DIALOG_DATA) public data ) { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }
}
