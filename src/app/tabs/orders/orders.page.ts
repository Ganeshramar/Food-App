import { Component, Input, OnInit } from '@angular/core';
import { Router } from  "@angular/router";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  
  isLoading: any;
  @Input() orders : any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.isLoading = true;
    setTimeout(() => {
      this.orders = [              
        {
          address: {address: "South gate, Madurai, India", house: "145", id: "cLQdnS8YXk5HTDfM3UQC", landmark: "fdgs", lat: 26.108991978867923, lng: 91.79069981213378, title: "yui", user_id: "UA5JWxgjDOYgfXe92H0pFHwulTz2" }, 
          deliveryCharge: 20,
          grandTotal: "440.00",
          id: "5aG0RsPuze8NX00B7uR1",
          order: [
            {category_id: "e00", cover: "assets/images/dosa.jpg", desc: "Great in taste", id: "i1", name: "Butter Dosa", price: 120, quantity: 1, rating: 0, status: true, uid: "r1", variation: false, veg: true},
            {category_id: "e00", cover: "assets/images/pasta.jpg", desc: "Great in taste", id: "i3", name: "Pasta", price: 150, quantity: 2, rating: 0, status: true, uid: "r1", variation: false, veg: false}
          ],
          paid: "COD",  
          restaurant: {address: "Beltola Tiniali, India", city: "909090271", closeTime: "20:00", cover: "assets/images/restaurant-1.jpg", cuisines: ["Italian", "Mexican"], delivery_time: 25, description: "dd", email: "amma@mess.com", id: "r1", isClose: true, latitude: 26.1286243, longitude: 91.8012675, name: "Amma Mess", openTime: "08:00", phone: 6786745745, price: 25, rating: 0, short_name: "stayfit", status: "open", totalRating: 0},    restaurant_id: "r1",  
          status: "Delivered",
          time: "Jul 7, 2020 11:44 AM",
          total: "420.00",
          user_id: "1"
        },
        {
          address: {address: "Indira Nagar Rd, Borsojai, Basistha 781029, India", house: "dsgd", id: "cLQdnS8YXk5HTDfM3UQC", landmark: "fdgs", lat: 26.108991978867923, lng: 91.79069981213378, title: "yui", user_id: "UA5JWxgjDOYgfXe92H0pFHwulTz2" }, 
          deliveryCharge: 20,
          grandTotal: "540.00",
          id: "5aG0RsPuze8NX00B7uRP",
          order: [
            {category_id: "e10", cover: "assets/images/baha.jpg", desc: "Great in taste", id: "i32", name: "Bahamas", price: 270, quantity: 1, rating: 0, status: true, uid: "r5", variation: false, veg: false},
            {category_id: "e10", cover: "assets/images/mofo.jpg", desc: "Great in taste", id: "i33", name: "Mofongo", price: 250, quantity: 1, rating: 0, status: true, uid: "r5",variation: false, veg: true}
          ],
          paid: "COD",  
          restaurant: {address: "Pandi kovil,Madurai, India",  city: "909090567", closeTime: "21:00", cover: "", cuisines: ["Caribbean food", "North Indian", "Vietnamese"], delivery_time: 25, description: "dd", email: "DosaPlaza@gmail.com", latitude: 26.1286243, longitude: 91.8012675, id: "r5", isClose: true, name: "DosaPlaza", openTime: "07:00", phone: 6619563867, price: 27, rating: 4.7, short_name: "stayfit", status: "open", totalRating: 13},
          restaurant_id: "r5",  
          status: "created",
          time: "Jul 6, 2020 11:44 AM",
          total: "520.00",
          user_id: "1"
        },
        {
          address: {address: "Indira Nagar Rd, Madurai, India", house: "dsgd", id: "cLQdnS8YXk5HTDfM3UQC", landmark: "fdgs", lat: 26.108991978867923, lng: 91.79069981213378, title: "yui", user_id: "UA5JWxgjDOYgfXe92H0pFHwulTz2" }, 
          deliveryCharge: 20,
          grandTotal: "440.00",
          id: "5aG0RsPuze8NX00B7uR1",
          order: [
            {category_id: "e00", cover: "assets/images/pizza.jpg", desc: "Great in taste", id: "i1", name: "Pizza", price: 120, quantity: 1, rating: 0, status: true, uid: "r1", variation: false, veg: false},
            {category_id: "e00", cover: "assets/images/pasta.jpg", desc: "Great in taste", id: "i3", name: "Pasta", price: 150, quantity: 2, rating: 0, status: true, uid: "r1", variation: false, veg: false}
          ],
          paid: "COD",  
          restaurant: {address: "Beltola Tiniali, India", city: "909090271", closeTime: "20:00", cover: "assets/images/restaurant-1.jpg", cuisines: ["Italian", "Mexican"], delivery_time: 25, description: "dd", email: "kfc@123.com", id: "r1", isClose: true, latitude: 26.1286243, longitude: 91.8012675, name: "KFC", openTime: "08:00", phone: 6786745745, price: 25, rating: 0, short_name: "kfc", status: "open", totalRating: 0},    restaurant_id: "r1",  
          status: "Delivered",
          time: "Jul 7, 2020 11:44 AM",
          total: "420.00",
          user_id: "1"
        }
      ];
      this.isLoading = false;      
    }, 3000);
  }

  logout() {    
    this.router.navigateByUrl('login');
  }

  reorder() {
    console.log('Reorders');    
  }

  getHelp() {
    console.log('Assist you');
  }
}
