// src/app/store/meta-reducers/index.ts

import { ActionReducer, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { AppState } from '../app.state';

// Funkcja, która tworzy i konfiguruje meta-reducer
function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({
    // Podajemy, które "wycinki" stanu mają być zapisywane w localStorage.
    // To kluczowa część - synchronizuj tylko to, co jest potrzebne!
    keys: ['cart'],
    // Mówi, aby przy starcie aplikacji odtworzyć (uwodnić) stan z localStorage
    rehydrate: true,
  })(reducer);
}

// Eksportujemy tablicę meta-reducerów, której użyjemy w głównej konfiguracji aplikacji
export const metaReducers: MetaReducer<AppState>[] = [localStorageSyncReducer];