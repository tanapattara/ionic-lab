import { Component } from '@angular/core';
import { ViewController, IonicPage, NavController, NavParams} from 'ionic-angular';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  selecteditem:any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public view: ViewController) {
    this.selecteditem = navParams.get('selecteditem');
    console.log(this.selecteditem);
  }
  close(){
    this.view.dismiss(this.selecteditem);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
