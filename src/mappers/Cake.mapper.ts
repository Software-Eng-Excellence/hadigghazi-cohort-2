import { Cake } from "../model/Cake.model";
import { CakeBuilder } from "../model/builders/cake.builder";
import { IUniversalMapper } from "./IMapper";

export class CakeMapper implements IUniversalMapper<Cake> {
  mapFromCSV(data: string[]): Cake {
    return CakeBuilder.newBuilder()
      .setType(data[1])
      .setFlavor(data[2])
      .setFilling(data[3])
      .setSize(parseInt(data[4]))
      .setLayers(parseInt(data[5]))
      .setFrostingType(data[6])
      .setFrostingFlavor(data[7])
      .setDecorationType(data[8])
      .setDecorationColor(data[9])
      .setCustomMessage(data[10])
      .setShape(data[11])
      .setAllergies(data[12])
      .setSpecialIngredients(data[13])
      .setPackagingType(data[14])
      .setPrice(parseFloat(data[15]))
      .setQuantity(parseInt(data[16]))
      .build();
  }

  mapFromJSON(data: { [key: string]: string }): Cake {
    return CakeBuilder.newBuilder()
      .setType(data["Type"])
      .setFlavor(data["Flavor"])
      .setFilling(data["Filling"])
      .setSize(parseInt(data["Size"]))
      .setLayers(parseInt(data["Layers"]))
      .setFrostingType(data["Frosting Type"])
      .setFrostingFlavor(data["Frosting Flavor"])
      .setDecorationType(data["Decoration Type"])
      .setDecorationColor(data["Decoration Color"])
      .setCustomMessage(data["Custom Message"])
      .setShape(data["Shape"])
      .setAllergies(data["Allergies"])
      .setSpecialIngredients(data["Special Ingredients"])
      .setPackagingType(data["Packaging Type"])
      .setPrice(parseFloat(data["Price"]))
      .setQuantity(parseInt(data["Quantity"]))
      .build();
  }

  mapFromXML(data: { [key: string]: string }): Cake {
    return CakeBuilder.newBuilder()
      .setType(data["Type"])
      .setFlavor(data["Flavor"])
      .setFilling(data["Filling"])
      .setSize(parseInt(data["Size"]))
      .setLayers(parseInt(data["Layers"]))
      .setFrostingType(data["FrostingType"])
      .setFrostingFlavor(data["FrostingFlavor"])
      .setDecorationType(data["DecorationType"])
      .setDecorationColor(data["DecorationColor"])
      .setCustomMessage(data["CustomMessage"])
      .setShape(data["Shape"])
      .setAllergies(data["Allergies"])
      .setSpecialIngredients(data["SpecialIngredients"])
      .setPackagingType(data["PackagingType"])
      .setPrice(parseFloat(data["Price"]))
      .setQuantity(parseInt(data["Quantity"]))
      .build();
  }
}
