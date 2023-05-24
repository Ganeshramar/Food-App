import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-load-restaurant',
  templateUrl: './load-restaurant.component.html',
  styleUrls: ['./load-restaurant.component.scss'],
})
export class LoadRestaurantComponent  implements OnInit {

  dummy = Array(10);

  constructor() { }

  ngOnInit() {}

}
