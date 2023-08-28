import { Component, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  @Output() ingredientAdded: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

  addIngredient(name: string, amount: number){
    const newIngredient = new Ingredient(name, amount);
    this.ingredientAdded.emit(newIngredient);
  }

}
