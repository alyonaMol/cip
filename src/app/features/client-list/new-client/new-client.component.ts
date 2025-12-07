/*
import { DatePipe, NgClass, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
//import isMobile from 'ismobilejs';
import { ConfirmationService, ConfirmEventType } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

//import { dateFormat, GENDER } from '../../../core/config/constants';
import { Client, Response } from '../../../core/models/types';
import { PrimeModule } from '../../../shared/modules/prime.module';
import { ClientService } from '../../../shared/services/client.service';
import { SourceDataService } from '../../../shared/services/source-data.service';
//import { getClientIfExists } from '../../../shared/utils/helpers';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.scss'],
  providers: [ConfirmationService, DatePipe],
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, NgIf, PrimeModule],
})
export class NewClientComponent implements OnInit {
  public errorValidation = '';
  public errorHttp = '';
  public message = '';
  public newClientForm: FormGroup;
  public newClient: Client | null;

  public loading = false;
  public submitted = false;
  public isMobile: boolean;

  public maxDate = new Date();
  public genderArray = GENDER;
  public dateFormat: string = dateFormat;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private datePipe: DatePipe,
    private clientService: ClientService,
    private sourceDataService: SourceDataService,
    private confirmationService: ConfirmationService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {}

  get f(): any {
    return this.newClientForm.controls;
  }

  ngOnInit() {
    this.isMobile = isMobile(window.navigator).any;

    this.newClientForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: [''],
      gender: [''],
      dob: [''],
      phone: [''],
      level: [''],
      photo: [''],
    });
  }

  public onSubmit(): void {
    if (this.newClientForm.invalid) {
      this.errorValidation = 'Form is invalid';
      for (const controlName in this.newClientForm.controls) {
        if (this.newClientForm.controls.hasOwnProperty(controlName)) {
          const errorMessage = this.getErrorMessage(
            `Field ${controlName}`,
            this.newClientForm.get(controlName) as FormControl
          );
          if (errorMessage) {
            this.errorValidation = errorMessage;
          }
        }
      }
      return;
    }
    this.errorValidation = '';
    this.errorHttp = '';
    this.message = '';
    this.loading = true;
    const existingClient = getClientIfExists(this.config.data, this.newClientForm.value);

    if (existingClient?.id) {
      this.showConfirmation(existingClient);
    } else {
      this.createClientAndHandleResponse(this.newClientForm.value);
    }
  }

  showConfirmation(existingClient: any) {
    const message = this.generateConfirmationMessage(existingClient);

    this.confirmationService.confirm({
      icon: 'pi pi-exclamation-triangle',
      message: message,
      accept: () => {
        this.createClientAndHandleResponse(this.newClientForm.value);
      },
      reject: (type: ConfirmEventType) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            // When the client exists, the user can navigate to their profile
            this.goToExistingClient(existingClient.id);
            break;
          case ConfirmEventType.CANCEL:
            return;
        }
      },
    });
  }

  createClientAndHandleResponse = (clientData: any) => {
    this.clientService.createClient(this.mapClientToModel(clientData, true)).subscribe(
      (data: Client | Response) => {
        this.loading = false;
        if ((data as Response).error) {
          this.errorHttp = (data as Response).error;
        } else {
          // Update clients list
          this.sourceDataService.loadData();
          // TODO: pass it to notification service
          // this.message = `Client ${(data as Client).name} ${(data as Client).surname} created`;
          this.newClientForm.reset();
          this.newClient = data as Client;
          this.submitted = true;
        }
      },
      (error) => {
        this.errorHttp = error;
        this.loading = false;
      }
    );
  };

  generateConfirmationMessage(existingClient: any): string {
    let message =
      `Seems like this user already exists, please check:<br/><br/>\n\n` +
      `<b>${existingClient.email}, <br/>` +
      `${existingClient.name} ` +
      `${existingClient.surname}`;

    if (existingClient.dob) {
      const formattedDob = this.datePipe.transform(existingClient.dob, this.dateFormat);
      message += `, <br/> DOB: ${formattedDob}`;
    }

    message += `</b>`;
    return message;
  }

  public getErrorMessage(controlName: string, control: FormControl): string {
    if (control.hasError('required')) {
      return `${controlName} is required`;
    } else if (control.hasError('validatePhoneNumber')) {
      return `Please enter a valid ${controlName}`;
    }
    return control.hasError('email') ? 'Not a valid email' : '';
  }

  public goToClient(event: Event, id: string): void {
    event.stopPropagation();
    this.navigateToClient(id);
    this.closeOverlay(this.newClient);
  }

  public goToExistingClient(id: string): void {
    this.navigateToClient(id);
    this.closeOverlay(this.newClient);
  }

  public closeAfterSubmitModal(): void {
    this.submitted = false;
  }

  public closeOverlay(dialogResult?): void {
    this.ref.close(dialogResult);
  }

  private mapClientToModel(client: Client, isStudent: boolean): Client {
    return {
      ...client,
      isStudent,
      gender: client.gender || 'unspecified',
    };
  }

  private navigateToClient(id: string): void {
    const navigationExtras: NavigationExtras = {
      skipLocationChange: true,
    };
    // TODO: refactor to use client observable from sourceData service
    this.router.navigateByUrl('/dummy', navigationExtras).then(() => {
      this.router.navigate([`client/${id}`]);
    });
  }
}*/
