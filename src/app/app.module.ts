import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './Components/contact/contact.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { HeaderComponent } from './Components/header/header.component';
import { AboutComponent } from './Components/about/about.component';
import { TitleComponent } from './Components/title/title.component';
import { PortfolioComponent } from './Components/portfolio/portfolio.component';
import { CopyRightsComponent } from './Components/copy-rights/copy-rights.component';
import { TitleLightComponent } from './Components/title-light/title-light.component';
import { ScrollTopComponent } from './Components/scroll-top/scroll-top.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    FooterComponent,
    NavBarComponent,
    HeaderComponent,
    AboutComponent,
    TitleComponent,
    PortfolioComponent,
    CopyRightsComponent,
    TitleLightComponent,
    ScrollTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
