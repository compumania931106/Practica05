import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private user: any;

  constructor(public navCtrl: NavController) {
    this.user = {
      date:"17/09/1988"
    };
  }

}


// DD/LL/AA y retornara 17/SEP/89.
// Si le pone AA/MM/DD = 89/09/17
// Si le pone AAAA/LL/DD = 1984/SEP/17
// Si le pone DD/LL/AAAA = 17/SEP/1984 