import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
/**
 * Generated class for the NewtransactionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-newtransaction',
  templateUrl: 'newtransaction.html',
})
export class NewtransactionPage {
  userpayment:any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public http: HttpClient) {
      this.userpayment = 100;
  }
  adddata(){
    let url = 'http://10.0.11.60/api/newpayment.php';
    let data = {
      payment: this.userpayment,
      type: "food"
    };   
    let header:any = new HttpHeaders(
      {"Content-Type":"application/json"}
    ); 
    this.http.post(url,JSON.stringify(data),header)
      .subscribe();
  }

}
