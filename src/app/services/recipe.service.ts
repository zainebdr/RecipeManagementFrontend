import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../models/recipe.model';
import { Observable } from 'rxjs';


const baseUrl = 'http://localhost:3000/api/recipes';
//pour indiqué qu'il est un service qui peut être injecté ailleurs dans l'application
@Injectable({
  providedIn: 'root' , //service au niveau de la racine,une seule instance de ce service sera partagée par tous les composants qui injectent ce service.
})
export class RecipeService {
  
  constructor(private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    //http.get : méthode de l'instance HttpClient
    // Recipe[] indique au compilateur TypeScript le type de données attendu en réponse de la requête. 
    return this.http.get<Recipe[]>(baseUrl); // Remplacez l'URL par celle de votre API.
  }

  getRecipe(id: string) {

    return this.http.get('/api/recipes/' + id);
  }

  postRecipe()
  {
    return null;
  }

  deleteRecipe(id : string )
  {
    return 0 ;
  }

  updateRecipe(id:string)
  {
    return false;
  }
}
