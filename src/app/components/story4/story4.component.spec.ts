import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Story4Component } from './story4.component';

describe('Story4Component', () => {
  let component: Story4Component;
  let fixture: ComponentFixture<Story4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Story4Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Story4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
