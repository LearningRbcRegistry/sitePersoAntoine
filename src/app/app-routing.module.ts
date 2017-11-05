import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CvComponent} from "./cv/cv.component";
import {PhotosComponent} from "./photos/photos.component";
import {TheatreComponent} from "./theatre/theatre.component";
import {GenealogieComponent} from "./genealogie/genealogie.component";
import {PiwikComponent} from "./piwik/piwik.component";
import {AdminComponent} from "./admin/admin.component";
import {HowtoComponent} from "./howto/howto.component";
import {ContactComponent} from "./contact/contact.component";

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cv', component: CvComponent },
  { path: 'photos', component: PhotosComponent},
  { path: 'theatre', component: TheatreComponent},
  { path: 'genealogie', component: GenealogieComponent},
  { path: 'piwik', component: PiwikComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'howto', component: HowtoComponent},
  { path: 'contact', component: ContactComponent},
  { path: '**', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch:'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
