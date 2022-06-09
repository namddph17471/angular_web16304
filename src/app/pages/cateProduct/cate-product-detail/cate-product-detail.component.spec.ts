import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CateProductDetailComponent } from './cate-product-detail.component';

describe('CateProductDetailComponent', () => {
  let component: CateProductDetailComponent;
  let fixture: ComponentFixture<CateProductDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CateProductDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CateProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
