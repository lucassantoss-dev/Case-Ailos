import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdmissionService } from 'src/app/services/admission.service';
import { AlertService } from 'src/app/services/alert.service';
import { Persons } from './persons';

@Component({
  selector: 'app-admission-form',
  templateUrl: './admission-form.component.html',
  styleUrls: ['./admission-form.component.scss']
})
export class AdmissionFormComponent {
  card = false;
  admissionForm!: FormGroup;
  persons!: any[];
  person: any;

  constructor(
    private formBuilder: FormBuilder, 
    private alertService: AlertService, 
    private admissionService: AdmissionService) {
    this.admissionForm = this.formBuilder.group({
      cpf: ['', Validators.required]
    })
  }

  createAdmission() {
    this.alertService.info('Atenção', 'Página ainda não desenvolvida!');
  }


  searchCPF() {
    if(!this.admissionForm.valid) {
      this.alertService.info('Atenção', 'Necessário digitar o CPF');
      return
    }
    this.admissionService.getPersons(this.admissionForm.value)
    .subscribe(res => {
      let person = res.filter(p => p.cpf === this.person);
      this.persons = person;
      if(this.persons.length < 1) {
        this.alertService.info('Atenção', 'CPF não existe na base');
        this.card = false;
      } else {
        this.card = true;
      }
    })
  }

}
