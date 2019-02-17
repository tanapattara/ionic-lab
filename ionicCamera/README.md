# Ionic Native Lab - Camera

## Installation

```bash
ionic start ionicCamera blank
```

## add platform to project

```bash
ionic cordova platform add android
```

## Add plugin to the project

```bash
ionic cordova plugin add cordova-plugin-camera
npm install --save @ionic-native/camera
```

## import to project

in `src/app/app.module.ts` import module

```typescript
import { Camera } from "@ionic-native/Camera/ngx";
```

and add to @NgModule

```typescript
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent]
})
```

## add to page

`home.page.ts`

```typescript
import { Camera, CameraOptions } from "@ionic-native/Camera/ngx";
```

create constructor

```typescript
constructor(private camera: Camera) {}
```

create takePhoto() method

```typescript
myPhoto: any;
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
        //handler error
      }
    );
  }
```

create button to call takePhoto() at `home.page.html`

```html
<ion-button (click)="takePhoto()">Take Photo</ion-button>
<p align="center"><img src="{{ myPhoto }}" /></p>
```

## build

```bash
ionic cordova build android
```
