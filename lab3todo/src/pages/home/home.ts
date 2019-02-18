import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  url: string;
  datas:any;
  constructor(public navCtrl: NavController,
    public http: HttpClient) {
  this.url = "http://10.0.11.60/api/gettodo.php";
  }
  ionViewDidLoad(){
    console.log("ionViewDidLoad");
    let header: any =
      new HttpHeaders({
        "Content-Type":"application/json"});
    this.http.post(this.url,"",header).subscribe(
      (data:any)=>{
        console.log("received data from url");
        console.log(data);
        this.datas = data;
      },(error:any)=>{
        console.log("can't load datafrom url");        
      }
    );
    // header("Access-Control-Allow-Origin:*");
    // header("Access-Control-Allow-Methods:POST");
  }

}
