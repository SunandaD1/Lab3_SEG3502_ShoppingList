import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingList } from './shopping-list';

describe('ShoppingList', () => {
  let component: ShoppingList;
  let fixture: ComponentFixture<ShoppingList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingList],
    }).compileComponents();

    fixture = TestBed.createComponent(ShoppingList);
    component = fixture.componentInstance;
    component.items = ['5 pommes', '12 oeufs'];
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the index when deleting an item', () => {
    let emitted: number | undefined;
    component.itemDeleted.subscribe((i: number) => (emitted = i));
    component.deleteItem(1);
    expect(emitted).toBe(1);
  });
});