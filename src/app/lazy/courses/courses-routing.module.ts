import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [{ path: '', component: CoursesComponent ,children:[{path:'list',component:ListComponent}]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { 
  constructor(){
    console.log('courses works');
    
  }
}
