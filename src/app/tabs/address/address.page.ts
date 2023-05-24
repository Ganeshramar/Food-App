import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class AddressPage implements OnInit {

  form: any;
  location_name: string = 'Locationg....';
  isSubmitted: boolean = false;
  isLoading: boolean = true;
  isLocationFetched: boolean = true;
  isOrdered: boolean = false;
  data: any;

  constructor() { }

  ngOnInit() {
    this.initForm();    
  }

  initForm(){
    this.form = new FormGroup({
      title: new FormControl('', {validators: [Validators.required]}),
      house: new FormControl('', {validators: [Validators.required]}),
      landmark: new FormControl('', {validators: [Validators.required]}),
    });
  }

  toggleFetched() {
    this.isLocationFetched = !this.isLocationFetched;
  }

  toggleSubmit() {
    this.isSubmitted = !this.isSubmitted;
  }

  onSubmit(){
    this.toggleSubmit();
    if(!this.form.valid || !this.isLocationFetched){
      this.toggleSubmit();
      return;
    }
    this.data = {
      title: this.form.value.title,
      landmark: this.form.value.landmark,
      house: this.form.value.house,
      address: this.form.value.title + ' , ' + this.form.value.house + ' , ' + this.form.value.landmark,
      lat: 9.904982787005865,
      lng: 78.10977625726444,
    }; 
    this.toggleSubmit();
    this.isOrdered = true;
  }

}
