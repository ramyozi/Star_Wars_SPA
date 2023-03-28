import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiloteDetailComponent } from './pilote-detail.component';

describe('PiloteDetailComponent', () => {
  let component: PiloteDetailComponent;
  let fixture: ComponentFixture<PiloteDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiloteDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiloteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
