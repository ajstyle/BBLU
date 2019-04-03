import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {AddingChannelComponent} from '../dialogs/adding-channel/adding-channel.component' ; 
import {InviteComponent} from '../dialogs/invite/invite.component' ;
import {ChannnelUsersComponent} from '../dialogs/channnel-users/channnel-users.component' ;
export interface Channel {
  name: string;
  description: string ; 
}

const ELEMENT_DATA: Channel[] = [
  {name: 'saimohit', description: 'Test Description' },
  {name: 'saimohit', description: 'Test Description' },
  {name: 'saimohit', description: 'Test Description' },
  {name: 'saimohit', description: 'Test Description' },
  {name: 'saimohit', description: 'Test Description' },
  {name: 'saimohit', description: 'Test Description' },
  {name: 'saimohit', description: 'Test Description' },
  {name: 'saimohit', description: 'Test Description' },
  {name: 'saimohit', description: 'Test Description' },
  {name: 'saimohit', description: 'Test Description' },
  {name: 'saimohit', description: 'Test Description' },
  {name: 'saimohit', description: 'Test Description' }

 
];

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})

export class ChannelsComponent implements OnInit {

  displayedColumns: string[] = ['name', 'description', 'users', 'who' , 'autojoin'];
  dataSource = ELEMENT_DATA;
  subscribers = [
    {value: 'Any Employee', viewValue: 'Any Employee'},
    {value: 'AnyUsers', viewValue: 'AnyUsers'},
  ];
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    
  }


  addNewChannel() {
    console.log('open');
    const dialogRef = this.dialog.open(AddingChannelComponent, {
      width: '550px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     // this.animal = result;
    });
  }
  
  allUsers() {
    console.log('open');
    const dialogRef = this.dialog.open(ChannnelUsersComponent, {
      width: '550px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     // this.animal = result;
    });
  }

  invite() {
    console.log('open');
    const dialogRef = this.dialog.open(InviteComponent, {
      width: '550px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     // this.animal = result;
    });
  }

}
