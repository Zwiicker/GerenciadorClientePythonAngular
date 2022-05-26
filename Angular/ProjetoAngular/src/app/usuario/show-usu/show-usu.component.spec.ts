import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUsuComponent } from './show-usu.component';

describe('ShowUsuComponent', () => {
  let component: ShowUsuComponent;
  let fixture: ComponentFixture<ShowUsuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowUsuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowUsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
