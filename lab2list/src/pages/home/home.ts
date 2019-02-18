import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items:any;
  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController) {
    this.initializeItems();
  }
  itemSelected(item){
    console.log(item);
    let modal = this.modalCtrl.create(ProfilePage,
                  {selecteditem: item});
    modal.onDidDismiss((item)=>{
      if(item){
        console.log(item);
      }
    });
    modal.present();
    // this.navCtrl.push(ProfilePage,{selecteditem: item});
  }
  initializeItems() {
    this.items = [
      {id:'593410002-7',name:'นายชยังกูร โตนา',radio:'go'},
      {id:'593410036-0',name:'นางสาวจารุชา คณะศิริวงค์',radio:'rust'},
      {id:'593410038-6',name:'นายฉัตรชัย ประธรรมเต',radio:'python'},
      {id:'593410041-7',name:'นายโชคชัย ชะคู',radio:'rust'},
      {id:'593410045-9',name:'นางสาวทัศนีย์ คุณเมือง',radio:'rust'},
      {id:'593410048-3',name:'นางสาวธัญญลักษณ์ ทองเที่ยง',radio:'rust'},
      {id:'593410051-4',name:'นายนพัทธ์ ศรีจันทพงศ์',radio:'rust'},
      {id:'593410053-0',name:'นางสาวนุชวรา เพ็ชรกิ่ง',radio:'rust'},
      {id:'593410055-6',name:'นายแผ่นดินทอง ถุงแก้ว',radio:'rust'},
      {id:'593410056-4',name:'นายพงศธร กิตติเคนา',radio:'rust'},
      {id:'593410057-2',name:'นางสาวภัสนภา มีรัตน์',radio:'rust'},
      {id:'593410061-1',name:'นางสาวเพียงนภา อุชชิน',radio:'rust'},
      {id:'593410067-9',name:'นางสาววราภรณ์ ภูมิทัศน์',radio:'rust'},
      {id:'593410076-8',name:'นายศิริชัย อุลมาร',radio:'rust'},
      {id:'593410078-4',name:'นายสิทธิโชค ฟุ้งเจนโชคเจริญ',radio:'rust'},
      {id:'593410080-7',name:'นางสาวสุธิดา แสนศรี',radio:'rust'},
      {id:'593410086-5',name:'นางสาวอักษราภัค มีแสง',radio:'rust'},
      {id:'593410091-2',name:'นายเอกรัตน์ จันทร์อุบ',radio:'rust'},
      {id:'593410239-6',name:'นางสาวประภาพร สุนทรพิช',radio:'rust'},
      {id:'593410240-1',name:'นางสาวพรนัชชา ธนโรชากุล',radio:'rust'},
      {id:'593410269-7',name:'นางสาวจันทิมา เยาวรัตน์',radio:'rust'},
      {id:'593410270-2',name:'นางสาวจิรนุช สิงห์อินทร์',radio:'rust'},
      {id:'593410273-6',name:'นายพรเทพ จันทร์เวช',radio:'rust'},
      {id:'593410274-4',name:'นางสาวอัญชลีพร จันทร์สุเทพ',radio:'rust'},
      {id:'593410301-7',name:'นายกรวิชญ์ เหมือนตา',radio:'rust'},
      {id:'593410302-5',name:'นางสาวกิตติยา วรีฤทธิ์',radio:'rust'},
      {id:'593410304-1',name:'นางสาวชลรัตน์ มาทา',radio:'rust'},
      {id:'593410306-7',name:'นางสาวรัชนีกร คร่อมชัยภูมิ',radio:'rust'},
      {id:'593410308-3',name:'นางสาวอาริสา ผดุงศรี',radio:'rust'},
      {id:'593410351-2',name:'นายธนพล เสนารักษ์',radio:'rust'},
      {id:'593410356-2',name:'นางสาวปวีณา นาสูงชน',radio:'rust'}
    ];
  }

  getItems(ev: any) {
    this.initializeItems();
    const val = ev.target.value;
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1     );
      })
    }
  }
  
  

}
