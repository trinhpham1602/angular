import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardModule } from '../dashboard/dashboard.module';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [CommonModule, DashboardModule],
  exports: [LoginPageComponent],
})
export class LoginModule {}
