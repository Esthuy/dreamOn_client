import { AbstractControl, FormControl, ValidationErrors, Validators } from "@angular/forms";


export const DREAM_INSERT_FORM = {
    'title': new FormControl("Mon rêve", [Validators.required, notBlank, Validators.maxLength(30)]), 
    'dream': new FormControl(null, [Validators.required, notBlank]),
}; 

function notBlank(control : AbstractControl) : ValidationErrors | null {
    if(control.value == null || control.value && control.value.trim() != "") 
        return null; 
    
    return {
        notBlank: {message : 'Ne peut pas être vide'}     
    }
};