import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsColabComponent } from './details-colab.component';

describe('DetailsColabComponent', () => {
  let component: DetailsColabComponent;
  let fixture: ComponentFixture<DetailsColabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsColabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsColabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
