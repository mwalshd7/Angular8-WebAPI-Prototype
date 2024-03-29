import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { NewsComponent } from './news/news.component';
import { TruncateModule } from 'ng2-truncate';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TruncateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
