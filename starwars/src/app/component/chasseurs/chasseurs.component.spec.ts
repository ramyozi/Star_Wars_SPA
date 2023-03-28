import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChasseursComponent } from './chasseurs.component';

describe('ChasseursComponent', () => {
  let component: ChasseursComponent;
  let fixture: ComponentFixture<ChasseursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChasseursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChasseursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
