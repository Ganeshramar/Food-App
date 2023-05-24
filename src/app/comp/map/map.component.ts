import { style } from '@angular/animations';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { GoogleMapsService } from 'src/app/services/google-maps.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent  implements OnInit {

  @ViewChild('map', {static: true}) mapElemetRef : any;
  googleMaps: any;
  map: any;

  constructor(
    private maps: GoogleMapsService, 
    private ef: ElementRef,
    private renderer: Renderer2) { }

  ngOnInit() {
    this.mapElemetRef = ElementRef;
    this.loadMap();
  }

  async loadMap(){
    try {
      let googleMaps: any = await this.maps.loadGoogleMaps();
      this.googleMaps = googleMaps;
      const mapEl = this.mapElemetRef.nativeElement;
      this.map = new googleMaps.Map(mapEl, {
        center: new googleMaps.LatLng(9.924598108012267, 78.12419581367644),
        zoom: 15,
        scaleControl: false,
        streetViewControl: false,
        overViewMapControl: false,
        mapTypeControl: false,
        mapTypeControlOptions:{
          mapTypeIds: [googleMaps.MapTypeId.RoadMap, 'foodOrderingApp']
        }
      });
      const style = [
        {
          featureType: 'all',
          elementType: 'all',
          stylers: [
            {saturation: -100}
          ]
        }
      ]
      var mapType = new googleMaps.StyleMapType(style, {name: 'Grayscale'});
      this.map.mapType.set('foodOrderingApp',mapType),
      this.map.setMapTypeId('foodOrderingApp');
      this.renderer.addClass(mapEl, 'visible');
    }
    catch(e){
      console.log(e);
    }
  }
  

}
