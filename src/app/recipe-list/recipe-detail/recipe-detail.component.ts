import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { Params, ActivatedRoute ,Router} from '@angular/router';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  recipe!: Recipe;
  //recipe!: Observable<Recipe>; // Utilisez un Observable pour stocker la recette
  id!: string;
  constructor(private recipeService: RecipeService, private route: ActivatedRoute,private router: Router) 
  { }
 
  ngOnInit() {
      //listen and get recipe from route params id
      this.route.paramMap.subscribe(params => {
       
      console.log('Params id :', params);
     
       const id = params.get('id');
       if (id !== null){
        this.recipeService.getRecipe(id).subscribe(recipe => {
        console.log('recippe',recipe);
        this.recipe = recipe;
        });
      }
      else
      console.log(Error.toString)
    
    });
   
    
  }
  reloadCurrentRoute() {
    const currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }
  deleteRep(recipeId: string) {
    if (recipeId !== null){
     
      this.recipeService.deleteRecipe(recipeId).subscribe((res =>
        console.log(res))
        );
        this.reloadCurrentRoute();


      
  }
}



}

