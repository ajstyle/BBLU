import { Component, OnInit , Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-addnewusers',
  templateUrl: './addnewusers.component.html',
  styleUrls: ['./addnewusers.component.scss']
})
export class AddnewusersComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<AddnewusersComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }


}
