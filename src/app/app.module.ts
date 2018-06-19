import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DataService }  from '../service/service';
import { RouterModule, Routes}  from '@angular/router';
import { HttpModule } from '@angular/http';
import { GetService } from '../pages/getservice/getservice'

import {Home} from '../pages/home/home';

import {ShowData} from '../pages/showdata/showdata';

const appRoutes: Routes = [
  { path : 'home',component : Home},
    { path : 'showdata/:id',component : ShowData},
      { path : 'getservice',component : GetService},

];

const baseURL = 'https://jsonplaceholder.typicode.com/';


@NgModule({
  declarations: [
    AppComponent,
    Home,
    ShowData,
    GetService,

  ],
  exports: [RouterModule],

    imports: [
      BrowserModule,
      HttpModule,

      RouterModule.forRoot(appRoutes)


    ],
  providers: [DataService , { provide: 'baseURL', useValue: baseURL }],
  bootstrap: [AppComponent]
})
export class AppModule { }
