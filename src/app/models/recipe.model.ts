export interface Recipe {
 
  _id:string;
  name: string;
  description: string;
  ingredients: string[];
  instructions: string;
  imagePath?: "assets/Tomato-Basil-Pasta-003.jpg" // Define the imagePath property
}
