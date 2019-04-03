import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drive-integration',
  templateUrl: './drive-integration.component.html',
  styleUrls: ['./drive-integration.component.scss']
})
export class DriveIntegrationComponent implements OnInit {

  constructor() { }
  email ; 
  data ; 
  disabledText = true ; 
  ngOnInit() {
  this.data = [
    {
    'email' :  'saimohit2000@gmail.com',
    'text' : '/home/temporary', 
     } ,
     {
      'email' :  'saimohit2000@gmail.com',
      'text' : '/home/temporary', 
       } ,
       {
        'email' :  'saimohit2000@gmail.com',
        'text' : '/home/temporary', 
         } ,
         {
          'email' :  'saimohit2000@gmail.com',
          'text' : '/home/temporary', 
           }
    ]

    
  }
  toggleDisabled() {
    this.disabledText = !this.disabledText ; 
  }
}
