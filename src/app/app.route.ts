import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SetupComponent} from "./components/setup/setup.component";
import {GameComponent} from "./components/game/game.component";
import {IntroductionComponent} from "./components/introduction/introduction.component";


export const router: Routes = [
  { path: 'setup', component: SetupComponent},
  { path: 'game', component: GameComponent},
  { path: 'introduction', component: IntroductionComponent},
  // All other pages will redirect to setup
  { path: '**', redirectTo: 'introduction' }

];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(router);
