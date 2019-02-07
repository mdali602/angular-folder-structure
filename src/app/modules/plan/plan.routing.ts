import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { ProjectResolver } from './project-resolver.service';
import { PlanComponent } from '@app/modules/plan/pages/plan.component';
// import { ProjectDetailsComponent } from './pages/project-details/project-details.component';

export const routes: Routes = [
    {
      path: '',
      children: [
        {
          path: 'plan',
          component: PlanComponent
        }
      ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PlanRoutingModule { }
