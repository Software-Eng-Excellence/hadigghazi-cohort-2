import { Book } from "../Book.model";
import logger from "../../util/logger";

export class BookBuilder {
  private title?: string;
  private author?: string;
  private genre?: string;
  private format?: string;
  private language?: string;
  private publisher?: string;
  private specialEdition?: string;
  private packaging?: string;
  private price?: number;
  private quantity?: number;

  public static newBuilder(): BookBuilder{
      return new BookBuilder();
  }
  setTitle(value: string): BookBuilder { 
    this.title = value;
    return this; 
  }
  setAuthor(value: string): BookBuilder { 
    this.author = value
    return this;
  }
  setGenre(value: string): BookBuilder { 
    this.genre = value;
    return this; 
  }
  setFormat(value: string): BookBuilder { 
    this.format = value
    return this;
  }
  setLanguage(value: string): BookBuilder { 
    this.language = value; 
    return this; 
  }
  setPublisher(value: string): BookBuilder { 
    this.publisher = value; 
    return this; 
  }
  setSpecialEdition(value: string): BookBuilder { 
    this.specialEdition= value; 
    return this; 
  }
  setPackaging(value: string): BookBuilder { 
    this.packaging = value; 
    return this;
  }
setPrice(value: number): BookBuilder {
  if (typeof value !== 'number' || isNaN(value)) {
    throw new Error("Price must be a valid number");
  }
  this.price = value;
  return this;
}

setQuantity(value: number): BookBuilder {
  if (typeof value !== 'number' || isNaN(value)) {
    throw new Error("Quantity must be a valid number");
  }
  this.quantity = value;
  return this;
}

  build(): Book {
    const requiredProperties = [
      this.title,
      this.author,
      this.genre,
      this.format,
      this.language,
      this.publisher,
      this.specialEdition,
      this.packaging,
      this.price,
      this.quantity
    ];

    for (const property of requiredProperties) {
      if (!property) {
        logger.error("Missing required properties, could not build a book");
        throw new Error("Missing required properties");
      }
    }

    return new Book(
      this.title!, 
      this.author!, 
      this.genre ?? "", 
      this.format ?? "",
      this.language ?? "", 
      this.publisher ?? "", 
      this.specialEdition ?? "",
      this.packaging ?? "", 
      this.price!, 
      this.quantity ?? 1
    );
  }
}
