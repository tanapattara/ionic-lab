import { Component } from "@angular/core";
import { Camera, CameraOptions } from "@ionic-native/Camera/ngx";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  myPhoto: any;
  constructor(private camera: Camera) {}
  takePhoto() {
    const option: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(option).then(
      imageData => {
        this.myPhoto = "data:image/jpeg;base64," + imageData;
      },
      err => {
        //
      }
    );
  }
}
