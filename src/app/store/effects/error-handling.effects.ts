import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { NotificationService } from '../../core/services/notification.service';
import { ProductActions } from '../../features/product/store/product.actions';
import { tap } from 'rxjs';

export const handleApiFailure$ = createEffect(
  (
    actions$: Actions = inject(Actions),
    notificationService: NotificationService = inject(NotificationService)
  ) => {
    return actions$.pipe(
      ofType(
        ProductActions.loadProductsFailure
        // here all errors
      ),
      tap(({ error }) => {
        const message = getErrorMessage(error);
        notificationService.showError(message);
        console.error('Global Error Handler', error);
      })
    );
  },
  { dispatch: false, functional: true }
);

function getErrorMessage(error: any): string {
  if (typeof error === 'string') {
    return error;
  }
  if (error && error.message) {
    return error.message;
  }
  return 'Unknow error occured, please try later.';
}
