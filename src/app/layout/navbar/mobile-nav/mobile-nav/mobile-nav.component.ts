import {
  Component,
  computed,
  effect,
  EventEmitter,
  inject,
  input,
  Input,
  Output,
  Renderer2,
  signal,
  Signal,
} from '@angular/core';
import { CartIconComponent } from '../../../../shared/components/cart-icon/cart-icon.component';
import { SearchBarComponent } from '../../../../shared/components/search-bar/search-bar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Category } from '../../../../features/categories/models/category.model';
import { RouterLink } from "@angular/router";

enum MatIconName {
  menu = 'menu',
  close = 'close',
}

@Component({
  selector: 'app-mobile-nav',
  standalone: true,
  imports: [
    CartIconComponent,
    SearchBarComponent,
    MatButtonModule,
    MatIconModule,
    AsyncPipe,
    RouterLink
],
  templateUrl: './mobile-nav.component.html',
  styleUrl: './mobile-nav.component.scss',
})
export class MobileNavComponent {
  private renderer = inject(Renderer2);

  @Input({ required: true }) categories$!: Observable<Category[]>;
  @Input({ required: true }) itemsCount$!: Observable<number>;
  @Output() showAllClicked = new EventEmitter<void>();
  @Output() showBestsellersClicked = new EventEmitter<void>();
  @Output() categoryClicked = new EventEmitter<number>();
  readonly logoPath = 'assets/logo.png';

  isMenuOpen = signal<boolean>(false);
  matIcon: Signal<MatIconName> = computed(() =>
    this.isMenuOpen() ? MatIconName.close : MatIconName.menu
  );

  constructor() {
    effect(() => {
      if (this.isMenuOpen()) {
        this.renderer.addClass(document.body, 'menu-is-open');
      } else {
        this.renderer.removeClass(document.body, 'menu-is-open');
      }
    });
  }

  toggleIsMenuOpen(): void {
    this.isMenuOpen.update((currentValue: boolean) => !currentValue);
  }

  onShowAll(): void {
    this.showAllClicked.emit();
    this.isMenuOpen.set(false);
  }

  onShowBestsellers(): void {
    this.showBestsellersClicked.emit();
    this.isMenuOpen.set(false);
  }

  onCategoryClick(categoryId: number): void {
    this.categoryClicked.emit(categoryId);
    this.isMenuOpen.set(false);
  }
}
