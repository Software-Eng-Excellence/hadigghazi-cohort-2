import { Book } from '../../model/Book.model'
import { ItemCategory } from '../../model/Item.model'

describe('Book Model', () => {
  const book = new Book(
    'Clean Code',
    'Robert C. Martin',
    'Software Engineering',
    'Paperback',
    'English',
    'Prentice Hall',
    'First Edition',
    'Shrink Wrap',
    45.99,
    10
  )

  it('should return correct values from getters', () => {
    expect(book.getTitle()).toBe('Clean Code')
    expect(book.getAuthor()).toBe('Robert C. Martin')
    expect(book.getGenre()).toBe('Software Engineering')
    expect(book.getFormat()).toBe('Paperback')
    expect(book.getLanguage()).toBe('English')
    expect(book.getPublisher()).toBe('Prentice Hall')
    expect(book.getSpecialEdition()).toBe('First Edition')
    expect(book.getPackaging()).toBe('Shrink Wrap')
    expect(book.getPrice()).toBe(45.99)
    expect(book.getQuantity()).toBe(10)
  })

  it('should return the correct category', () => {
    expect(book.getCategory()).toBe(ItemCategory.BOOK)
  })
})
