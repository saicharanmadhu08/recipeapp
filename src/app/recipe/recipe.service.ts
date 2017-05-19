import { ShoppingListService } from '../shopping-list/shoppin-list.service';
import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter,Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
               'Tasty Scnitzel', 
               'A Super-Tasty Scnitzel - Just Awesome', 
               'http://givememora.com/wp-content/uploads/2014/03/shnitzel.jpg',
               [
                   new Ingredient('Meat',1),
                   new Ingredient('French Fries',20)                   
               ]
               ),
        new Recipe('Another Test Recipe', 
        'This is simply a test', 
        'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg',
        [
            new Ingredient('Meat',1),
            new Ingredient('French Fries',20)   
        ])
    ];

    constructor(private slService: ShoppingListService){}

    getRecipes(){
        return this.recipes.slice();
    }

    onAddToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}