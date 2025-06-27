import { Component, inject, signal } from '@angular/core';
import { DesktopNavComponent } from "./desktop-nav/desktop-nav/desktop-nav.component";
import { MobileNavComponent } from "./mobile-nav/mobile-nav/mobile-nav.component";
import { LayoutService } from '../../features/layout.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [DesktopNavComponent, MobileNavComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
    private readonly layoutService: LayoutService = inject(LayoutService);
    readonly isMoblieView = this.layoutService.isMobile;
    categories = signal<string[]>(['example1', 'example2', 'example3', 'example4']);

}
