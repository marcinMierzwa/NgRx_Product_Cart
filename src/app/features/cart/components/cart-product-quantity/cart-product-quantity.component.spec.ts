import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartProductQuantityComponent } from './cart-product-quantity.component';

describe('CartProductQuantityComponent', () => {
  let component: CartProductQuantityComponent;
  let fixture: ComponentFixture<CartProductQuantityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartProductQuantityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartProductQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
