import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {

  constructor(private shoppingListService: ShoppingListService) { }

  @Input() recipe: Recipe

  onAddToShoppingList() {
    this.shoppingListService.addIngredients(this.recipe.ingredients);
  }

}
