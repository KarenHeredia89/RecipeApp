import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  @Output() recipeWasSelected = new EventEmitter<Recipe>();    
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simple test', 'https://dam.cocinafacil.com.mx/wp-content/uploads/2019/10/dulce-calabaza.jpg'),
    new Recipe('A Test Recipe', 'This is a simple test', 'https://www.vidactual.com/rcpmaker/wp-content/uploads/2020/10/PandeMuerto.png')

  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected( recipe: Recipe ) {
    this.recipeWasSelected.emit(recipe);
  }

}
