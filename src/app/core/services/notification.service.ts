import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class NotificationService {
    
    showError(errorMessage: string): void {
        alert(errorMessage);
    }
}