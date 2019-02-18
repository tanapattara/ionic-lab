import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewtransactionPage } from './newtransaction';

@NgModule({
  declarations: [
    NewtransactionPage,
  ],
  imports: [
    IonicPageModule.forChild(NewtransactionPage),
  ],
})
export class NewtransactionPageModule {}
