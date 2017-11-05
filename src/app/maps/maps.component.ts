import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

    title: string =  'Lieu de vie:';
    lat: number = 49.3667;
    lng: number =  6.5833;


  constructor() { }

  ngOnInit() {
  }

}
