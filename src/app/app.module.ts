import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { ConnectionComponent } from './component/connection/connection.component';
import { UserDreamsComponent } from './component/user-dreams/user-dreams.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ConnectionComponent,
    UserDreamsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
