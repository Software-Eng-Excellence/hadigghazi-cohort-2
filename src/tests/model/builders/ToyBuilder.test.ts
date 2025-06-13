import { ToyBuilder } from "../../../model/builders/toy.builder";
import { Toy } from "../../../model/Toy.model";

describe("ToyBuilder", () => {
  const validBase = () =>
    new ToyBuilder()
      .setType("Action Figure")
      .setAgeGroup("5-10")
      .setBrand("ToyBrand")
      .setMaterial("Plastic")
      .setBatteryRequired(false)
      .setEducational(true);

  it("should build a valid Toy", () => {
    const toy = validBase().setPrice(19.99).setQuantity(3).build();
    expect(toy).toBeInstanceOf(Toy);
  });

  it("should correctly set and retrieve properties", () => {
    const toy = validBase().setPrice(19.99).setQuantity(3).build();
    expect(toy.getType()).toBe("Action Figure");
    expect(toy.getAgeGroup()).toBe("5-10");
    expect(toy.getBrand()).toBe("ToyBrand");
    expect(toy.getMaterial()).toBe("Plastic");
    expect(toy.isBatteryRequired()).toBe(false);
    expect(toy.isEducational()).toBe(true);
    expect(toy.getPrice()).toBe(19.99);
    expect(toy.getQuantity()).toBe(3);
  });

  it("should throw error if a required field is missing", () => {
    expect(() => {
      new ToyBuilder().setType("Car").build();
    }).toThrow("Missing required properties");
  });

  it("should throw error if price is not a valid number", () => {
    const builder = validBase();
    expect(() => builder.setPrice(NaN)).toThrow("Price must be a valid number");
    expect(() => builder.setPrice("cheap" as unknown as number)).toThrow("Price must be a valid number");
  });

  it("should throw error if quantity is not a valid number", () => {
    const builder = validBase();
    expect(() => builder.setQuantity(NaN)).toThrow("Quantity must be a valid number");
    expect(() => builder.setQuantity("many" as unknown as number)).toThrow("Quantity must be a valid number");
  });
});