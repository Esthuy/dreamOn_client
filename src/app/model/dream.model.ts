import { Category } from "./category.model";
import { User } from "./user.model";


export interface Dream {
    id : number; 
    title : String; 
    dream : String; 
    stars : number; 
    date : Date; 
    user : User; 
    categories : Category[]; 
}