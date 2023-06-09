import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './service/auth.guard';

@NgModule({
  declarations: [AppComponent],

  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
