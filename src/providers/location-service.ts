import { AuthService } from './auth-service';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import 'rxjs/add/operator/map';

/*
  Generated class for the LocationService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class LocationService {
  location = [];
  constructor(private geolocation: Geolocation, private af: AngularFire, private _auth: AuthService) {
  }



  getCurrentLocation(){
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log("Get : Latitude : "+resp.coords.latitude+" Longtitude : "+resp.coords.longitude);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  getWatchLocation(uid){
    
    let watch = this.geolocation.watchPosition();
    
      watch.subscribe((data) => {
      console.log("Watch : Latitude : " + data.coords.latitude+" Longtitude : " + data.coords.longitude);
      this.location.push({'latitude': data.coords.latitude, 'longtitude': data.coords.longitude});
      let length = this.location.length;
      if(length==1){
        console.log("Lenght : " + length);
      }else{
        console.log("Lenght : " + length);
        console.log("Distance : " + this.getDistance(this.location[length-1].latitude, this.location[length-1].longtitude, this.location[length-2].latitude, this.location[length-2].longtitude ));
        this.updateDistance(uid, this.getDistance(this.location[length-1].latitude, this.location[length-1].longtitude, this.location[length-2].latitude, this.location[length-2].longtitude ));
      }
    });
  }

  getDistance(lon1, lat1, lon2, lat2){
    var R = 6371; // Radius of the earth in km
    var dLat = this.toRad(lat2-lat1); 
    var dLon = this.toRad(lon2-lon1); 
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) * 
           Math.sin(dLon/2) * Math.sin(dLon/2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d;
  }

  toRad(Value) {
    /** Converts numeric degrees to radians */
    return Value * Math.PI / 180;
  }
  
  updateDistance(uid, distance){
    this.af.database.object('user/'+uid+'/totalDistance').$ref
    .ref.transaction(totalDistance => {
            return totalDistance + distance;
    })
  }
}
