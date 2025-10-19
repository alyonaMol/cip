import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private messageService: MessageService) {}

  showWarning(detail: string): void {
    this.messageService.add({
      severity: 'warn',
      summary: 'Warning',
      detail: detail,
      life: 3000,
    });
  }

  throwError(error: any): void {
    let errorMessage = 'An unknown error occurred.';

    if (error instanceof HttpErrorResponse) {
      errorMessage = error.error?.message || error.message || `HTTP Error: ${error.status}`;
    } else if (typeof error === 'string') {
      errorMessage = error;
    } else if (error && error.message) {
      errorMessage = error.message;
    }

    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: errorMessage,
      life: 5000,
    });

    console.error('Notification Service Caught Error:', error);
  }

  showSuccess(detail: string): void {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: detail,
      life: 3000,
    });
  }
}
