import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BudgetComponent } from './pages/budget/budget.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'budget',
        component: BudgetComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudgetRoutingModule { }
