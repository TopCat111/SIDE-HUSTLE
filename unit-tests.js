// Unit tests 
test('Can initialize shopping cart with empty list', () => {
  const shoppingCart = new ShoppingCart();
  expect(shoppingCart.items).toEqual([]);
});

// This test checks that the shopping cart can add an item.
test('Can add item to shopping cart', () => {
  const shoppingCart = new ShoppingCart();
  const item = {
    id: 1,
    name: 'T-shirt',
    price: 10,
  };
  shoppingCart.addItem(item);
  expect(shoppingCart.items).toEqual([item]);
});

// This test checks that the shopping cart can get the total price of all items.
test('Can get total price of shopping cart', () => {
  const shoppingCart = new ShoppingCart();
  const item1 = {
    id: 1,
    name: 'T-shirt',
    price: 10,
  };
  const item2 = {
    id: 2,
    name: 'Jeans',
    price: 20,
  };
  shoppingCart.addItem(item1);
  shoppingCart.addItem(item2);
  expect(shoppingCart.getTotalPrice()).toEqual(30);
});
