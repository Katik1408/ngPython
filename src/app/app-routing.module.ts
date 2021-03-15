import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { FirstComponent } from './first/first.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';

const routes: Routes = [
  {
    path: 'basic',
    component: BasicComponent,
  },
  {
    path:'first',
    component:FirstComponent
  },
  {
    path:'reactive',
    component:ReactiveformsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
