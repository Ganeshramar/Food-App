import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-screen-empty',
  templateUrl: './screen-empty.component.html',
  styleUrls: ['./screen-empty.component.scss'],
})
export class ScreenEmptyComponent  implements OnInit {

  @Input() model: any;

  constructor() { }

  ngOnInit() {}

}
