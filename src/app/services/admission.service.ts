import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persons } from '../pages/admission-form/persons';

@Injectable({
  providedIn: 'root'
})
export class AdmissionService {

  urlToJson = 'assets/persons.json';

  constructor(public http: HttpClient) { }

  getPersons (cpf: number): Observable<Persons[]> {
    return this.http.get<Persons[]>(`${this.urlToJson}?${cpf}`);
  }
}
