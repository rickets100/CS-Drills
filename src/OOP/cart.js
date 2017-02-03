var Item = require('./item');

function itemDescription(cartItem) {
  return `${cartItem.item.name} - $${cartItem.item.price.toFixed(1)}`
}

class Cart {

  constructor() {
    this.items = []
    this.totalPrice = 0
  }

  addItem(item, quantity = 1) {
    this.totalPrice += item.price * quantity
    this.items.push({item, quantity})
  }

  itemizedList() {
    return this.items.map(itemDescription)
  }

  itemQuantities() {
    return this.items.map(i => `${i.item.name} - ${i.quantity}`)
  }

  onSaleItems() {
    return this.items.filter(i => i.item.onSale).map(itemDescription)
  }
}

module.exports = Cart;
