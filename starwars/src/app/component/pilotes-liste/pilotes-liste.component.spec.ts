import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotesListeComponent } from './pilotes-liste.component';

describe('PilotesListeComponent', () => {
  let component: PilotesListeComponent;
  let fixture: ComponentFixture<PilotesListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PilotesListeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PilotesListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
