import { Category } from "./category.model";


export interface Dream {
    id : number; 
    title : String; 
    dream : String; 
    stars : number; 
    date : Date; 
    user : number; 
    reference : number,
    categories : Category[]; 
}