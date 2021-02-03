import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Components
import { CardIndexComponent } from './card-index/card-index.component';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { CardMoneyComponent } from './card-money/card-money.component';
import { CardGoalComponent } from './card-goal/card-goal.component';
//Pipes
import { ImgPipe } from '../pipes/img.pipe';



@NgModule({
  declarations: [CardIndexComponent, HeaderComponent, CardMoneyComponent, CardGoalComponent, ImgPipe],
  exports: [CardIndexComponent, HeaderComponent, CardMoneyComponent, CardGoalComponent],
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class ComponentsModule { }
