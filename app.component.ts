import { Component } from '@angular/core';
import { LANGUAGETYPE } from './mock-data';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <label>语言/Language</label>
      <select class="form-control" name="sel" 
        [(ngModel)]="selectedLanguage" 
        (ngModelChange)="updateLanguage($event)">
        <option disabled value="0" class="hideoption">中文/English</option>
        <option *ngFor="let language of languages" [ngValue]="language">
        {{language.name}}
      </option>
      </select>
    <div class="header-bar"></div>
    <nav>
      <a routerLink="/login" routerLinkActive="active">Login</a>
      <a routerLink="/myticket" routerLinkActive="active">Basket</a>
      <a routerLink="/enter" routerLinkActive="active">Enter</a>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/queue" routerLinkActive="active">Queue</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app.component.css']
})
export class AppComponent {
  selectedLanguage:any=0;
  languages=LANGUAGETYPE;
  title = 'Walk In Center';
  updateLanguage(selectedLanguage:any): void {
    console.log(selectedLanguage);
    localStorage.setItem('wic_language', selectedLanguage.id);
    location.reload();
  }
}
