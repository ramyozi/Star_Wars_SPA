import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiloteSearchComponent } from './pilote-search.component';

describe('PiloteSearchComponent', () => {
  let component: PiloteSearchComponent;
  let fixture: ComponentFixture<PiloteSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiloteSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiloteSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
