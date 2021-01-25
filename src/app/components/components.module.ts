import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardIndexComponent } from './card-index/card-index.component';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { CardMoneyComponent } from './card-money/card-money.component';



@NgModule({
  declarations: [CardIndexComponent,HeaderComponent,CardMoneyComponent],
  exports:[ CardIndexComponent,HeaderComponent,CardMoneyComponent],
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class ComponentsModule { }
