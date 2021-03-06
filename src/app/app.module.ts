import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.route';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { SetupComponent } from './components/setup/setup.component';
import { GameComponent } from './components/game/game.component';

import { StorageService } from './servives/storage.service';

@NgModule({
  declarations: [
    AppComponent,
    SetupComponent,
    IntroductionComponent,
    GameComponent,
    HeaderComponent
  ],
  imports: [
    AppRoutes,
    BrowserModule,
    FormsModule
  ],
  providers: [
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
