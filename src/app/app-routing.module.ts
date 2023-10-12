import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  
  {path : "" ,component:AppComponent},
  {path : "recipes" ,component:RecipeListComponent}

];


@NgModule({
  declarations: [RecipeListComponent],
  imports: [CommonModule, RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
