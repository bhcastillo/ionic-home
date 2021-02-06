import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgCircleProgressModule } from 'ng-circle-progress';

//Components
import { CardIndexComponent } from './card-index/card-index.component';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { CardMoneyComponent } from './card-money/card-money.component';
import { CardGoalComponent } from './card-goal/card-goal.component';
//Pipes
import { ImgPipe } from '../pipes/img.pipe';
import { CardPortfolioComponent } from './card-portfolio/card-portfolio.component';



@NgModule({
  declarations: [
    CardIndexComponent,
    HeaderComponent,
    CardMoneyComponent,
    CardGoalComponent,
    ImgPipe,
    CardPortfolioComponent,
  ],
  exports: [
    CardIndexComponent,
    HeaderComponent,
    CardMoneyComponent,
    CardGoalComponent,
    CardPortfolioComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    NgCircleProgressModule.forRoot({
      "backgroundGradient": true,
      "backgroundColor": "#ffffff",
      "backgroundGradientStopColor": "#ffffff",
      "backgroundPadding": -10,
      "radius": 60,
      "maxPercent": 100,
      "outerStrokeWidth": 3,
      "outerStrokeColor": "#61A9DC",
      "innerStrokeWidth": 3,
      "subtitleColor": "#444444",
      "showSubtitle": false,
      "showInnerStroke": false,
      "startFromZero": false
    }),
  ]
})
export class ComponentsModule { }
