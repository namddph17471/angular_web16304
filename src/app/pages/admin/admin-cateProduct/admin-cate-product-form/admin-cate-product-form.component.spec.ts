import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCateProductFormComponent } from './admin-cate-product-form.component';

describe('AdminCateProductFormComponent', () => {
  let component: AdminCateProductFormComponent;
  let fixture: ComponentFixture<AdminCateProductFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCateProductFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCateProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
