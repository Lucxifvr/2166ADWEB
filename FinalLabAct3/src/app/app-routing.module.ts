import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { MenuCComponent } from './menu-c/menu-c.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  {path: 'menu', component: MenuComponent},
  {path: 'menu-c', component: MenuCComponent},
  {path: 'add', component: AddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
