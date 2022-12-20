import { HostComponent } from './pages/host/host.component';
import { HostindroducionComponent } from './pages/hostindroducion/hostindroducion.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { NavbarComponent } from './layout/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { HotaldetailComponent } from './pages/hotaldetail/hotaldetail.component';
import { BookingComponent } from './pages/booking/booking.component';
import { UserComponent } from './pages/user/user.component';
import { WishlistsComponent } from './pages/wishlists/wishlists.component';
import { PersonalinfoComponent } from './layout/userdetails/personalinfo/personalinfo.component';
import { ShowmoreimgComponent } from './layout/showmoreimg/showmoreimg.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: 'home', component: HomeComponent },
  { path: 'hotel', component: HotaldetailComponent, data: { test: true } },
  { path: 'Hostindroducion', component: HostindroducionComponent },
  { path: 'Host', component: HostComponent },
  { path: 'booking', component: BookingComponent, data: { test: false } },
  { path: 'user', component: UserComponent, data: { usernav: true } },
  { path: 'wishlists', component: WishlistsComponent, data: { usernav: true } },
  { path: 'userinfo', component: PersonalinfoComponent, data: { usernav: true } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
