import { Cake } from '../../model/Cake.model'
import { ItemCategory } from '../../model/Item.model'

describe('Cake Model', () => {
  const cake = new Cake(
    'Birthday',
    'Chocolate',
    'Strawberry',
    10,
    2,
    'Buttercream',
    'Chocolate',
    'Sprinkles',
    'Red',
    'Happy Birthday!',
    'Round',
    'None',
    'Organic Cocoa',
    'Gift Box',
    35.5,
    3
  )

  it('should return correct values from getters', () => {
    expect(cake.getType()).toBe('Birthday')
    expect(cake.getFlavor()).toBe('Chocolate')
    expect(cake.getFilling()).toBe('Strawberry')
    expect(cake.getSize()).toBe(10)
    expect(cake.getLayers()).toBe(2)
    expect(cake.getFrostingType()).toBe('Buttercream')
    expect(cake.getFrostingFlavor()).toBe('Chocolate')
    expect(cake.getDecorationType()).toBe('Sprinkles')
    expect(cake.getDecorationColor()).toBe('Red')
    expect(cake.getCustomMessage()).toBe('Happy Birthday!')
    expect(cake.getShape()).toBe('Round')
    expect(cake.getAllergies()).toBe('None')
    expect(cake.getSpecialIngredients()).toBe('Organic Cocoa')
    expect(cake.getPackagingType()).toBe('Gift Box')
    expect(cake.getPrice()).toBe(35.5)
    expect(cake.getQuantity()).toBe(3)
  })

  it('should return the correct category', () => {
    expect(cake.getCategory()).toBe(ItemCategory.CAKE)
  })
})
