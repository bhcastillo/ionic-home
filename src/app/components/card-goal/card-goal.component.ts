import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IcardGoal } from 'src/app/interfaces/ICardGoal.interface';

@Component({
  selector: 'app-card-goal',
  templateUrl: './card-goal.component.html',
  styleUrls: ['./card-goal.component.scss'],
})
export class CardGoalComponent implements OnInit {

  cardsGoals: IcardGoal[] = [
    { title: 'Viaje a Islas Canarias', imgSrc: 'palm', totalGoal: 8000000, contribution: 1630000 },
    { title: 'Macbook Pro', imgSrc: 'notebook', totalGoal: 7000000, contribution: 0 },
  ]

  constructor() { }

  ngOnInit() { }

}
