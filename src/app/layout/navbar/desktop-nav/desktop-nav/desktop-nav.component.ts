import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SearchBarComponent } from '../../../../shared/components/search-bar/search-bar.component';
import { CartIconComponent } from '../../../../shared/components/cart-icon/cart-icon.component';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Category } from '../../../../features/categories/models/category.model';

@Component({
  selector: 'app-desktop-nav',
  standalone: true,
  imports: [SearchBarComponent, CartIconComponent, AsyncPipe, RouterLink],
  templateUrl: './desktop-nav.component.html',
  styleUrl: './desktop-nav.component.scss',
})
export class DesktopNavComponent {
  @Input({ required: true }) categories$!: Observable<Category[]>;
  @Input({ required: true }) itemsCount$!: Observable<number>;
  @Output() showAllClicked = new EventEmitter<void>();
  @Output() showBestsellersClicked = new EventEmitter<void>();
  @Output() categoryClicked = new EventEmitter<number>();
  readonly logoPath = 'assets/logo.png';


  

  onShowAll(): void {
    this.showAllClicked.emit();
  }

  onShowBestsellers(): void {
    this.showBestsellersClicked.emit();
  }

  onCategoryClick(categoryId: number): void {
    this.categoryClicked.emit(categoryId);
  }
}
