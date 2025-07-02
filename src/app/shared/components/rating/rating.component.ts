import { Component, computed, input } from '@angular/core';
import { RatingDataModel } from './models/rating-data.model';
import { RatingIconModel } from './models/rating-icon.model';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss'
})
export class RatingComponent {
  readonly ratingData = input.required<RatingDataModel>();
  readonly maxStars = 5;
  public stars = computed<(RatingIconModel)[]>(() => {
    // Get the current value from the input signal
    const data = this.ratingData();
    // If data is not available, show all empty stars
    if (!data || data.rate <= 0) {
      return Array(this.maxStars).fill(RatingIconModel.emptyStar);
    }
    // Round the rate to the nearest whole number to get the count of gold stars
    // Example: Math.round(4.1) -> 4; Math.round(4.51) -> 5
    const numberOfGoldStars = Math.round(data.rate);
    // Create the array of star icon names
    return Array(this.maxStars).fill(0).map((_, index) => {
      return index < numberOfGoldStars ? RatingIconModel.filledStar : RatingIconModel.emptyStar;
    });
  });
}
