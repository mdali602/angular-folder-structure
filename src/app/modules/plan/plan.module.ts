import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { PlanComponent } from '@app/modules/plan/pages/plan/plan.component';
import { PlanRoutingModule } from './plan.routing';
import { SharedModule } from '@app/shared';
@NgModule({
  declarations: [PlanComponent],
  imports: [
    // CommonModule,
    SharedModule,
    PlanRoutingModule
  ]
})
export class PlanModule { }
