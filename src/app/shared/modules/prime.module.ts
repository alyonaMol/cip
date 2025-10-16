import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// ... багато імпортів PrimeNG ...
import { ButtonModule } from 'primeng/button';
// ...
import { PasswordModule } from 'primeng/password';
// ...
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { ProgressSpinnerModule } from 'primeng/progressspinner';


@NgModule({
  declarations: [],
  // ... (повний список exports, який ти надав)
  exports: [
    // ... всі PrimeNG модулі ...
    CommonModule,
    DragDropModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    // ...
    PasswordModule,
    ButtonModule,
    PasswordModule,
    InputTextModule,
    FloatLabelModule,
    MessageModule,
    ToastModule,
    ProgressSpinnerModule,


  ],
})
export class PrimeModule {}