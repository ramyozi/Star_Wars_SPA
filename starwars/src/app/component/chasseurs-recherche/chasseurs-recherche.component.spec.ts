import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChasseursRechercheComponent } from './chasseurs-recherche.component';

describe('ChasseursRechercheComponent', () => {
  let component: ChasseursRechercheComponent;
  let fixture: ComponentFixture<ChasseursRechercheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChasseursRechercheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChasseursRechercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
