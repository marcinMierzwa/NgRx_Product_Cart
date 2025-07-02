import { Component, inject, signal } from '@angular/core';
import { DesktopNavComponent } from "./desktop-nav/desktop-nav/desktop-nav.component";
import { MobileNavComponent } from "./mobile-nav/mobile-nav/mobile-nav.component";
import { LayoutService } from '../../features/layout.service';
import { Observable } from 'rxjs';
import { CategoryModel } from '../../features/categories/models/category.model';
import { CategoriesFacadeService } from '../../features/categories/categories.facade.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [DesktopNavComponent, MobileNavComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
    private readonly layoutService: LayoutService = inject(LayoutService);
    private readonly categoryService: CategoriesFacadeService = inject(CategoriesFacadeService);
    readonly isMoblieView = this.layoutService.isMobile;
    categories$: Observable<CategoryModel[]> = this.categoryService.categories$;

}
