import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupreactiveformsComponent } from './popupreactiveforms.component';

describe('PopupreactiveformsComponent', () => {
  let component: PopupreactiveformsComponent;
  let fixture: ComponentFixture<PopupreactiveformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupreactiveformsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupreactiveformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
