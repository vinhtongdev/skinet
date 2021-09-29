import { BasketService } from './../../basket/basket.service';
import { IDeliveryMethod } from './../../shared/models/deliveryMethod';
import { CheckoutService } from './../checkout.service';
import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-delivery',
  templateUrl: './checkout-delivery.component.html',
  styleUrls: ['./checkout-delivery.component.scss']
})
export class CheckoutDeliveryComponent implements OnInit {
  @Input() checkoutForm!: FormGroup;
  deliveryMethod?: IDeliveryMethod[];

  constructor(private checkoutService: CheckoutService, private basketService: BasketService) { }

  ngOnInit(): void {
    this.checkoutService.getDeliveryMethods().subscribe((dm: IDeliveryMethod[]) => {
      this.deliveryMethod = dm;
    }, error => {
      console.log(error);
    });
  }
  setShippingPrice(deliveryMethod: IDeliveryMethod){
    this.basketService.setShippingPrice(deliveryMethod);
  }

}
