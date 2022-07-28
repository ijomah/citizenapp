import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { BlogApiService } from './blog-api.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RemoveParagraphTagPipe } from './remove-paragraph-tag.pipe';


@NgModule({
  declarations: [AppComponent, RemoveParagraphTagPipe],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, BlogApiService],
  bootstrap: [AppComponent],
  
})
export class AppModule {}
