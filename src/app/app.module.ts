import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
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
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { RecipeHomeComponent } from './recipe-home/recipe-home.component';
import { UserService } from './services/user.service';
import { AuthComponent } from './auth/auth.component';
import { JwtInterceptor } from './services/jwt.interceptor';
import { CookieService } from 'ngx-cookie-service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    
    RecipeItemComponent,
    RecipeListComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeCreateComponent,
    RecipeUpdateComponent,
    RecipeHomeComponent,
    AuthComponent,
    
  
    

   
   
  ],
  imports: [
    BrowserModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatCardModule,
    HttpClientModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatExpansionModule,
    MatFormFieldModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [RecipeService,UserService,{provide: HTTP_INTERCEPTORS ,useClass:  JwtInterceptor,multi:true},CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
