import { Component } from '@angular/core';

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsMapTypeId,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment,
} from '@ionic-native/google-maps';

import { MarkerCluster } from '@ionic-native/google-maps/ngx';

import {
  ActionSheetController,
  Platform,
  AlertController,
} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  map: GoogleMap;
  constructor(
    public alertController: AlertController,
    public actionCtrl: ActionSheetController,
    private platform: Platform
  ) {
    if (this.platform.is('cordova')) {
      this.loadMap();
    }
  }

  loadMap() {
    Environment.setEnv({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      API_KEY_FOR_BROWSER_RELEASE: '',
      // eslint-disable-next-line @typescript-eslint/naming-convention
      API_KEY_FOR_BROWSER_DEBUG: '',
    });
    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: {
          lat: 43.610769,
          lng: 3.876716,
        },
        zoom: 12,
        tilt: 30,
      },
    });
  }

  // addMarker() {
  //   const marker: Marker = this.map.addMarkerSync({
  //     title: 'test',
  //     icon: 'red',
  //     animation: 'DROP',
  //     position: this.map.getCameraPosition().target,
  //     disableAutoPan: false,
  //   });
  // }

  addMarkerWithCluster() {
    const marker: MarkerOptions[] = [
      {
        title: 'test',
        icons: 'red',
        animation: 'DROP',
        position: this.map.getCameraPosition().target,
        disableAutoPan: false,
      },
    ];
    this.map.addMarkerClusterSync({
      markers: marker,
      icons: [],
    });
  }
}
