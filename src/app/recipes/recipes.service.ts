import { Injectable } from '@angular/core';
import {Recipe} from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://www.thespruceeats.com/thmb/VYxi1MPOLh3W286dhp270ozcjrY=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/wiener-schnitzel-recipe-1447089-Hero-5b587d6c46e0fb0071b0059d.jpg',
      ingredients: ['French fries', 'Pork meat', 'Salad']
    },
    {
      id: 'r1',
      title: 'Schnitzel2',
      imageUrl: 'https://www.thespruceeats.com/thmb/VYxi1MPOLh3W286dhp270ozcjrY=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/wiener-schnitzel-recipe-1447089-Hero-5b587d6c46e0fb0071b0059d.jpg',
      ingredients: ['French fries2', 'Pork meat2', 'Salad2']
    }
  ];
  constructor() { }
  getAllRecipes() {
    return [...this.recipes];
  }
  getRecipe(recipeId: string) {
    return {...this.recipes.find(recipe => recipe.id === recipeId)};
  }
}
