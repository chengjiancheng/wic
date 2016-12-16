import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { HeroService } from './hero.service';
// import { contentHeaders } from '../common/headers';

@Component({
  selector: 'enter',
  templateUrl: 'app/enter.component.html',
  styleUrls: [ 'app/enter.component.css' ]
})
export class EnterComponent {
  constructor(public router: Router, public http: Http) {
  }

  enter(event: any, employee:string, email:string) {
    event.preventDefault();
    let body = JSON.stringify({ employee, email });
    localStorage.setItem('id_token', body);
    console.log(localStorage.getItem('id_token'));
    this.router.navigate(['myticket']);
    // this.http.post('http://localhost:3001/sessions/create', body, { headers: contentHeaders })
    //   .subscribe(
    //     response => {
    //       localStorage.setItem('id_token', response.json().id_token);
    //       this.router.navigate(['home']);
    //     },
    //     error => {
    //       alert(error.text());
    //       console.log(error.text());
    //     }
    //   );
  }

  signup(event: any) {
    event.preventDefault();
    this.router.navigate(['signup']);
  }
}