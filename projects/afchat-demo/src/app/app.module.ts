import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AfchatModule } from 'afchat';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AfchatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
