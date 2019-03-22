import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';

import { FilesComponent } from './files.component';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import { PersonComponent } from './person/person.component';
import { ChannelComponent } from './channel/channel.component';
import { MyfilesComponent } from './myfiles/myfiles.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

const routes = [
    {
        path     : 'files',
        component: FilesComponent
    }
];

@NgModule({
    declarations: [
        FilesComponent,
        PersonComponent,
        ChannelComponent,
        MyfilesComponent
        ],
    imports     : [
        RouterModule.forChild(routes),
        MatCheckboxModule,
        TranslateModule,
        MatTableModule,
        FuseSharedModule,
        MatIconModule,
        MatTabsModule,
        MatButtonModule,
        MatSlideToggleModule
    ],
    exports     : [
        FilesComponent
    ]
})

export class FilesModule
{
}
