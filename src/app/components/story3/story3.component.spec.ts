import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Story3Component } from './story3.component';

describe('Story3Component', () => {
  let component: Story3Component;
  let fixture: ComponentFixture<Story3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Story3Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Story3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
