import { Component, inject } from '@angular/core';
import { LayoutService } from './core/services/layout.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  layoutService: LayoutService = inject(LayoutService);
}
