import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DataFetcherComponent } from './data-fetcher.component'; // Tu componente

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppComponent,
    DataFetcherComponent
  ],
  providers: []
})
export class AppModule { }
