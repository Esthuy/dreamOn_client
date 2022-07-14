import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { ConnectionComponent } from './component/connection/connection.component';
import { UserDreamsComponent } from './component/user-dreams/user-dreams.component';
import { CreateAccountComponent } from './component/connection/create-account/create-account.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './component/connection/login/login.component';
import { httpInterceptorProviders } from './interceptor';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { DisplayOneDreamComponent } from './component/display-one-dream/display-one-dream.component';
registerLocaleData(localeFr);


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ConnectionComponent,
    UserDreamsComponent,
    CreateAccountComponent,
    LoginComponent,
    DisplayOneDreamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    ReactiveFormsModule, 
    HttpClientModule ,
    BrowserModule,        
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    httpInterceptorProviders, 
],
  bootstrap: [AppComponent]
})
export class AppModule { }

