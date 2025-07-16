import { Component, input } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-loading-wrapper',
  standalone: true,
  imports: [MatProgressSpinnerModule],
  templateUrl: './loading-wrapper.component.html',
  styleUrl: './loading-wrapper.component.scss'
})
export class LoadingWrapperComponent {
  isLoading = input<boolean | null>(false);
}
