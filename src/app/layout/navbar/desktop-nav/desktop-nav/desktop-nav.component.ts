import { Component, Input } from '@angular/core';
import { SearchBarComponent } from "../../../../shared/components/search-bar/search-bar.component";
import { CartIconComponent } from "../../../../shared/components/cart-icon/cart-icon.component";
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Category } from '../../../../features/categories/models/category.model';

@Component({
  selector: 'app-desktop-nav',
  standalone: true,
  imports: [SearchBarComponent, CartIconComponent, AsyncPipe, RouterLink],
  templateUrl: './desktop-nav.component.html',
  styleUrl: './desktop-nav.component.scss'
})
export class DesktopNavComponent {

@Input({required: true}) categories$!: Observable<Category[]>;

}
