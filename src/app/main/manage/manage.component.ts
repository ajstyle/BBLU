import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { fuseAnimations } from '@fuse/animations';

import { ChatService } from './chat.service';

@Component({
    selector     : 'manage',
    templateUrl  : './manage.component.html',
    styleUrls    : ['./manage.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class ChatComponent implements OnInit, OnDestroy
{
    navbarArray: any ;

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        this.navbarArray = [ {
            link : 'profile' , 
            name : 'Profile'
        } , {
            link : 'email' , 
            name : 'Email-Preferences'
        } , {
            link : 'users' , 
            name : 'Users'
        },
        {
            link : 'channels' , 
            name : 'Channels'
        },
        {
            link : 'billing' , 
            name : 'Billing'
        },{
            link : 'support' , 
            name : 'Support'
        },
        {
            link : 'manageData' , 
            name : 'Manage'
        },
        {
            link : 'signout' , 
            name : 'Sign Out'
        }
    
    ] ; 
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
     
    }
}
