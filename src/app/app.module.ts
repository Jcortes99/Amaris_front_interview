import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DataFetcherComponent } from './data-fetcher/data-fetcher.component';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppComponent,
    DataFetcherComponent,
    RouterModule.forRoot(routes)
  ],
  providers: []
})
export class AppModule { }