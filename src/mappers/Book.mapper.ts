import { Book } from "../model/Book.model";
import { BookBuilder } from "../model/builders/book.builder";
import { IUniversalMapper } from "./IMapper";

export class BookMapper implements IUniversalMapper<Book> {
  mapFromCSV(data: string[]): Book {
    return BookBuilder.newBuilder()
      .setTitle(data[0])
      .setAuthor(data[1])
      .setGenre(data[2])
      .setFormat(data[3])
      .setLanguage(data[4])
      .setPublisher(data[5])
      .setSpecialEdition(data[6])
      .setPackaging(data[7])
      .setPrice(parseFloat(data[8]))
      .setQuantity(parseInt(data[9]))
      .build();
  }

  mapFromJSON(data: { [key: string]: string }): Book {
    return BookBuilder.newBuilder()
      .setTitle(data["Book Title"])
      .setAuthor(data["Author"])
      .setGenre(data["Genre"])
      .setFormat(data["Format"])
      .setLanguage(data["Language"])
      .setPublisher(data["Publisher"])
      .setSpecialEdition(data["Special Edition"])
      .setPackaging(data["Packaging"])
      .setPrice(parseFloat(data["Price"]))
      .setQuantity(parseInt(data["Quantity"]))
      .build();
  }

  mapFromXML(data: { [key: string]: string }): Book {
    return BookBuilder.newBuilder()
      .setTitle(data["Title"])
      .setAuthor(data["Author"])
      .setGenre(data["Genre"])
      .setFormat(data["Format"])
      .setLanguage(data["Language"])
      .setPublisher(data["Publisher"])
      .setSpecialEdition(data["SpecialEdition"])
      .setPackaging(data["Packaging"])
      .setPrice(parseFloat(data["Price"]))
      .setQuantity(parseInt(data["Quantity"]))
      .build();
  }
}