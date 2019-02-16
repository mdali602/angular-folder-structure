import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared';
import { BudgetRoutingModule } from './budget-routing.module';
import { BudgetComponent } from './pages/budget/budget.component';

@NgModule({
  declarations: [BudgetComponent],
  imports: [
    CommonModule,
    SharedModule,
    BudgetRoutingModule
  ]
})
export class BudgetModule { }
