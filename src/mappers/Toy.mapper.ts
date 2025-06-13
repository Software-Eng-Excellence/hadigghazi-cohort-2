import { Toy } from "../model/Toy.model";
import { ToyBuilder } from "../model/builders/toy.builder";
import { IUniversalMapper } from "./IMapper";

export class ToyMapper implements IUniversalMapper<Toy> {
  private toBool(str: string): boolean {
    return str?.toLowerCase() === 'yes';
  }

  mapFromCSV(data: string[]): Toy {
    return ToyBuilder.newBuilder()
      .setType(data[0])
      .setAgeGroup(data[1])
      .setBrand(data[2])
      .setMaterial(data[3])
      .setBatteryRequired(this.toBool(data[4]))
      .setEducational(this.toBool(data[5]))
      .setPrice(parseFloat(data[6]))
      .setQuantity(parseInt(data[7]))
      .build();
  }

  mapFromJSON(data: { [key: string]: string }): Toy {
    return ToyBuilder.newBuilder()
      .setType(data["Type"])
      .setAgeGroup(data["AgeGroup"])
      .setBrand(data["Brand"])
      .setMaterial(data["Material"])
      .setBatteryRequired(this.toBool(data["BatteryRequired"]))
      .setEducational(this.toBool(data["Educational"]))
      .setPrice(parseFloat(data["Price"]))
      .setQuantity(parseInt(data["Quantity"]))
      .build();
  }

  mapFromXML(data: { [key: string]: string }): Toy {
    return ToyBuilder.newBuilder()
      .setType(data["Type"])
      .setAgeGroup(data["AgeGroup"])
      .setBrand(data["Brand"])
      .setMaterial(data["Material"])
      .setBatteryRequired(this.toBool(data["BatteryRequired"]))
      .setEducational(this.toBool(data["Educational"]))
      .setPrice(parseFloat(data["Price"]))
      .setQuantity(parseInt(data["Quantity"]))
      .build();
  }
}
