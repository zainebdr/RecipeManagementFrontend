import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion'; // Importez le module ici
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormComponent } from './form/form.component';


const routes: Routes = [
  
  {path : "" ,component:AppComponent},
  {path : "recipes" ,component:RecipeListComponent},
  {path : "recipeById" ,component:RecipeListComponent},
  {path : "addRecipe" ,component:FormComponent}

];


@NgModule({
  declarations: [RecipeListComponent],
  imports: [CommonModule , 
    MatExpansionModule, 
    MatFormFieldModule,
    RouterModule.forRoot(routes),
    MatCardModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
