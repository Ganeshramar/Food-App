import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Preferences } from '@capacitor/preferences';


@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {

  id: any;
  data: any = {};
  items: any[] = [];
  veg: boolean = false;
  cartData: any = {};
  storeData: any = {};
  restaurants = [
    {
      uid: '12wefdssrete',
      cover: 'assets/images/1.jpg',
      name: 'Amma Mess',
      short_name: 'ammamess',
      address: 'Race Course, Madurai, TamilNadu',
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
      address: 'Anna Nagar, Madurai, TamilNadu',
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
      address: 'Old court opposite, Madurai, TamilNadu',
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
      address: 'Simmakkal, Madurai, TamilNadu',
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
      address: 'Old Court Opposite, Madurai, TamilNadu',
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
      address: 'Nagamalai, Madurai, TamilNadu',
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
  
  categories: any[] = [
    {
      id: "e00",
      name: "Italian",
      uid: "12wefdss"
    },
    {
      id: "e0",
      name: "Mexican",
      uid: "12wefdss"
    },
    {
      id: "e01",
      name: "Indian",
      uid: "12wefdss"
    },
  ]; 

  allItems = [
    {
        category_id: "e00",
        cover: "assets/images/pizza.jpg",
        desc: "Great in taste",
        id: "i1",
        name: "Pizza",
        price: 120,
        rating: 0,
        status: true,
        uid: "12wefdss",
        variation: false,
        veg: false
    },
    {
        category_id: "e0",
        cover: "assets/images/salad.jpg",
        desc: "Great in taste",
        id: "i2",
        name: "Caprese Salad",
        price: 200,
        rating: 0,
        status: true,
        uid: "12wefdss",
        variation: false,
        veg: true
    },
    {
        category_id: "e01",
        cover: "assets/images/dosa.jpeg",
        desc: "Great in taste",
        id: "i4",
        name: "Butter Dosa",
        price: 120,
        rating: 0,
        status: true,
        uid: "12wefdss",
        variation: false,
        veg: true
    },
    {
        category_id: "e01",
        cover: "assets/images/chicken.jpeg",
        desc: "Great in taste",
        id: "i5",
        name: "Tandoori Chicken",
        price: 480,
        rating: 0,
        status: true,
        uid: "12wefdss",
        variation: false,
        veg: false
    },
    {
        category_id: "e00",
        cover: "assets/images/pasta.jpg",
        desc: "Great in taste",
        id: "i3",
        name: "Pasta",
        price: 150.50,
        rating: 0,
        status: true,
        uid: "12wefdss",
        variation: false,
        veg: true
    },
  ];

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      console.log('data: ', paramMap);
      if(!paramMap.has('restaurantId')) {
        this.navCtrl.back();
        return;
      }
      this.id = paramMap.get('restaurantId');
      console.log('id: ', this.id);
      this.getItems();
    });
  }

  getCart() {
    return Preferences.get({key: 'cart'});
  }

  async getItems() {
    this.data = {};
    this.cartData = {};
    this.storeData = {};
    let data: any = this.restaurants.filter(x => x.uid === this.id);
    this.data = data[0];
    // this.categories = this.categories.filter(x => x.uid === this.id);
    this.items = this.allItems;//.filter(x => x.uid === this.id);
    console.log('restaurant: ', this.data);
    let cart: any = await this.getCart();
    console.log('cart: ', cart);
    if(cart?.value) {
      this.storeData = JSON.parse(cart.value);
      console.log('storeData: ', this.storeData);
      if(this.id == this.storeData.restaurant.uid && this.allItems.length > 0) {
        this.allItems.forEach((element: any) => {
          this.storeData .items.forEach((ele: any) => { 
            if(element.id != ele.id) return;
            element.quantity = ele.quantity;
          })
        });
      }
      this.cartData.totalItem = this.storeData.totalItem;
      this.cartData.totalPrice = this.storeData.totalPrice;
    }
  }

  getCuisine(cuisine: any) {
    return cuisine.join(', ');
  }

  vegOnly(event: any) {
    console.log(event.detail.checked);
    this.items = [];
    if(event.detail.checked == true) this.items = this.allItems.filter(x => x.veg === true);
    else this.items = this.allItems;
    console.log('items: ', this.items);
  }

  quantityPlus(item: any, index: any) {
    try {
      console.log(this.items[index]);
      if(!this.items[index].quantity || this.items[index].quantity == 0) {
        this.items[index].quantity = 1;
        this.calculate();
      } else {
        this.items[index].quantity += 1; // this.items[index].quantity = this.items[index].quantity + 1
        this.calculate();
      }
    } catch(e) {
      console.log(e);
    }
  }

  quantityMinus(item: any, index: any) {
    if(this.items[index].quantity !== 0) {
      this.items[index].quantity -= 1; // this.items[index].quantity = this.items[index].quantity - 1
    } else {
      this.items[index].quantity = 0;
    }
    this.calculate();
  }

  calculate() {
    console.log(this.items);
    this.cartData.items = [];
    let item = this.items.filter(x => x.quantity > 0);
    console.log('added items: ', item);
    this.cartData.items = item;
    this.cartData.totalPrice = 0;
    this.cartData.totalItem = 0;
    item.forEach(element => {
      this.cartData.totalItem += element.quantity;
      this.cartData.totalPrice += (parseFloat(element.price) * parseFloat(element.quantity));
    });
    this.cartData.totalPrice = parseFloat(this.cartData.totalPrice).toFixed(2);
    if(this.cartData.totalItem == 0) {
      this.cartData.totalItem = 0;
      this.cartData.totalPrice = 0;
    }
    console.log('cart: ', this.cartData);
  }

  async saveToCart() {
    try {
      this.cartData.restaurant = {};
      this.cartData.restaurant = this.data;
      console.log('cartData', this.cartData);
      await Preferences.set({
        key: 'cart',
        value: JSON.stringify(this.cartData)
      });
    } catch(e) {
      console.log(e);
    }
  }

  async viewCart() {
    if(this.cartData.items && this.cartData.items.length > 0) await this.saveToCart();
    console.log('router url: ', this.router.url);
    this.router.navigate([this.router.url + '/cart']);
  }

}
