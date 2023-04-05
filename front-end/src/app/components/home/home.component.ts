import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  cep: string = '';
  apiUrl: string;
  dataPlans: any;
  planId: number;

  constructor(
    private http: HttpClient,
    private router: Router,
    private sharedService: SharedService
  ){
    this.planId = 0;
    this.apiUrl = 'http://localhost:3002';
  }

  verifyCep(): any {
    this.http.get(`${this.apiUrl}/coverage/${this.cep}`)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.getAllPlans();
        },
        error: () => alert('Cep não encontrado'),
        complete: () => alert('Cep Encontrado')
      })
  }

  getAllPlans() {
    this.http.get(`${this.apiUrl}/plans`)
      .subscribe({
        next: (data) => this.dataPlans = data,
        error: () => alert('Erro na requisção dos planos'),
        complete: () => console.log('Requisição completa')
      })
  }

  getId(planId: number) {
    this.planId = planId;
    this.sendData()
    this.router.navigate(['/forms'])
  }

  sendData() {
    this.sharedService.sharedData = this.planId
  }
}
