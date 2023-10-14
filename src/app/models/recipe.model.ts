export interface Recipe {
 
  _id:string;
  name: string;
  description: string;
  ingredients: string[];
  instructions: string;
  imagePath?: string; // Define the imagePath property
}
