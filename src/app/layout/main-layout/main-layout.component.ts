import { Component, ElementRef, inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { Subscription } from 'rxjs';
import { ScrollService } from '../../shared/services/scroll.service';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HeaderComponent, FooterComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent implements OnInit, OnDestroy {
  private readonly scrollService: ScrollService = inject(ScrollService);

  @ViewChild('mainContent') mainContent!: ElementRef<HTMLElement>;

  private scrollSubscription!: Subscription;

  ngOnInit(): void {
    this.scrollSubscription = this.scrollService.scrollToTop$.subscribe(() => {
      this.scrollToTop();
    });
  }

  private scrollToTop(): void {
    if (this.mainContent?.nativeElement) {
      this.mainContent.nativeElement.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  ngOnDestroy(): void {
    if (this.scrollSubscription) {
      this.scrollSubscription.unsubscribe();
    }
  }
}
