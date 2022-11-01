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
import { HostComponent } from './pages/host/host.component';
import { HostindroducionComponent } from './pages/hostindroducion/hostindroducion.component';
import { From1Component } from './layout/hostform/from1/from1.component';
import { Form2Component } from './layout/hostform/form2/form2.component';
import { Form3Component } from './layout/hostform/form3/form3.component';
import { Form4Component } from './layout/hostform/form4/form4.component';
import { Form5Component } from './layout/hostform/form5/form5.component';
import { Form6Component } from './layout/hostform/form6/form6.component';

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
    FooterComponent,
    HostComponent,
    HostindroducionComponent,
    From1Component,
    Form2Component,
    Form3Component,
    Form4Component,
    Form5Component,
    Form6Component
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
