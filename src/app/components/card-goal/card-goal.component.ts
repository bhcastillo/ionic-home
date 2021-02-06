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
    {
      title: 'Viaje a Islas Canarias',
      imgSrc: 'palm',
      totalGoal: 8000000,
      contribution: 1630000
    },
    { title: 'Macbook Pro', imgSrc: 'notebook', totalGoal: 7000000, contribution: 7000000 },
  ]
  card1 = {
    titleFontSize: "14",
    //percent: this.calculatePercent(this.cardsGoals[0].totalGoal, this.cardsGoals[0].contribution),
    outerStrokeColor: 'var(--ion-color-primary)',
    titleColor: 'var(--ion-color-primary)',
    radius: '25',
    unitsColor: 'var(--ion-color-primary)'
  }

  constructor() { }

  ngOnInit() { }

  calculatePercent(totalGoal: number, contribution: number) {

    return Math.round((contribution * 100) / totalGoal).toString();
  }
}
