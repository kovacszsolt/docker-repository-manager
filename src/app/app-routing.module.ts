import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppImageListComponent} from './view/image-list/image-list.component';
import {AppTagListComponent} from './view/tag-list/tag-list.component';
import {AppTagInfoComponent} from './view/tag-info/tag-info.component';
import {AppInformationComponent} from './view/information/information.component';
import {AppErrorComponent} from './view/error/error.component';


const routes: Routes = [
  {path: '', component: AppImageListComponent},
  {path: 'information', component: AppInformationComponent},
  {path: 'error/:code', component: AppErrorComponent},
  {path: ':imageName', component: AppTagListComponent},
  {path: ':imageName/:tagName', component: AppTagInfoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
