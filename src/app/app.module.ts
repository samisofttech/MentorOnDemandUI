import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { SearchComponent } from './user/search/search.component';
import { CurrentTrainingsComponent } from './user/current-trainings/current-trainings.component';
import { CompletedTrainingComponent } from './user/completed-training/completed-training.component';
import { AdminComponent } from './admin/admin.component';
import { MentorComponent } from './mentor/mentor.component';
import { TechnologiesComponent } from './admin/technologies/technologies.component';
import { AccountsComponent } from './admin/accounts/accounts.component';
import { TrainingHistoryComponent } from './mentor/training-history/training-history.component';
import { MaintainTrainingsComponent } from './mentor/maintain-trainings/maintain-trainings.component';
import { SkillsComponent } from './user/skills/skills.component';
import { ServiceService } from './services/service.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    SearchComponent,
    CurrentTrainingsComponent,
    CompletedTrainingComponent,
    AdminComponent,
    MentorComponent,
    TechnologiesComponent,
    AccountsComponent,
    TrainingHistoryComponent,
    MaintainTrainingsComponent,
    SkillsComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }