import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { SearchComponent } from './user/search/search.component';
import { CurrentTrainingsComponent } from './user/current-trainings/current-trainings.component';
import { CompletedTrainingComponent } from './user/completed-training/completed-training.component';
import { SkillsComponent } from './user/skills/skills.component';
import { MaintainTrainingsComponent } from './mentor/maintain-trainings/maintain-trainings.component';
import { TrainingHistoryComponent } from './mentor/training-history/training-history.component';
import { AccountsComponent } from './admin/accounts/accounts.component';
import { TechnologiesComponent } from './admin/technologies/technologies.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'users', component: UserComponent },
  { path: 'search', component: SearchComponent },
  { path: 'currentTrainings', component: CurrentTrainingsComponent },
  { path: 'completedTrainings', component: CompletedTrainingComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'maintainTrainings', component: MaintainTrainingsComponent },
  { path: 'trainingHistory', component: TrainingHistoryComponent },
  { path: 'accounts', component: AccountsComponent },
  { path: 'technologies', component: TechnologiesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
