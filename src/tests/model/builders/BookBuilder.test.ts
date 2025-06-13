import { BookBuilder } from "../../../model/builders/book.builder";
import { Book } from "../../../model/Book.model";

describe("BookBuilder", () => {
  const validBase = () =>
    new BookBuilder()
      .setTitle("1984")
      .setAuthor("George Orwell")
      .setGenre("Dystopian")
      .setFormat("Paperback")
      .setLanguage("English")
      .setPublisher("Secker & Warburg")
      .setSpecialEdition("Anniversary")
      .setPackaging("Plastic Wrap");

  it("should build a valid Book", () => {
    const book = validBase().setPrice(12.99).setQuantity(1).build();
    expect(book).toBeInstanceOf(Book);
  });

  it("should correctly set and retrieve properties", () => {
    const book = validBase().setPrice(12.99).setQuantity(1).build();
    expect(book.getTitle()).toBe("1984");
    expect(book.getAuthor()).toBe("George Orwell");
    expect(book.getGenre()).toBe("Dystopian");
    expect(book.getFormat()).toBe("Paperback");
    expect(book.getLanguage()).toBe("English");
    expect(book.getPublisher()).toBe("Secker & Warburg");
    expect(book.getSpecialEdition()).toBe("Anniversary");
    expect(book.getPackaging()).toBe("Plastic Wrap");
    expect(book.getPrice()).toBe(12.99);
    expect(book.getQuantity()).toBe(1);
  });

  it("should throw error if a required field is missing", () => {
    expect(() => {
      new BookBuilder().setTitle("Brave New World").build();
    }).toThrow("Missing required properties");
  });

  it("should throw error if price is not a valid number", () => {
    expect(() => validBase().setPrice(NaN)).toThrow("Price must be a valid number");
    expect(() => validBase().setPrice("cheap" as unknown as number)).toThrow("Price must be a valid number");
  });

  it("should throw error if quantity is not a valid number", () => {
    expect(() => validBase().setQuantity(NaN)).toThrow("Quantity must be a valid number");
    expect(() => validBase().setQuantity("many" as unknown as number)).toThrow("Quantity must be a valid number");
  });
});
