import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllproductComponent } from './allproduct/allproduct.component';
import { RFormComponent } from './Components/r-form/r-form.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [{ path: 'lazy/courses', loadChildren: () => import('./lazy/courses/courses.module').then(m => m.CoursesModule) },
{path:'rform',component:RFormComponent},{path:'allprod',component:AllproductComponent},{path:'details',component:DetailsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
