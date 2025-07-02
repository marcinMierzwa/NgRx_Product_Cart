import { Component, Input } from '@angular/core';
import { SearchBarComponent } from "../../../../shared/components/search-bar/search-bar.component";
import { CartIconComponent } from "../../../../shared/components/cart-icon/cart-icon.component";
import { Observable } from 'rxjs';
import { CategoryModel } from '../../../../features/categories/models/category.model';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-desktop-nav',
  standalone: true,
  imports: [SearchBarComponent, CartIconComponent, AsyncPipe],
  templateUrl: './desktop-nav.component.html',
  styleUrl: './desktop-nav.component.scss'
})
export class DesktopNavComponent {

@Input({required: true}) categories$!: Observable<CategoryModel[]>;

}
