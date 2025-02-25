import { formatCurrency } from "../utils/money.js";

describe("Test suite: formatCurrency", () => {
  it("should format 2095 cents as $20.95", () => {
    expect(formatCurrency(2095)).toBe("20.95");
  });
  it("works with 0", () => {
    expect(formatCurrency(0)).toEqual("0.00");
  });
  it("works with 2000.5", () => {
    expect(formatCurrency(2000.5)).toEqual("20.01");
  });
  it("works with 2000.4", () => {
    expect(formatCurrency(2000.4)).toEqual("20.00");
  });
});
