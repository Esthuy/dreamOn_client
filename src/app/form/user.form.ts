import { AbstractControl, FormControl, ValidationErrors, Validators } from "@angular/forms";


export const USER_INSERT_FORM = {
    'username': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]), 
    'email': new FormControl(null, [Validators.required, Validators.email, notBlank]),
    'birthdate' : new FormControl(null, [Validators.required, notBlank, birthdateBeforeToday]),
    'password': new FormControl(null, [Validators.required, Validators.minLength(6), notBlank]), 
    'confirmationPassword' : new FormControl (null, Validators.required)
};



function notBlank(control : AbstractControl) : ValidationErrors | null {
    if(control.value == null || control.value && control.value.trim() != "") 
        return null; 
    
    return {
        notBlank: {message : 'Ne peut pas être vide'}     
    }
};


function birthdateBeforeToday(control : AbstractControl) : ValidationErrors | null {
    const today = Date.parse(Date())

    if(control.value == null || Date.parse(control.value) < today){
        return null; 
    }
    return{
        birthdateBeforeToday : {message: 'Date de naissance invalide'}
    }
};

export function samePasswords(control : AbstractControl) : ValidationErrors | null {
    if(control.value.password == control.value.confirmationPassword){
        return null; 
    }
    return{
        samePasswords : {message: 'Les deux mot de passes doivent être identiques'}
    }
};