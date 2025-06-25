import { Component, input } from '@angular/core';
import { SearchBarComponent } from "../../../../shared/components/search-bar/search-bar.component";
import { CartIconComponent } from "../../../../shared/components/cart-icon/cart-icon.component";

@Component({
  selector: 'app-desktop-nav',
  standalone: true,
  imports: [SearchBarComponent, CartIconComponent],
  templateUrl: './desktop-nav.component.html',
  styleUrl: './desktop-nav.component.scss'
})
export class DesktopNavComponent {

  categories = input.required<string[]>();


}
