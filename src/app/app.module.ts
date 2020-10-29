import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';

import {GridsterModule} from 'angular-gridster2';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule, } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button' ;
import { MatIconModule} from '@angular/material/icon' ;
import {MatDialogModule} from '@angular/material/dialog';
import { WidgetSettingsComponent } from './components/widget-settings/widget-settings.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { HeaderComponent } from './components/header/header.component';
import { DashboardListComponent } from '../app/modules/dashboard/dashboard-list/dashboard-list.component' ;
import { DashboardCreateComponent } from '../app/modules/dashboard/dashboard-create/dashboard-create.component' ;
import {MatTableModule} from '@angular/material/table';
const routes = [
  // {  id:'list',  }
]

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    WidgetSettingsComponent,
    DashboardListComponent,
    DashboardCreateComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridsterModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatToolbarModule,
    MatMenuModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
