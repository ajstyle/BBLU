import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
  
            {
                id       : 'sample',
                title    : 'Message',
                translate: 'Message',
                type     : 'item',
                icon     : 'email',
                url      : '/message'
                // badge    : {
                //     title    : '25',
                //     translate: 'NAV.SAMPLE.BADGE',
                //     bg       : '#F44336',
                //     fg       : '#FFFFFF'
                // }
            },
            {
                id       : 'Files',
                title    : 'Files',
                translate: 'Files',
                type     : 'item',
                icon     : 'folder',
                url      : '/files'
                // badge    : {
                //     title    : '25',
                //     translate: 'NAV.SAMPLE.BADGE',
                //     bg       : '#F44336',
                //     fg       : '#FFFFFF'
                // }
            },
            {
                id       : 'Files',
                title    : 'Files',
                translate: 'Manage',
                type     : 'item',
                icon     : 'person',
                url      : '/manage'
                // badge    : {
                //     title    : '25',
                //     translate: 'NAV.SAMPLE.BADGE',
                //     bg       : '#F44336',
                //     fg       : '#FFFFFF'
                // }
            }
        ];
