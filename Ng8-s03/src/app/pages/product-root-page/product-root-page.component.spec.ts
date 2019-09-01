import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRootPageComponent } from './product-root-page.component';

describe('ProductRootPageComponent', () => {
  let component: ProductRootPageComponent;
  let fixture: ComponentFixture<ProductRootPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductRootPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRootPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
