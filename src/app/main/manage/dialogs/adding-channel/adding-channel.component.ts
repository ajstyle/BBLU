import { Component, OnInit ,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-adding-channel',
  templateUrl: './adding-channel.component.html',
  styleUrls: ['./adding-channel.component.scss']
})
export class AddingChannelComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<AddingChannelComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }
  items = ['@brizer.io' ,'@brizer.io' ] ; 
  ngOnInit() {
  }

  
  close() {
    this.dialogRef.close();
  }

}
