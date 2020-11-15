import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPagePageModule } from './Authentication/login-page/login-page.module';
import { LoginPagePage } from './Authentication/login-page/login-page.page';
import { ContainerPage } from './container-page/container-page.page';
// import { LoginPagePageModule } from './Authentication/login-page/login-page.module';
// import { LoginPagePage } from './Authentication/login-page/login-page.page';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'expenseManagement',
    pathMatch: 'full'
  },
  {
    path: 'expenseManagement',
    component: ContainerPage
  },
  {
    path: 'expenseManagement/login',
    // loadChildren: () => import('./login-page/login-page.module').then( m => m.LoginPagePageModule)
    component: LoginPagePage
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
