import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateColabPageComponent } from './create-colab-page.component';

describe('CreateColabPageComponent', () => {
  let component: CreateColabPageComponent;
  let fixture: ComponentFixture<CreateColabPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateColabPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateColabPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
