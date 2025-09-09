import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartProductItemCardComponent } from './cart-product-item-card.component';

describe('CartProductItemCardComponent', () => {
  let component: CartProductItemCardComponent;
  let fixture: ComponentFixture<CartProductItemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartProductItemCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartProductItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
