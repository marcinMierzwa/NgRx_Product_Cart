import { effect, inject, Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private breakpointObserver = inject(BreakpointObserver);

//   modeEffect = effect(() => {
//     console.log('isHandset :', this.isHandset());
//     console.log('isTablet :', this.isTablet());
//     console.log('isDesktop :', this.isDesktop());
//   });

   public isMobile = toSignal(
    this.breakpointObserver
      .observe([Breakpoints.XSmall])
      .pipe(map((result) => result.matches)),
    { initialValue: false }
  );

  public isTablet = toSignal(
    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.Medium])
      .pipe(map((result) => result.matches)),
    { initialValue: false }
  );

  public isDesktop = toSignal(
    this.breakpointObserver
      .observe([Breakpoints.Large, Breakpoints.XLarge])
      .pipe(map((result) => result.matches)),
    { initialValue: false }
  );
}
