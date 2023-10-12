import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
 
  constructor(private recipeService: RecipeService) {}
// pour effectuer des opérations telles que la récupération de données depuis un service, l'initialisation de variables, la configuration d'observables, etc.
  ngOnInit() {
    this.recipeService.getRecipes().subscribe((data) => {
      console.log('response data: ', data);
      this.recipes = data;
    });
  }

}
