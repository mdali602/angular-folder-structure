import { Routes } from '@angular/router';

export const CONTENT_ROUTES: Routes = [
  {
    path: 'dashboard',
    loadChildren: './modules/home/home.module#HomeModule'
  },
  {
    path: 'about',
    loadChildren: './modules/about/about.module#AboutModule'
  },
  {
    path: 'contact',
    loadChildren: './modules/contact/contact.module#ContactModule'
  },
  {
    path: '',
    loadChildren: './modules/plan/plan.module#PlanModule'
  },
  {
    path: '',
    loadChildren: './modules/plann/plann.module#PlannModule'
  },
  {
    path: '',
    loadChildren: './modules/budget/budget.module#BudgetModule'
  }
  //,
  /* {
    path: '',
    loadChildren: './modules/staff/staff.module#StaffModule'
  }, */
  /* {
    path: '',
    loadChildren: './modules/budget/budget.module#BudgetModule'
  } */
];
