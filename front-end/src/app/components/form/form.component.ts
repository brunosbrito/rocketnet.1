import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  apiUrl: string = '';
  id: number = 0
  plan: any[] = []
  name: string = '';
  email: string = '';
  tel: string = '';

  constructor(
    private sharedService: SharedService,
    private http: HttpClient,
    private route: Router
    ) {
    this.apiUrl = 'http://localhost:3002'
  }

 ngOnInit() {
    this.id = this.sharedService.dadosCompartilhados;
    console.log('id',this.id)
    this.http.get(`${this.apiUrl}/plans/${10}`)
      .subscribe({
        next: (data: any) => {
          this.plan.push(data);
        },
        error: () => alert('Plano não encotrado'),
        complete: () => console.log('Plano ok')
      })
  }

  changePlan() {
    this.route.navigate([''])
  }

  createClient() {
    const body = { 
      name: this.name,
      email: this.email,
      tel: this.tel,
      plan_id: 2
    }

    this.http.post(`${this.apiUrl}/clients`, body).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.error(error)
    })
  }
}
