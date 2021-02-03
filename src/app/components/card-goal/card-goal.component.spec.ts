import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardGoalComponent } from './card-goal.component';

describe('CardGoalComponent', () => {
  let component: CardGoalComponent;
  let fixture: ComponentFixture<CardGoalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardGoalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
