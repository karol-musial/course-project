import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from "./header/header.component";
import { RecipeListComponent } from './recipies/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipies/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipies/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipiesComponent } from './recipies/recipies.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    RecipiesComponent,
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
