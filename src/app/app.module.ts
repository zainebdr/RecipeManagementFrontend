import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipeItemComponent } from './recipe-list/recipes/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeService } from './services/recipe.service';
import { MatCardModule } from '@angular/material/card';
import { RecipesComponent } from './recipe-list/recipes/recipes.component';
import { RecipeDetailComponent } from './recipe-list/recipe-detail/recipe-detail.component';
import { RecipeCreateComponent } from './recipe-create/recipe-create.component';
import { RecipeUpdateComponent } from './recipe-update/recipe-update.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    RecipeItemComponent,
    RecipeListComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeCreateComponent,
    RecipeUpdateComponent
    

   
   
  ],
  imports: [
    BrowserModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatCardModule,
    HttpClientModule,
    MatInputModule,
    MatExpansionModule,
    MatFormFieldModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
