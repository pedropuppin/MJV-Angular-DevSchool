import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColabsComponent } from './colabs.component';

describe('ColabsComponent', () => {
  let component: ColabsComponent;
  let fixture: ComponentFixture<ColabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
