import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

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
import { Form2Component } from './layout/hostform/form2/form2.component';
import { Form3Component } from './layout/hostform/form3/form3.component';
import { Form4Component } from './layout/hostform/form4/form4.component';
import { Form5Component } from './layout/hostform/form5/form5.component';
import { Form6Component } from './layout/hostform/form6/form6.component';
import { Form7Component } from './layout/hostform/form7/form7.component';
import { Form1Component } from './layout/hostform/form1/form1.component';
import { Form8Component } from './layout/hostform/form8/form8.component';
import { Form9Component } from './layout/hostform/form9/form9.component';
import { Form10Component } from './layout/hostform/form10/form10.component';
import { Form11Component } from './layout/hostform/form11/form11.component';
import { Form12Component } from './layout/hostform/form12/form12.component';
import { Form13Component } from './layout/hostform/form13/form13.component';
import { BookingComponent } from './layout/booking/booking.component';

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
    Form2Component,
    Form3Component,
    Form4Component,
    Form5Component,
    Form6Component,
    Form7Component,
    Form1Component,
    Form8Component,
    Form9Component,
    Form10Component,
    Form11Component,
    Form12Component,
    Form13Component,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
