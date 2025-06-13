import { Toy } from '../../model/Toy.model'
import { ItemCategory } from '../../model/Item.model'

describe('Toy Model', () => {
  const toy = new Toy(
    'Robot',
    '3-5',
    'TechToys',
    'Plastic',
    true,
    false,
    24.99,
    7
  )

  it('should return correct values from getters', () => {
    expect(toy.getType()).toBe('Robot')
    expect(toy.getAgeGroup()).toBe('3-5')
    expect(toy.getBrand()).toBe('TechToys')
    expect(toy.getMaterial()).toBe('Plastic')
    expect(toy.isBatteryRequired()).toBe(true)
    expect(toy.isEducational()).toBe(false)
    expect(toy.getPrice()).toBe(24.99)
    expect(toy.getQuantity()).toBe(7)
  })

  it('should return the correct category', () => {
    expect(toy.getCategory()).toBe(ItemCategory.TOY)
  })
})
