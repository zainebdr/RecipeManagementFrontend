import {Component, OnInit} from '@angular/core';
import { FormArray,ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.scss']
})


export class RecipeCreateComponent implements OnInit  {

  constructor(public route: ActivatedRoute, public recipeService: RecipeService, public router: Router) { }
  ngOnInit(): void {
  
  }


    // Form set up Reactive
      recipeEditForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      ingredients: new FormControl('', Validators.required),
      instructions: new FormControl('', Validators.required) ,
      imagePath: new FormControl('', Validators.required)
      
    });
    onCancel() {
      this.router.navigate(['/recipes']);
    }
  
  // adds altered or new recipe to recipe array
  onSubmit() {

    if (this.recipeEditForm.valid) {
      const recipeData: Recipe = this.mapFormGroupToRecipe(this.recipeEditForm);

    // Effectuez ici votre requête ou toute autre logique associée à la soumission du formulaire.
    // Vous pouvez utiliser this.recipeEditForm.value pour accéder aux valeurs des contrôles.
    console.log( this.recipeEditForm.value)
 
  this.recipeService.addRecipe(recipeData).subscribe(
    (res)=> 
    {
    
      console.log('response data: ', this.recipeEditForm.value);
    },
    (err) => console.error(err)
  )
  this.router.navigate(['/recipes'])


  };


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


