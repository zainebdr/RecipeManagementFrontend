import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import { FormArray,ReactiveFormsModule, FormControl, FormGroup, Validators,FormBuilder, NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-update',
  templateUrl: './recipe-update.component.html',
  styleUrls: ['./recipe-update.component.scss']
})
export class RecipeUpdateComponent implements OnInit  {
  id!: string;
  editMode: boolean = false;
  recipe: Recipe | undefined;
  newForm: boolean = false;
  recipeEditForm!: FormGroup; // Déclarez la propriété ici
  @ViewChild('recipesForm') form : NgForm | undefined;

  
  constructor(public route: ActivatedRoute,     private formBuilder: FormBuilder, public recipeService: RecipeService, public router: Router) { }
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.newForm = params['id'] === undefined;
      this.editMode = params['id'] != null;
      this.initForm();
       });

      this.recipeEditForm = this.formBuilder.group({
        name: ['', Validators.required],
        description: ['', Validators.required],
        ingredients: ['', Validators.required],
        instructions: ['', Validators.required] ,
        imagePath:['', Validators.required]
    });
  }


  initForm() {
    var name = "";
    //var imagePath = "";
    var description = "";
    var  instructions= "";
    var ingredients =[""];
    // new FormArray([]);

    if (this.editMode) {
      console.log('ediiit mooode');
      this.recipeService.getRecipe(this.id).subscribe((recipe) => {
        this.recipeEditForm.patchValue({description:'test'});
      name= recipe.name;
      //imagePath = recipe.imagePath;
      description = recipe.description;
      instructions= recipe.instructions;
      //ingredients=recipe.ingredients;
      for (let ingredient of recipe.ingredients) {
        ingredients.push(ingredient);
        
      }
        // Form set up Reactive
        this.recipeEditForm = new FormGroup({
          'name': new FormControl(name, Validators.required),
         // 'imagePath': new FormControl(imagePath, Validators.required),
          'description': new FormControl(description, Validators.required),
          'ingredients':  new FormControl(ingredients, Validators.required),
          'instructions': new FormControl(instructions, Validators.required),
        });
    })};
  }

    
    onCancel() {
      this.router.navigate(['/recipes']);
    }


    
  // adds altered or new recipe to recipe array
  onSubmit() {
    const newRecipe: Recipe = {
      _id:this.id,
      name: this.recipeEditForm.value['name'],
      description: this.recipeEditForm.value['description'],
      instructions: this.recipeEditForm.value['instructions'],
      ingredients: this.recipeEditForm.value['ingredients'],
    };
    if (!this.newForm) {
      if (this.recipeEditForm.valid) {
      console.log("id : ",this.id)
      console.log("newRecipe : ",newRecipe)
      this.recipeService.updateRecipe(this.id, newRecipe).subscribe
      (
        (response) => {
          console.log('Recipe',response)
        }
      );
     this.router.navigate(['/recipe/edit', this.id]);
    } else
    {alert ("Please fill out all fields")}
  }


    else {
      if (this.recipeEditForm.valid) {
      this.recipeService.addRecipe(newRecipe).subscribe(
        (res)=> 
        {console.log('response data: ', this.recipeEditForm.value); },
        (err) => console.error(err)
      );
      this.router.navigate(['/recipes'])
    }
  };  

  };


}

  
 

  


