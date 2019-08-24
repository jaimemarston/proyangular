import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDetailPageComponent } from './products-detail-page.component';

describe('ProductsDetailPageComponent', () => {
  let component: ProductsDetailPageComponent;
  let fixture: ComponentFixture<ProductsDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
