import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { LogoinandsighupComponent } from './pages/logoinandsighup/logoinandsighup.component';
import { SubnavbarComponent } from './layout/subnavbar/subnavbar.component';
import { SwiperModule } from 'swiper/angular';
import { FilterpopComponent } from './pages/filterpop/filterpop.component';
import { PhnavbarpopupComponent } from './layout/phnavbarpopup/phnavbarpopup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LogoinandsighupComponent,
    SubnavbarComponent,
    FilterpopComponent,
    PhnavbarpopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
