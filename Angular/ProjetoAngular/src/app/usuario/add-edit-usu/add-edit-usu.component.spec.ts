import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditUsuComponent } from './add-edit-usu.component';

describe('AddEditUsuComponent', () => {
  let component: AddEditUsuComponent;
  let fixture: ComponentFixture<AddEditUsuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditUsuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditUsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
