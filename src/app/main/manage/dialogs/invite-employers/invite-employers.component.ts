import { Component, OnInit , Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-invite-employers',
  templateUrl: './invite-employers.component.html',
  styleUrls: ['./invite-employers.component.scss']
})
export class InviteEmployersComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<InviteEmployersComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }
    items = ['@brizzer.io', '@brizer.com'];

    ngOnInit() {
  
    }

    close() {
      this.dialogRef.close();
    }
}
