import { BookMapper } from "../../mappers/Book.mapper";
import { Book } from "../../model/Book.model";

describe("BookMapper", () => {
  const mapper = new BookMapper();

  const jsonData = {
    "Book Title": "The Alchemist",
    "Author": "Paulo Coelho",
    "Genre": "Adventure",
    "Format": "Paperback",
    "Language": "English",
    "Publisher": "HarperOne",
    "Special Edition": "Illustrated",
    "Packaging": "Shrink Wrap",
    "Price": "25.5",
    "Quantity": "3"
  };

  it("should map JSON to Book", () => {
    const book = mapper.mapFromJSON(jsonData);
    expect(book).toBeInstanceOf(Book);
    expect(book.getTitle()).toBe("The Alchemist");
  });

  it("should map CSV to Book", () => {
    const row = [
      "The Alchemist", "Paulo Coelho", "Adventure", "Paperback", "English", "HarperOne",
      "Illustrated", "Shrink Wrap", "25.5", "3"
    ];
    const book = mapper.mapFromCSV(row);
    expect(book.getAuthor()).toBe("Paulo Coelho");
  });

  it("should map XML to Book", () => {
    const xmlData = {
      Title: "The Alchemist",
      Author: "Paulo Coelho",
      Genre: "Adventure",
      Format: "Paperback",
      Language: "English",
      Publisher: "HarperOne",
      SpecialEdition: "Illustrated",
      Packaging: "Shrink Wrap",
      Price: "25.5",
      Quantity: "3"
    };
    const book = mapper.mapFromXML(xmlData);
    expect(book.getFormat()).toBe("Paperback");
  });

  it("should throw an error when an empty object is passed", () => {
    expect(() => mapper.mapFromJSON({})).toThrow();
    expect(() => mapper.mapFromXML({})).toThrow();
  });
});