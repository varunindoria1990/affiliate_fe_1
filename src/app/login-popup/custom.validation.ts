import { AbstractControl, ValidationErrors } from '@angular/forms';

export class LoginFormValidation{
    static cannotContainSpace( control: AbstractControl ): ValidationErrors | null{
        if( (control.value as string).indexOf(" ") > -1 ){
            return { doesNotContainerSpace: true };
        }
        return null;
    }
}