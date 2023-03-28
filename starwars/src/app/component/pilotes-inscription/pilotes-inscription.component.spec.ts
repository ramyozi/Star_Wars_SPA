import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotesInscriptionComponent } from './pilotes-inscription.component';

describe('PilotesInscriptionComponent', () => {
  let component: PilotesInscriptionComponent;
  let fixture: ComponentFixture<PilotesInscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PilotesInscriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PilotesInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
