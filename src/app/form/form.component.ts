import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { RecipeListComponent } from '../recipe-list/recipe-list.component';
import { RecipeService } from '../services/recipe.service'
import { Recipe } from '../models/recipe.model';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent {
  constructor(private recipeService: RecipeService) {}

  registerForm = new FormGroup({
    name: new FormControl('', [ Validators.required]),
    description: new FormControl('', [Validators.required]),
    ingredients: new FormControl('', [Validators.required]),
    instructions: new FormControl('', Validators.required)
  });
  

  onSubmit() {
    if (this.registerForm.valid) {
        const recipeData: Recipe = this.mapFormGroupToRecipe(this.registerForm);
  
      // Effectuez ici votre requête ou toute autre logique associée à la soumission du formulaire.
      // Vous pouvez utiliser this.registerForm.value pour accéder aux valeurs des contrôles.
      console.log( this.registerForm.value)
   
    this.recipeService.addRecipe(recipeData).subscribe(
      (res)=> 
      {
      
        console.log('response data: ', this.registerForm.value);
      },
      (err) => console.error(err)
    )
  
  
      // Exemple de requête HTTP  :
       //this.RecipeListComponent.addRecipe(this.registerForm.value).subscribe(response => {
        //console.log(response)
       //   });
  }
}
private mapFormGroupToRecipe(formGroup: FormGroup): Recipe {
  // Vérifiez d'abord que le FormGroup est défini
  if (!formGroup) {
    throw new Error('FormGroup is not defined');
  }

  // Ensuite, vérifiez que chaque contrôle de formulaire contient une valeur valide
  const name = formGroup.get('name');
  const description = formGroup.get('description');
  const ingredients = formGroup.get('ingredients');
  const instructions = formGroup.get('instructions');

  if (!name || !description || !ingredients || !instructions) {
    throw new Error('One or more form controls are not defined');
  }

  // Enfin, créez le Recipe en vous assurant que chaque valeur est définie
  const recipe: Recipe = {
    _id:'',
    name: name.value || '', // Utilisez une valeur par défaut si la valeur est null ou undefined
    description: description.value || '',
    ingredients: ingredients.value || '',
    instructions: instructions.value || '',
    // Ajoutez d'autres propriétés ici
  };

  return recipe;
}

  }




