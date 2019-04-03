import { Component, OnInit , Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-channnel-users',
  templateUrl: './channnel-users.component.html',
  styleUrls: ['./channnel-users.component.scss']
})
export class ChannnelUsersComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<ChannnelUsersComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }
}
