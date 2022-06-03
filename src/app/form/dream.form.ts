import { AbstractControl, FormControl, ValidationErrors, Validators } from "@angular/forms";
import { formatDate } from '@angular/common';


export const DREAM_INSERT_FORM = {
    'title': new FormControl("Mon rêve", [Validators.required, Validators.maxLength(30)]), 
    'dream': new FormControl(null, Validators.required),
    'date': new FormControl(formatDate(Date(), 'yyyy-MM-dd', 'en'), [Validators.required, dateBeforeToday]), 
    'stars': new FormControl(null, max5stars), 
    'categories': new FormControl(null)
}; 

function max5stars(control : AbstractControl) : ValidationErrors | null {
    if( control.value == null || (control.value < 6 && control.value >= 0)) 
        return null; 

    return {
        max5stars: {message : 'Mettez une note de 5 étoiles maximum'}     
    }
};

function dateBeforeToday(control : AbstractControl) : ValidationErrors | null {
    const today = Date.parse(Date())

    if(control.value == null || Date.parse(control.value) < today)
        return null; 
    
    return{
        dateBeforeToday : {message: 'Veuillez entrer une date valide svp.'}
    }
};
