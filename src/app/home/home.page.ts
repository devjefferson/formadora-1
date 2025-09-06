import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButton, IonAvatar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
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
export class HomePage {

  title:string = 'Cartão de Identificação';
  name:string = 'Jefferson da Fonseca Martins';
  matricula:string = 'COD: 2025-2-PAS23103-CG-ADS0301N';
  constructor(private router: Router) {}


  handleClick() {
      this.router?.navigateByUrl('/about');
  }

  
}
