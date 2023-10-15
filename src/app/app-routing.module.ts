import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion'; // Importez le module ici
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormComponent } from './form/form.component';
import { RecipeDetailComponent } from './recipe-list/recipe-detail/recipe-detail.component';
import { RecipeCreateComponent } from './recipe-create/recipe-create.component';
import { RecipeUpdateComponent } from './recipe-update/recipe-update.component';
const routes: Routes = [
  
  {path : "" ,component:AppComponent},
  {path : "recipes" ,component:RecipeListComponent,
  children: [
    {path : ":id" ,component:RecipeDetailComponent},
  ]},
  {path : "recipe/new" ,component:RecipeCreateComponent},
  {path : "recipe/edit/:id" ,component:RecipeUpdateComponent}

];


@NgModule({
  declarations: [],
  imports: [
   
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
