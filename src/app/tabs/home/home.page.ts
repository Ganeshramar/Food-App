import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  restaurants: any[] = [];
  isLoading: boolean = false;
  constructor() {}

  ngOnInit() {
    this.isLoading = true;
    setTimeout(() => {
      this.restaurants = [
        {
          uid: '12wefdssrete',
          cover: 'assets/images/1.jpg',
          name: 'Amma Mess',
          short_name: 'ammamess',
          cuisines: [
            'Indian',
            'Chinese'
          ],
          rating: 5,
          delivery_time: 25,
          distance: 2.5,
          price: 100
        },
        {
          uid: '02weokssrete',
          cover: 'assets/images/5.jpeg',
          name: 'Multi Cuisine',
          short_name: 'multicuisine',
          cuisines: [
            'Chinese',
            'Mexican'
          ],
          rating: 5,
          delivery_time: 25,
          distance: 2.5,
          price: 100
        },
        {
          uid: '56iofdssrete',
          cover: 'assets/images/2.jpg',
          name: 'KFC',
          short_name: 'kfc',
          cuisines: [
            'American',
            'Mexican'
          ],
          rating: 5,
          delivery_time: 25,
          distance: 2.5,
          price: 100
        },
        {
          uid: '06werissrete',
          cover: 'assets/images/6.jpeg',
          name: 'Konar karipadai',
          short_name: 'konarkaripadai',
          cuisines: [
            'Indian',
            'Thailand'
          ],
          rating: 5,
          delivery_time: 25,
          distance: 2.5,
          price: 100
        },
        {
          uid: '65wefdsspote',
          cover: 'assets/images/3.jpg',
          name: 'Riyaz Mall',
          short_name: 'riyazmall',
          cuisines: [
            'Indian',
            'Chinese'
          ],
          rating: 5,
          delivery_time: 25,
          distance: 2.5,
          price: 100
        },        
        {
          uid:'85wefdplrete',
          cover: 'assets/images/4.jpeg',
          name: 'Stayfit3',
          short_name: 'stayfit3',
          cuisines: [
            'Italian',
            'Mexican'
          ],
          rating: 5,
          delivery_time: 25,
          distance: 2.5,
          price: 100
        }
      ];
      this.isLoading = false;
    }, 2500);
  }

}
