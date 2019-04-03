import { Component, OnInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';


export interface FileName {
  position: number ; 
  file_name: string;
  DownloadLink: string;
  FileOwner: string;
  Date: string;
}

const ELEMENT_DATA: FileName[] = [
  {'position' : 1 ,  'file_name' : 'main_file.pdf' , 'DownloadLink' : 'http://dd.filedownload.com/easu427rsw3' , 'FileOwner' : 'Saimon Dewan' , 'Date' : '02-02-2019'},
  { 'position' : 2 , 'file_name' : 'main_file.pdf' , 'DownloadLink' : 'http://dd.filedownload.com/easu427rsw3' , 'FileOwner' : 'Saimon Dewan' , 'Date' : '02-02-2019'},
  { 'position' : 3 , 'file_name' : 'main_file.pdf' , 'DownloadLink' : 'http://dd.filedownload.com/easu427rsw3' , 'FileOwner' : 'Saimon Dewan' , 'Date' : '02-02-2019'},
  { 'position' : 4 , 'file_name' : 'main_file.pdf' , 'DownloadLink' : 'http://dd.filedownload.com/easu427rsw3' , 'FileOwner' : 'Saimon Dewan' , 'Date' : '02-02-2019'},
  { 'position' : 5 , 'file_name' : 'main_file.pdf' , 'DownloadLink' : 'http://dd.filedownload.com/easu427rsw3' , 'FileOwner' : 'Saimon Dewan' , 'Date' : '02-02-2019'},
  { 'position' : 6 , 'file_name' : 'main_file.pdf' , 'DownloadLink' : 'http://dd.filedownload.com/easu427rsw3' , 'FileOwner' : 'Saimon Dewan' , 'Date' : '02-02-2019'},
  { 'position' : 7 , 'file_name' : 'main_file.pdf' , 'DownloadLink' : 'http://dd.filedownload.com/easu427rsw3' , 'FileOwner' : 'Saimon Dewan' , 'Date' : '02-02-2019'},
  { 'position' : 8 , 'file_name' : 'main_file.pdf' , 'DownloadLink' : 'http://dd.filedownload.com/easu427rsw3' , 'FileOwner' : 'Saimon Dewan' , 'Date' : '02-02-2019'},
  { 'position' : 9 , 'file_name' : 'main_file.pdf' , 'DownloadLink' : 'http://dd.filedownload.com/easu427rsw3' , 'FileOwner' : 'Saimon Dewan' , 'Date' : '02-02-2019'},
  { 'position' : 10 , 'file_name' : 'main_file.pdf' , 'DownloadLink' : 'http://dd.filedownload.com/easu427rsw3' , 'FileOwner' : 'Saimon Dewan' , 'Date' : '02-02-2019'},
  ];
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  displayedColumns: string[] = ['select', 'File_Name', 'Download_Link', 'Link_Sharing', 'File_Owner' , 'Date' , 'Original_Message'];
  dataSource = ELEMENT_DATA;
  selection = new SelectionModel<FileName>(true, []);

  ngOnInit() {
    
  }
  constructor() { }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: FileName): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }


}
