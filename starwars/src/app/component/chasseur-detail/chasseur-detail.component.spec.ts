import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChasseurDetailComponent } from './chasseur-detail.component';

describe('ChasseurDetailComponent', () => {
  let component: ChasseurDetailComponent;
  let fixture: ComponentFixture<ChasseurDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChasseurDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChasseurDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
