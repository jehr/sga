import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsRComponent } from './products-r.component';

describe('ProductsRComponent', () => {
  let component: ProductsRComponent;
  let fixture: ComponentFixture<ProductsRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
