import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  imports: [FormsModule],
  templateUrl: './add-item.html',
  styleUrl: './add-item.css'
})
export class AddItem {
  newItem: string = '';

  @Output() itemAdded = new EventEmitter<string>();

  addItem(): void {
    if (this.newItem.trim() !== '') {
      this.itemAdded.emit(this.newItem);
      this.newItem = '';
    }
  }
}