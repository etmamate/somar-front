import { Component, Input } from '@angular/core';
import { ReactiveFormsModule, ɵInternalFormsSharedModule } from "@angular/forms";

type InputTypes = "text" | "email" | "password"

@Component({
  selector: 'app-primary-input',
  imports: [ɵInternalFormsSharedModule,
    ReactiveFormsModule
  ],
  templateUrl: './primary-input.html',
  styleUrl: './primary-input.scss'
})
export class PrimaryInput {
  @Input() type: InputTypes = "text";
  @Input() formName: string = "";
  @Input() placeHolder: string = "";
  @Input() label: string = "";
}
