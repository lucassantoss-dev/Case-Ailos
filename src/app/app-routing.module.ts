import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmissionFormComponent } from './pages/admission-form/admission-form.component';

const routes: Routes = [
  {path: '', component: AdmissionFormComponent},
  {path: 'admission', component: AdmissionFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
