import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import {
    MatButtonModule, MatCardModule, MatFormFieldModule,
     MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatDividerModule, 
     MatRadioModule, MatTabsModule, MatSidenavModule, MatToolbarModule, MatTableModule, 
     MatSelectModule , MatSlideToggleModule, MatCheckboxModule, MatDialogModule
} from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';

import { ChatService } from './chat.service';
import { ChatComponent } from './manage.component';

import { ProfileComponent } from './profile/profile.component';
import { EmailComponent } from './email/email.component';
import { UsersComponent } from './users/users.component';
import { ChannelsComponent } from './channels/channels.component';
import { BillingComponent } from './billing/billing.component';
import { SupportComponent } from './support/support.component';
import { ManageComponent } from './manage/manage.component';
import { SignoutComponent } from './signout/signout.component';
import { BasicDetailComponent } from './profile/basic-detail/basic-detail.component';
import { DriveIntegrationComponent } from './profile/drive-integration/drive-integration.component';
import { WorkComponent } from './profile/work/work.component';
import { AddnewusersComponent } from './dialogs/addnewusers/addnewusers.component';
import { ExportsComponent } from './dialogs/exports/exports.component';
import { MessageComponent } from './dialogs/message/message.component';
import { InviteEmployersComponent } from './dialogs/invite-employers/invite-employers.component';
import { AddingChannelComponent } from './dialogs/adding-channel/adding-channel.component';
import { InviteComponent } from './dialogs/invite/invite.component';
import { ForwardComponent } from './dialogs/forward/forward.component';
import { TagInputModule } from 'ngx-chips';
import {MatStepperModule} from '@angular/material/stepper';
import { ChannnelUsersComponent } from './dialogs/channnel-users/channnel-users.component';


const routes: Routes = [
    {
        path: 'manage',
        component: ChatComponent,  
        children: [ 
            {
                path: '',
                redirectTo: 'profile',  
                pathMatch: 'full',   
                
                resolve: {
                    chat: ChatService
                }
            },
            {
                path: 'profile',
                component: ProfileComponent,  
                children: [],   
                
                resolve: {
                    chat: ChatService
                }
            },
            {
                path: 'email',
                component: EmailComponent,  
                children: [],
                
                resolve: {
                    chat: ChatService
                }
            },
            {
                path: 'users',
                component: UsersComponent,  
                children: [],
                
                resolve: {
                    chat: ChatService
                }
            },
            {
                path: 'channels',
                component: ChannelsComponent,  
                children: [],
                
                resolve: {
                    chat: ChatService
                }
            },
            {
                path: 'billing',
                component: BillingComponent,  
                children: [],
                
                resolve: {
                    chat: ChatService
                }
            },
            {
                path: 'support',
                component: SupportComponent,  
                children: [],
                
                resolve: {
                    chat: ChatService
                }
            },
            {
                path: 'manageData',
                component: ManageComponent,  
                children: [],
                
                resolve: {
                    chat: ChatService
                }
            },

            {
                path: 'signout',
                component: SignoutComponent,  
                children: [],
                
                resolve: {
                    chat: ChatService
                }
            },


        ],
        
        resolve: {
            chat: ChatService
        }
    },
   
];

@NgModule({
    declarations: [
        ChatComponent,
        ProfileComponent,
        EmailComponent,
        UsersComponent,
        ChannelsComponent,
        BillingComponent,
        SupportComponent,
        ManageComponent,
        SignoutComponent,
        BasicDetailComponent,
        DriveIntegrationComponent,
        WorkComponent,
        AddnewusersComponent,
        ExportsComponent,
        MessageComponent,
        InviteEmployersComponent,
        AddingChannelComponent,
        InviteComponent,
        ForwardComponent,
        ChannnelUsersComponent,
    ],
    imports     : [
        RouterModule.forChild(routes),
        MatTableModule,
        AngularFontAwesomeModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatRadioModule,
        MatSidenavModule,
        MatToolbarModule,
        MatTabsModule,
        MatDividerModule,
        MatSlideToggleModule,
        FuseSharedModule,
        MatSelectModule,
        MatCheckboxModule,
        MatDialogModule,
        TagInputModule,
        MatStepperModule
    ],
    providers   : [
        ChatService
    ],
    entryComponents : [
        AddingChannelComponent,
        AddnewusersComponent,
        ExportsComponent,
        MessageComponent,
        InviteEmployersComponent,
        InviteComponent,
        ForwardComponent,
        ChannnelUsersComponent
    ]
   
})
export class ManageModule
{
}
