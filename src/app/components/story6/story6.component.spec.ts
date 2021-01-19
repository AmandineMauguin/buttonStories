import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Story6Component } from './story6.component';

describe('Story6Component', () => {
  let component: Story6Component;
  let fixture: ComponentFixture<Story6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Story6Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Story6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
