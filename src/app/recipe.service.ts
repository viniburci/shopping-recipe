import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipes/recipe.model';
import { Ingredient } from './shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor() {}

  recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Ratatouille',
      'Legumes assados',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
      [
        new Ingredient('Abobrinha', 1),
        new Ingredient('Beringela', 1),
        new Ingredient('Azeite', 1),
        new Ingredient('Cebola', 1/2),
        new Ingredient('Tomate', 5),
        new Ingredient('Alecrim', 1),
        new Ingredient('Pimenta-do-reino', 1),
        new Ingredient('Manjericao', 1),
      ]
    ),
    new Recipe(
      'A test recipe 2',
      'Recipe description 2',
      'https://img.buzzfeed.com/video-api-prod/assets/eb44570519264864814264f7f0a5e47a/BFV13909_BakedRatatouille-ThumbTextless1080.jpg?resize=1200:*',
      [
        new Ingredient('Tomato', 2),
      ]
    ),
  ];

  getRecipes() {
    //retorna uma copia do array de receitas ao inves de passar a referencia do objeto
    return this.recipes.slice();
  }
}
