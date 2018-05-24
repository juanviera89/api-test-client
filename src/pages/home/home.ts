import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public http: Http, public navCtrl: NavController) {


    this.probarApi();

  }

  getPartidasByCode(){
    
    return new Promise ((Resolve,reject) => {

      this.http.get("http://192.168.100.14:2509/prueba/gt/1234", JSON.stringify({}))
      .map(res => res.json())
      .subscribe(
        data => {
          console.log(data);
          Resolve(data);
          //resolve(data['planificacion']);
        },
        error => {
          console.log(error);
          reject(error);
        }
      )

    });

  }

  async probarApi(){
    await this.getPartidasByCode();
  }
}
