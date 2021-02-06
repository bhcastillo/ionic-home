import { Component, OnInit } from '@angular/core';
import { ICardNew } from 'src/app/interfaces/ICardNew.interface';

@Component({
  selector: 'app-card-news',
  templateUrl: './card-news.component.html',
  styleUrls: ['./card-news.component.scss'],
})
export class CardNewsComponent implements OnInit {

  news: ICardNew[] = [
    {
      title: '10 gastos que debes evitar',
      description: 'Aunque el 66% de los adultos recibió educación para el ahorro, apenas el 44% ahorra de manera formal',
      img: 'new1'
    },
    {
      title: '10 gastos que debes evitar',
      description: 'Aunque el 66% de los adultos recibió educación para el ahorro, apenas el 44% ahorra de manera formal',
      img: 'new1'
    },
    {
      title: '10 gastos que debes evitar',
      description: 'Aunque el 66% de los adultos recibió educación para el ahorro, apenas el 44% ahorra de manera formal',
      img: 'new1'
    },
  ];
  constructor() { }

  ngOnInit() { }

}
