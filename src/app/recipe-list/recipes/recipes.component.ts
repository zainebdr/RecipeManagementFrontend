import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[] = [];
  constructor(private recipeService: RecipeService) {
  }
// pour effectuer des opérations telles que la récupération de données depuis un service, l'initialisation de variables, la configuration d'observables, etc.
  ngOnInit() {
   this.getAllRecipes() 
   }

  getAllRecipes()
  {
  this.recipeService.getAllRecipes().subscribe(
    (data) => {
    console.log('response data: ', data);
    this.recipes = data;
    //err
  })};
 

}
