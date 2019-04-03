import { Component, OnInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {AddnewusersComponent} from '../dialogs/addnewusers/addnewusers.component' ;
import {ExportsComponent} from '../dialogs/exports/exports.component' ;
import {MessageComponent} from '../dialogs/message/message.component' ;
import {InviteEmployersComponent} from '../dialogs/invite-employers/invite-employers.component' ;


export interface User {
  name: string;
  role: string ;
  department : string ; 
  position : number ;
  company_email : string ;
  complete_profile : string ; 
}

const ELEMENT_DATA: User[] = [
  {name: 'saimohit', role: 'Admin' ,department : 'Q/A', company_email : 'saimohit200@gmail.com', complete_profile : 'Complete user profile',  position : 1},
  {name: 'saimohit', role: 'Admin' , department : 'Q/A' , company_email : 'saimohit200@gmail.com' , complete_profile : 'Complete user profile' ,  position : 2 },
  {name: 'saimohit', role: 'Admin' , department : 'Q/A' , company_email : 'saimohit200@gmail.com' ,complete_profile : 'Complete user profile' , position : 3 },
  {name: 'saimohit', role: 'Admin', department : 'Q/A' , company_email : 'saimohit200@gmail.com' , complete_profile : 'Complete user profile' ,position : 4 },
  {name: 'saimohit', role: 'Admin' ,department : 'Q/A' ,company_email : 'saimohit200@gmail.com' ,complete_profile : 'Complete user profile' , position : 5},
  {name: 'saimohit', role: 'Admin' ,department : 'Q/A' ,company_email : 'saimohit200@gmail.com' ,complete_profile : 'Complete user profile' , position : 6},
  {name: 'saimohit', role: 'Admin' ,department : 'Q/A' ,company_email : 'saimohit200@gmail.com' ,complete_profile : 'Complete user profile' , position : 7},
  {name: 'saimohit', role: 'Admin' ,department : 'Q/A' ,company_email : 'saimohit200@gmail.com' ,complete_profile : 'Complete user profile' , position : 8},
  {name: 'saimohit', role: 'Admin' ,department : 'Q/A' ,company_email : 'saimohit200@gmail.com' ,complete_profile : 'Complete user profile' , position : 9},
  {name: 'saimohit', role: 'Admin', department : 'Q/A' ,company_email : 'saimohit200@gmail.com' ,complete_profile : 'Complete user profile' , position : 10 },
  {name: 'saimohit', role: 'Admin' ,department : 'Q/A' ,company_email : 'saimohit200@gmail.com' , complete_profile : 'Complete user profile' ,position : 11},
  {name: 'saimohit', role: 'Admin', department : 'Q/A' ,company_email : 'saimohit200@gmail.com' ,complete_profile : 'Complete user profile' ,position : 12 }

 
];
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = [ 'select' , 'name', 'role', 'department', 'company_email' , 'complete_profile' , 'action'];
  dataSource = new MatTableDataSource<User>(ELEMENT_DATA);
  subscribers = [
    {value: 'Any Employee', viewValue: 'Any Employee'},
    {value: 'AnyUsers', viewValue: 'AnyUsers'},
  ];
  selection = new SelectionModel<User>(true, []);

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    
  }

  openAddNewUser(): void {
    console.log('open');
    const dialogRef = this.dialog.open(AddnewusersComponent, {
      width: '550px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     // this.animal = result;
    });
  }


  openMessageDialog() {
    const dialogRef = this.dialog.open(MessageComponent, {
      width: '550px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     // this.animal = result;
    });
  }


  inviteEmployers() {
    const dialogRef = this.dialog.open(InviteEmployersComponent, {
      width: '550px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     // this.animal = result;
    });
  }
  openExportDialog() {
    const dialogRef = this.dialog.open(ExportsComponent, {
      width: '350px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     // this.animal = result;
    });
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: User): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }



}

