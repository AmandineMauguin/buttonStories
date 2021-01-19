import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Story1Component } from './story1.component';

describe('Story1Component', () => {
  let component: Story1Component;
  let fixture: ComponentFixture<Story1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Story1Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Story1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
