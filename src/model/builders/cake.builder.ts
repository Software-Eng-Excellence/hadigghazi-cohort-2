import { Cake } from "../Cake.model";
import logger from "../../util/logger";

export class CakeBuilder {
  private type?: string;
  private flavor?: string;
  private filling?: string;
  private size?: number;
  private layers?: number;
  private frostingType?: string;
  private frostingFlavor?: string;
  private decorationType?: string;
  private decorationColor?: string;
  private customMessage?: string;
  private shape?: string;
  private allergies?: string;
  private specialIngredients?: string;
  private packagingType?: string;
  private price?: number;
  private quantity?: number;

  public static newBuilder(): CakeBuilder{
        return new CakeBuilder();
  }
  setType(value: string): CakeBuilder { 
    this.type = value;
    return this; 
  }
  setFlavor(value: string): CakeBuilder { 
    this.flavor = value;
    return this; 
  }
  setFilling(value: string): CakeBuilder { 
    this.filling = value;
    return this; 
  }
  setSize(value: number): CakeBuilder { 
    this.size = value;
    return this; 
  }
  setLayers(value: number): CakeBuilder { 
    this.layers = value;
    return this; 
  }
  setFrostingType(value: string): CakeBuilder { 
    this.frostingType = value;
    return this; 
  }
  setFrostingFlavor(value: string): CakeBuilder { 
    this.frostingFlavor = value;
    return this; 
  }
  setDecorationType(value: string): CakeBuilder { 
    this.decorationType = value;
    return this; 
  }
  setDecorationColor(value: string): CakeBuilder { 
    this.decorationColor = value;
    return this; 
  }
  setCustomMessage(value: string): CakeBuilder { 
    this.customMessage = value;
    return this; 
  }
  setShape(value: string): CakeBuilder { 
    this.shape = value;
    return this; 
  }
  setAllergies(value: string): CakeBuilder { 
    this.allergies = value;
    return this; 
  }
  setSpecialIngredients(value: string): CakeBuilder { 
    this.specialIngredients = value;
    return this; 
  }
  setPackagingType(value: string): CakeBuilder { 
    this.packagingType = value;
    return this; 
  }
setPrice(value: number): CakeBuilder {
  if (typeof value !== 'number' || isNaN(value)) {
    throw new Error("Price must be a valid number");
  }
  this.price = value;
  return this;
}

setQuantity(value: number): CakeBuilder {
  if (typeof value !== 'number' || isNaN(value)) {
    throw new Error("Quantity must be a valid number");
  }
  this.quantity = value;
  return this;
}


  build(): Cake {
    const requiredProperties = [
      this.type,
      this.flavor,
      this.filling,
      this.size,
      this.layers,
      this.frostingType,
      this.frostingFlavor,
      this.decorationType,
      this.decorationColor,
      this.customMessage,
      this.shape,
      this.allergies,
      this.specialIngredients,
      this.packagingType,
      this.price,
      this.quantity
    ];

    for (const property of requiredProperties) {
      if (!property) {
        logger.error("Missing required properties, could not build a cake");
        throw new Error("Missing required properties");
      }
    }

    return new Cake(
      this.type!, 
      this.flavor!, 
      this.filling!, 
      this.size!,
      this.layers ?? 1, 
      this.frostingType!, 
      this.frostingFlavor!,
      this.decorationType!, 
      this.decorationColor!,
      this.customMessage ?? "", 
      this.shape!, 
      this.allergies!,
      this.specialIngredients!, 
      this.packagingType!,
      this.price ?? 0, 
      this.quantity ?? 1
    );
  }
}
