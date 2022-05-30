import { Dream } from "./dream.model";


export interface User{
    id : number; 
    username : string; 
    password : string; 
    email : String;
    birthdate : Date; 
    dreams : Dream[]; 
    favorites : Dream[]; 
    
}