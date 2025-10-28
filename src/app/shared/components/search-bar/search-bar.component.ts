import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import {
  FormControl,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [MatIconModule, ReactiveFormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent implements OnInit {
  private readonly fb = inject(NonNullableFormBuilder);
  @Output() search = new EventEmitter<string>();

  protected searchInput: FormControl = this.fb.control('', [
    Validators.minLength(3),
    Validators.maxLength(100),
  ]);

  ngOnInit(): void {
    this.searchInput.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((phrase) => {
        if (this.searchInput.valid) {
          this.search.emit(phrase.trim());
        }
      });
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    const phrase = this.searchInput.value;
    if (this.searchInput.valid) {
      this.search.emit(phrase.trim());
    }
  }
}
