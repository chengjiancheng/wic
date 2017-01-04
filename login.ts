import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { HeroService } from './hero.service';
import { LOGINPAGE } from './page-login';
// import { contentHeaders } from '../common/headers';

@Component({
  selector: 'login',
  templateUrl: 'app/login.html',
  styleUrls: [ 'app/login.css' ]
})
export class Login implements OnInit{
  page=LOGINPAGE.find(page=>page.id == 1);

  constructor(public router: Router, public http: Http) {
  }


  ngOnInit(): void {
    if(localStorage.getItem('wic_language') ){
      let languageid=localStorage.getItem('wic_language');
      this.page=LOGINPAGE.find(page=>page.id == languageid);
    }
  }

  login(event: any, employee:string, email:string) {
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