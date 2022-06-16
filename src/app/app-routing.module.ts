import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectionComponent } from './component/connection/connection.component';
import { DisplayOneDreamComponent } from './component/display-one-dream/display-one-dream.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { UserDreamsComponent } from './component/user-dreams/user-dreams.component';

const routes: Routes = [
  { path:"", redirectTo:"homepage", pathMatch:'full' }, 
  { path:"homepage", component: HomepageComponent }, 
  { path:"dreams", component: UserDreamsComponent},
  { path:"connection", component: ConnectionComponent},
  { path:"dream/:id", component: DisplayOneDreamComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
