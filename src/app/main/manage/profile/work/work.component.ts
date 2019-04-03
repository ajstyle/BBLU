import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {ForwardComponent} from '../../dialogs/forward/forward.component'
@Component({
	selector: 'app-work',
	templateUrl: './work.component.html',
	styleUrls: [ './work.component.scss' ]
})
export class WorkComponent implements OnInit {
	data;

	constructor(public dialog: MatDialog) {}

	ngOnInit() {
		this.data = [
			{
				email: 'workemail@mail.com'
			},
			{
				email: 'workemail@mail.com'
			},
			{
				email: 'workemail@mail.com'
			},
			{
				email: 'workemail@mail.com'
			},
			{
				email: 'workemail@mail.com'
			},
			{
				email: 'workemail@mail.com'
			},
			{
				email: 'workemail@mail.com'
			},
			{
				email: 'workemail@mail.com'
			}
		];
	}

	openForwardDialog() : void {
		const dialogRef = this.dialog.open(ForwardComponent, {
      width: '550px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    //  this.animal = result;
    });
  }

	}

