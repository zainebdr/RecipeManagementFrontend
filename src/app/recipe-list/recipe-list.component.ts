import { APP_ID, Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../models/recipe.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
//import { FormFieldOverviewExampleComponent } from '../form-field-overview-example/form-field-overview-example.component';



@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
  template: `
  <h1>Recipe Component</h1>
  <app-form-field-overview-example></app-form-field-overview-example>
 <!-- Inclusion du sous-composant -->
`,
})

export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
 
  constructor(private recipeService: RecipeService) {


  }
// pour effectuer des opérations telles que la récupération de données depuis un service, l'initialisation de variables, la configuration d'observables, etc.
  ngOnInit() {
   this.getAllRecipes()  }

  getAllRecipes()
  {
  this.recipeService.getAllRecipes().subscribe(
    (data) => {
    console.log('response data: ', data);
    this.recipes = data;
    //err
  })};
  /*
  getRecipe()
  {
  this.recipeService.getRecipe(id)).subscribe(
    (data) => {
    console.log('response data: ', data);
    this.recipes = data;
    //err
  }
  )};*/

  

}
