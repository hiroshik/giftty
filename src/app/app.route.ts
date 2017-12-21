import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SetupComponent} from "./components/setup/setup.component";


export const router: Routes = [
  { path: 'setup', component: SetupComponent},
  // All other pages will redirect to setup
  { path: '**', redirectTo: 'setup' }

];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(router);
