import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-list/recipe-detail/recipe-detail.component';
import { RecipeCreateComponent } from './recipe-create/recipe-create.component';
import { RecipeUpdateComponent } from './recipe-update/recipe-update.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
   {path : "" ,component:AuthComponent},
  //{path : "auth/:mode" ,component:AuthComponent},
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
