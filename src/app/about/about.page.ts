import { Component } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButton, IonAvatar } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
  standalone: true,
  imports: [
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent,
    IonCard, 
    IonCardHeader, 
    IonCardTitle, 
    IonCardSubtitle, 
    IonButton, 
    IonAvatar
  ],
})
export class AboutPage {

  constructor(private router: Router) { }
  title:string = 'Sobre';
  name:string = 'Jefferson da Fonseca Martins';
  description:string = 'Sou estudante do 4º período do curso de Análise e Desenvolvimento de Sistemas (ADS) na UNISUAM.';

  handleClick() {
    this.router?.navigateByUrl('/home');
  }

}
