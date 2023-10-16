import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../models/recipe.model';
import { Observable, Subject } from 'rxjs';


const baseUrl = 'http://localhost:3000/api/recipes';
//pour indiqué qu'il est un service qui peut être injecté ailleurs dans l'application
@Injectable({
  providedIn: 'root' , //service au niveau de la racine,une seule instance de ce service sera partagée par tous les composants qui injectent ce service.
})
export class RecipeService {
  //recipesChanged = new Subject<Recipe[]>()
  
  constructor(private http: HttpClient) { }

  getAllRecipes(): Observable<Recipe[]> {
    //http.get : méthode de l'instance HttpClient
    // Recipe[] indique au compilateur TypeScript le type de données attendu en réponse de la requête. 
    return this.http.get<Recipe[]>(baseUrl); // Remplacez l'URL par celle de votre API.
  }

  getRecipe(id: string) {

    return this.http.get<Recipe>(`${baseUrl}/${id}`);
  }

  addRecipe(recipe : Recipe) : Observable<Recipe> 
  {
    return this.http.post<Recipe>(baseUrl,recipe);
  }

  deleteRecipe(id : string )
  {
    return this.http.delete<Recipe>(`${baseUrl}/${id}`);
  }

  updateRecipe(id:string,recipe : Recipe)  : Observable<Recipe> 
  {
    return this.http.put<Recipe>(`${baseUrl}/${id}`,recipe);
  }
}
