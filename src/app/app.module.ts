import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { ConnectionComponent } from './component/connection/connection.component';
import { UserDreamsComponent } from './component/user-dreams/user-dreams.component';
import { CreateAccountComponent } from './component/connection/create-account/create-account.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './component/connection/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ConnectionComponent,
    UserDreamsComponent,
    CreateAccountComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    ReactiveFormsModule, 
    HttpClientModule , 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
