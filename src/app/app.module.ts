import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgxJsonViewerModule} from 'ngx-json-viewer';
import {AppImageListComponent} from './view/image-list/image-list.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {AppTagListComponent} from './view/tag-list/tag-list.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {AppTagInfoComponent} from './view/tag-info/tag-info.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {SizePipe} from './pipes/size.pipe';
import {MatCardModule} from '@angular/material/card';
import {AppYesNoComponent} from './view/yes-no/yes-no.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatMenuModule} from '@angular/material/menu';
import {AppInformationComponent} from './view/information/information.component';
import {AppMainInterceptor} from './interceptor/main.interceptor';
import {AppErrorComponent} from './view/error/error.component';
import {AppLoadingComponent} from './components/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    AppTagInfoComponent,
    AppImageListComponent,
    AppTagListComponent,
    AppYesNoComponent,
    SizePipe,
    AppInformationComponent,
    AppErrorComponent,
    AppLoadingComponent
  ],
  imports: [
    MatTableModule,
    MatSnackBarModule,
    NgxJsonViewerModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    ScrollingModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatDialogModule,
    MatTooltipModule,
    MatMenuModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AppMainInterceptor, multi: true},
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 5000}},
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2000}},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
