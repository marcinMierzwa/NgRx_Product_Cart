import { Component } from '@angular/core';
import { DesktopNavComponent } from "./desktop-nav/desktop-nav/desktop-nav.component";
import { CartIconComponent } from "../../shared/components/cart-icon/cart-icon.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [DesktopNavComponent, CartIconComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
