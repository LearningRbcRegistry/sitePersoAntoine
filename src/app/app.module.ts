import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CvComponent } from './cv/cv.component';
import { PhotosComponent } from './photos/photos.component';
import { ContactComponent } from './contact/contact.component';
import { TheatreComponent } from './theatre/theatre.component';
import { GenealogieComponent } from './genealogie/genealogie.component';
import { PiwikComponent } from './piwik/piwik.component';
import { AdminComponent } from './admin/admin.component';
import { HowtoComponent } from './howto/howto.component';
import { PageNotFoundComponent } from './page-not-found-component/page-not-found-component.component';
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from "./app-routing.module";
import { AgmCoreModule } from '@agm/core';
import { MapsComponent } from './maps/maps.component';
import { FormsModule }   from '@angular/forms';
import {EmailService} from "./services/email-service.service";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CvComponent,
    PhotosComponent,
    ContactComponent,
    TheatreComponent,
    GenealogieComponent,
    PiwikComponent,
    AdminComponent,
    HowtoComponent,
    PageNotFoundComponent,
    HomeComponent,
    MapsComponent
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    AgmCoreModule.forRoot({apiKey:'AIzaSyDlRWPImnPxyYjMEXiSMLWbqydHL8Usfs8'})
  ],
  providers: [EmailService],
  bootstrap: [AppComponent]
})
export class AppModule {


}
