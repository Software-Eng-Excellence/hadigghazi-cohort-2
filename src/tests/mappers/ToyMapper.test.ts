import { ToyMapper } from "../../mappers/Toy.mapper";
import { Toy } from "../../model/Toy.model";

describe("ToyMapper", () => {
  const mapper = new ToyMapper();

  const json = {
    Type: "Action Figure",
    AgeGroup: "4-7",
    Brand: "FunTime",
    Material: "Foam",
    BatteryRequired: "Yes",
    Educational: "No",
    Price: "49.99",
    Quantity: "2"
  };

  it("should map JSON to Toy", () => {
    const toy = mapper.mapFromJSON(json);
    expect(toy).toBeInstanceOf(Toy);
    expect(toy.getType()).toBe("Action Figure");
  });

  it("should map CSV to Toy", () => {
    const csv = ["Car", "3-5", "Speedy", "Plastic", "no", "yes", "19.99", "5"];
    const toy = mapper.mapFromCSV(csv);
    expect(toy.getBrand()).toBe("Speedy");
    expect(toy.isBatteryRequired()).toBe(false);
    expect(toy.isEducational()).toBe(true);
  });

  it("should map XML to Toy", () => {
    const xml = {
      Type: "Drone",
      AgeGroup: "10+",
      Brand: "FlyTech",
      Material: "Metal",
      BatteryRequired: "yes",
      Educational: "no",
      Price: "120.00",
      Quantity: "1"
    };
    const toy = mapper.mapFromXML(xml);
    expect(toy.getMaterial()).toBe("Metal");
  });

  it("should throw an error when an empty object is passed", () => {
    expect(() => mapper.mapFromJSON({})).toThrow();
    expect(() => mapper.mapFromXML({})).toThrow();
  });
});