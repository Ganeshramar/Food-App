import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  @ViewChild('searchInput') sInput: any;
  model: any = {
    icon: 'search-outline',
    title: 'No Restaurants Found at a moment'
  };
  isLoading: any;
  query: any;

  allRestaurants: any[] =  [
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
      price: 100
    }
  ];
  restaurants: any[] = [];


  constructor() { }

  ngOnInit() {
    // this.isLoading = true;
    setTimeout(() => {
      this.sInput.setFocus();
    }, 500);
  }

  async onSearchChange(event: any) {
    console.log(event.detail.value);
    this.query = event.detail.value.toLowerCase();
    this.restaurants = [];
    if(this.query.length > 0) {
      this.isLoading = true;
      setTimeout(async() => {
        this.restaurants = await this.allRestaurants.filter((element: any) => {
          return element.short_name.includes(this.query);
        });
        console.log(this.restaurants);
        this.isLoading = false;
      }, 3000);
    }
  }

}
