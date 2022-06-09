import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CateProductListComponent } from './cate-product-list.component';

describe('CateProductListComponent', () => {
  let component: CateProductListComponent;
  let fixture: ComponentFixture<CateProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CateProductListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CateProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
