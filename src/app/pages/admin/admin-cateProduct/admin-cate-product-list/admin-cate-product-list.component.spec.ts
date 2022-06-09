import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCateProductListComponent } from './admin-cate-product-list.component';

describe('AdminCateProductListComponent', () => {
  let component: AdminCateProductListComponent;
  let fixture: ComponentFixture<AdminCateProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCateProductListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCateProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
