import { AfterViewInit, Component, ElementRef } from '@angular/core';

import { map } from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  mapDiv: HTMLElement;
  myMap: L.Map;

  constructor(private elRef: ElementRef) {
  }
  ngAfterViewInit() {
    this.mapDiv = this.elRef.nativeElement.querySelector('.map');
    console.log('this.mapDiv: ', this.mapDiv);

    this.myMap = map(this.mapDiv).setView([51.505, -0.09], 13);
  }
}
