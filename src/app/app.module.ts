import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbAlertModule, NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TopBarComponent } from './wizard/top-bar/top-bar.component';
import { ContentComponent } from './wizard/content/content.component';
import { NavigationComponent } from './wizard/navigation/navigation.component';
import { WizardComponent } from './wizard/wizard.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ContentComponent,
    NavigationComponent,
    WizardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbCarouselModule,
    NgbAlertModule,
    NgbModule
  ],
  exports: [
    TopBarComponent,
    ContentComponent,
    NavigationComponent,
    WizardComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
