import { Component, Input, OnInit } from '@angular/core';
//interfaces
import { ICardMoney } from 'src/app/interfaces/ICardMoney.interface';

@Component({
  selector: 'app-card-money',
  templateUrl: './card-money.component.html',
  styleUrls: ['./card-money.component.scss'],
})
export class CardMoneyComponent implements OnInit {
  @Input() data:ICardMoney[] = [
    {title:"Inversion",quantity:1600000},
    {title:"Inversion",quantity:1600000},
    {title:"Inversion",quantity:1600000},
    {title:"Inversion",quantity:1600000},
    {title:"Rendimiento",quantity:-30000}
  ]
  constructor() { }

  ngOnInit() {}

}
