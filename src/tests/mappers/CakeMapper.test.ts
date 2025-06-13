import { CakeMapper } from "../../mappers/Cake.mapper";
import { Cake } from "../../model/Cake.model";

describe("CakeMapper", () => {
  const mapper = new CakeMapper();

  const validCSV = [
    "0", "Sponge", "Vanilla", "Cream", "20", "2", "Buttercream", "Vanilla", "Sprinkles",
    "Multi-color", "Happy Birthday", "Round", "Nut-Free", "Organic Ingredients", "Standard Box", "50", "1"
  ];

  it("should map CSV to Cake", () => {
    const cake = mapper.mapFromCSV(validCSV);
    expect(cake).toBeInstanceOf(Cake);
    expect(cake.getFlavor()).toBe("Vanilla");
  });

  it("should map JSON to Cake", () => {
    const json = {
      Type: "Birthday",
      Flavor: "Chocolate",
      Filling: "Cream",
      Size: "10",
      Layers: "2",
      "Frosting Type": "Buttercream",
      "Frosting Flavor": "Vanilla",
      "Decoration Type": "Sprinkles",
      "Decoration Color": "Red",
      "Custom Message": "Happy Bday",
      Shape: "Round",
      Allergies: "None",
      "Special Ingredients": "Nuts",
      "Packaging Type": "Box",
      Price: "25.0",
      Quantity: "1"
    };
    const cake = mapper.mapFromJSON(json);
    expect(cake.getType()).toBe("Birthday");
  });

  it("should map XML to Cake", () => {
    const xml = {
      Type: "Wedding",
      Flavor: "Strawberry",
      Filling: "Jam",
      Size: "30",
      Layers: "3",
      FrostingType: "Fondant",
      FrostingFlavor: "Vanilla",
      DecorationType: "Pearls",
      DecorationColor: "White",
      CustomMessage: "Congrats!",
      Shape: "Heart",
      Allergies: "None",
      SpecialIngredients: "Rosewater",
      PackagingType: "Luxury",
      Price: "60",
      Quantity: "1"
    };
    const cake = mapper.mapFromXML(xml);
    expect(cake.getShape()).toBe("Heart");
  });

  it("should throw an error when an empty object is passed", () => {
    expect(() => mapper.mapFromJSON({})).toThrow();
    expect(() => mapper.mapFromXML({})).toThrow();
  });
});