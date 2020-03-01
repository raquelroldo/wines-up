import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WineListComponent } from './wine-list/wine-list.component';
import { WineDetailComponent } from './wine-list/wine-detail/wine-detail.component';
import { AddWineFormComponent } from './add-wine-form/add-wine-form.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'wines', component: WineListComponent},
  {path: 'wine/:id', component: WineDetailComponent},
  {path: 'create', component: AddWineFormComponent},
  {path: 'edit/:id', component: AddWineFormComponent},
  {path: '**', component: ErrorComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
