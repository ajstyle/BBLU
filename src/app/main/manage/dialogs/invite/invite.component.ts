import { Component, OnInit , Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss']
})
export class InviteComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<InviteComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }
    items = ['@brizzer.io', '@brizer.com'];

    ngOnInit() {
  
    }

    close() {
      this.dialogRef.close();
    }
}
