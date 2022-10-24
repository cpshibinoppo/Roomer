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
import { HotalcardComponent } from './layout/hotalcard/hotalcard.component';
import { HotalcardlistComponent } from './pages/hotalcardlist/hotalcardlist.component';
import { HomefooterComponent } from './layout/homefooter/homefooter.component';
import { PhhomefooterComponent } from './layout/phhomefooter/phhomefooter.component';
import { HotaldetailComponent } from './pages/hotaldetail/hotaldetail.component';
import { ReviewsComponent } from './layout/reviews/reviews.component';
import { ReiewscardComponent } from './layout/reiewscard/reiewscard.component';
import { MappageComponent } from './layout/map/mappage/mappage.component';
import { MapcomComponent } from './layout/map/mapcom/mapcom.component';
import { ThingsComponent } from './layout/things/things.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LogoinandsighupComponent,
    SubnavbarComponent,
    FilterpopComponent,
    PhnavbarpopupComponent,
    HotalcardComponent,
    HotalcardlistComponent,
    HomefooterComponent,
    PhhomefooterComponent,
    HotaldetailComponent,
    ReviewsComponent,
    ReiewscardComponent,
    MappageComponent,
    MapcomComponent,
    ThingsComponent,
    FooterComponent
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
