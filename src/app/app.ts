import { Component } from '@angular/core';
import { AddItem } from './add-item/add-item';
import { ShoppingList } from './shopping-list/shopping-list';

@Component({
  selector: 'app-root',
  imports: [AddItem, ShoppingList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  items: string[] = [];

  addItem(item: string): void {
    this.items.push(item);
  }

  deleteItem(index: number): void {
    this.items.splice(index, 1);
  }
}