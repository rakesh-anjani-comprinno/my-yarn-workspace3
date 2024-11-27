import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MyLibraryBComponent } from "@my-yarn-workspace3/my-library-b";

export const routes: Routes = [
    {
        path: '',
        component:AppComponent,
        pathMatch:'full'
    },
    {
        path:'products',
        loadComponent: () => import('@my-yarn-workspace3/my-library-b').then((m)=>m.MyLibraryBComponent),
    }
];
