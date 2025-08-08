import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  private scrollToTopSource = new Subject<void>();
  public scrollToTop$ = this.scrollToTopSource.asObservable();

  triggerScrollToTop(): void {
    this.scrollToTopSource.next();
  }
}