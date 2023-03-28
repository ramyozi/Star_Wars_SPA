import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChasseursInscriptionComponent } from './chasseurs-inscription.component';

describe('ChasseursInscriptionComponent', () => {
  let component: ChasseursInscriptionComponent;
  let fixture: ComponentFixture<ChasseursInscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChasseursInscriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChasseursInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
