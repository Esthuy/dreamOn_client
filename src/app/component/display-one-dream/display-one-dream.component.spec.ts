import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayOneDreamComponent } from './display-one-dream.component';

describe('DisplayOneDreamComponent', () => {
  let component: DisplayOneDreamComponent;
  let fixture: ComponentFixture<DisplayOneDreamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayOneDreamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayOneDreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
