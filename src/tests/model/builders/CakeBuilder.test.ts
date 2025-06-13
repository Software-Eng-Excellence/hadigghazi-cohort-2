import { CakeBuilder } from "../../../model/builders/cake.builder";
import { Cake } from "../../../model/Cake.model";

describe("CakeBuilder", () => {
  const validBase = () =>
    new CakeBuilder()
      .setType("Birthday")
      .setFlavor("Chocolate")
      .setFilling("Cream")
      .setSize(10)
      .setLayers(2)
      .setFrostingType("Buttercream")
      .setFrostingFlavor("Vanilla")
      .setDecorationType("Sprinkles")
      .setDecorationColor("Red")
      .setCustomMessage("Happy Birthday!")
      .setShape("Round")
      .setAllergies("None")
      .setSpecialIngredients("Nuts")
      .setPackagingType("Box");

  it("should build a valid Cake", () => {
    const cake = validBase().setPrice(25.0).setQuantity(1).build();
    expect(cake).toBeInstanceOf(Cake);
  });

  it("should correctly set and retrieve properties", () => {
    const cake = validBase().setPrice(25.0).setQuantity(1).build();
    expect(cake.getType()).toBe("Birthday");
    expect(cake.getFlavor()).toBe("Chocolate");
    expect(cake.getFilling()).toBe("Cream");
    expect(cake.getSize()).toBe(10);
    expect(cake.getLayers()).toBe(2);
    expect(cake.getFrostingType()).toBe("Buttercream");
    expect(cake.getFrostingFlavor()).toBe("Vanilla");
    expect(cake.getDecorationType()).toBe("Sprinkles");
    expect(cake.getDecorationColor()).toBe("Red");
    expect(cake.getCustomMessage()).toBe("Happy Birthday!");
    expect(cake.getShape()).toBe("Round");
    expect(cake.getAllergies()).toBe("None");
    expect(cake.getSpecialIngredients()).toBe("Nuts");
    expect(cake.getPackagingType()).toBe("Box");
    expect(cake.getPrice()).toBe(25.0);
    expect(cake.getQuantity()).toBe(1);
  });

  it("should throw error if a required field is missing", () => {
    expect(() => {
      new CakeBuilder().setType("Wedding").build();
    }).toThrow("Missing required properties");
  });

  it("should throw error if price is not a number", () => {
    const builder = validBase();
    expect(() => builder.setPrice(NaN)).toThrow("Price must be a valid number");
    expect(() => builder.setPrice("twenty-five" as unknown as number)).toThrow("Price must be a valid number");
  });

  it("should throw error if quantity is not a number", () => {
    const builder = validBase();
    expect(() => builder.setQuantity(NaN)).toThrow("Quantity must be a valid number");
    expect(() => builder.setQuantity("five" as unknown as number)).toThrow("Quantity must be a valid number");
  });
});