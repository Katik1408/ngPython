import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { FirstComponent } from './first/first.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ParentComponent } from 'src/app/parent/parent.component';
import { SiblingComponent } from './sibling/sibling.component';
const routes: Routes = [
  {
    path: 'basic',
    component: BasicComponent,
  },
  {
    path: 'first',
    component: FirstComponent,
  },
  {
    path: 'reactive',
    component: ReactiveformsComponent,
  },
  {
    path: 'template',
    component: TemplateDrivenComponent,
  },
  {
    path: 'parent',
    component: ParentComponent,
  },
  {
    path: 'sibling',
    component: SiblingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
