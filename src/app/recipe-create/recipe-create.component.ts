import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.scss']
})
export class RecipeCreateComponent implements OnInit {
  recipeEditForm: FormGroup;
   // Déclarez et initialisez le tableau d'ingrédients
   ingredients: FormArray;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private recipeService: RecipeService,
    private router: Router
  ) {
    this.ingredients = this.fb.array([''], Validators.required); // Initialisez avec un ingrédient vide
    this.recipeEditForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      instructions: ['', Validators.required],
      imagePath: ['', Validators.required],
      ingredients: this.ingredients // Associez le tableau d'ingrédients au formulaire
    });
  }

  ngOnInit(): void {
   
  }

    

  onCancel() {
    this.router.navigate(['/recipes']);
  }

  addIngredient() : FormArray {
    const ingredientsControl = this.recipeEditForm.get('ingredients') as FormArray;
    ingredientsControl.push(this.fb.control(''));
    return ingredientsControl;
    
  //  const ingredientsControl = this.recipeEditForm.get('ingredients') as FormArray;
    console.log('ingredieents ', ingredientsControl.value);
   // ingredientsControl.push(this.fb.control(''));
  }

  removeIngredient(index: number) {
    const ingredientsControl = this.recipeEditForm.get('ingredients') as FormArray;
    ingredientsControl.removeAt(index);
  }

  onSubmit() {
    if (this.recipeEditForm.valid) {
      const recipeData: Recipe = this.mapFormGroupToRecipe(this.recipeEditForm);
          // Récupérez les ingrédients du formulaire
    const ingredients = this.recipeEditForm.get('ingredients')?.value;

    // Ajoutez les ingrédients à votre objet recipeData
    recipeData.ingredients = ingredients;

      this.recipeService.addRecipe(recipeData).subscribe(
        (res) => {
          console.log('Recipe added:', recipeData);
        },
        (err) => console.error(err)
      );

      this.router.navigate(['/recipes']);
    }
  }

  private mapFormGroupToRecipe(formGroup: FormGroup): Recipe {
    const name = formGroup.get('name')?.value || '';
    const description = formGroup.get('description')?.value || '';
    const ingredients = formGroup.get('ingredients')?.value || [];
    const instructions = formGroup.get('instructions')?.value || '';
    const imagePath = formGroup.get('imagePath')?.value || '';

    const recipe: Recipe = {
      _id: '',
      name,
      description,
      ingredients,
      instructions,
      imagePath
      // Add other properties here
    };

    return recipe;
  }
}
