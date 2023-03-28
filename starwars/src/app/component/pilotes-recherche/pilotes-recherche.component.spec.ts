import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotesRechercheComponent } from './pilotes-recherche.component';

describe('PilotesRechercheComponent', () => {
  let component: PilotesRechercheComponent;
  let fixture: ComponentFixture<PilotesRechercheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PilotesRechercheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PilotesRechercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
