import { Component, input } from '@angular/core';
import { CartIconComponent } from "../../../../shared/components/cart-icon/cart-icon.component";
import { SearchBarComponent } from "../../../../shared/components/search-bar/search-bar.component";
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-mobile-nav',
  standalone: true,
  imports: [CartIconComponent, SearchBarComponent, MatButtonModule, MatIconModule],
  templateUrl: './mobile-nav.component.html',
  styleUrl: './mobile-nav.component.scss'
})
export class MobileNavComponent {

    categories = input.required<string[]>();
  

}
