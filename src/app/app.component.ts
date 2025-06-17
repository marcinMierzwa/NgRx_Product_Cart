import { Component } from '@angular/core';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { CategoriesComponent } from "./components/categories/categories.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CategoriesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
}
