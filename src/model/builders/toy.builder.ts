import { Toy } from "../Toy.model";
import logger from "../../util/logger";

export class ToyBuilder {
  private type?: string;
  private ageGroup?: string;
  private brand?: string;
  private material?: string;
  private batteryRequired?: boolean;
  private educational?: boolean;
  private price?: number;
  private quantity?: number;

  public static newBuilder(): ToyBuilder{
    return new ToyBuilder();
  }
  setType(value: string): ToyBuilder { 
    this.type = value;
    return this;
  }
  setAgeGroup(value: string): ToyBuilder { 
    this.ageGroup = value;
    return this;
  }
  setBrand(value: string): ToyBuilder { 
    this.brand = value;
    return this;
  }
  setMaterial(value: string): ToyBuilder { 
    this.material = value;
    return this;
  }
  setBatteryRequired(value: boolean): ToyBuilder { 
    this.batteryRequired = value;
    return this;
  }
  setEducational(value: boolean): ToyBuilder { 
    this.educational = value;
    return this;
  }
  setPrice(value: number): ToyBuilder {
  if (typeof value !== 'number' || isNaN(value)) {
    throw new Error("Price must be a valid number");
  }
  this.price = value;
  return this;
}

setQuantity(value: number): ToyBuilder {
  if (typeof value !== 'number' || isNaN(value)) {
    throw new Error("Quantity must be a valid number");
  }
  this.quantity = value;
  return this;
}

  build(): Toy {
    const requiredProperties = [
      this.type,
      this.ageGroup,
      this.brand,
      this.material,
      this.batteryRequired,
      this.educational,
      this.price,
      this.quantity
    ];

    for (const property of requiredProperties) {
      if (property === undefined || property === null) {
        logger.error("Missing required properties, could not build a toy");
        throw new Error("Missing required properties");
      }
    }

    return new Toy(
      this.type!, 
      this.ageGroup!, 
      this.brand ?? "", 
      this.material ?? "",
      this.batteryRequired ?? false, 
      this.educational ?? false,
      this.price!, this.quantity ?? 1
    );
  }
}
