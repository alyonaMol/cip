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
      life: 3000, // Зникне через 3 секунди
    });
  }

  throwError(error: any): void {
    let errorMessage = 'An unknown error occurred.';

    if (error instanceof HttpErrorResponse) {
      // Обробка HTTP-помилок
      errorMessage = error.error?.message || error.message || `HTTP Error: ${error.status}`;
    } else if (typeof error === 'string') {
      // Якщо помилка прийшла як рядок
      errorMessage = error;
    } else if (error && error.message) {
      // Загальна обробка помилок JS
      errorMessage = error.message;
    }

    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: errorMessage,
      life: 5000, // Залишиться на екрані довше
    });

    // Додатково можна логувати для налагодження
    console.error('Notification Service Caught Error:', error);
  }

  /**
   * Відображає повідомлення про успіх (Success).
   * @param detail Текст успіху.
   */
  showSuccess(detail: string): void {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: detail,
      life: 3000,
    });
  }
}
