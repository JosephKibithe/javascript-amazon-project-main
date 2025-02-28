import { addToCart, cart, loadFromStorage } from "../../data/cart.js";

describe("Test suite: addToCart", () => {
  it("adds an existing product to the cart", () => {
    const mockLocalStorage = {
      setItem: jasmine.createSpy("setItem"),
      getItem: jasmine.createSpy("getItem").and.callFake(() => {
        return JSON.stringify([
          {
            productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            quantity: 1,
            deliveryOptionId: "1",
          },
        ]);
      }),
    };
    Object.defineProperty(window, "localStorage", { value: mockLocalStorage });
    loadFromStorage();
    addToCart("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalled();
    expect(cart[0].productId).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(cart[0].quantity).toEqual(1);
  });
  it("adds an new product to the cart", () => {
    const mockLocalStorage = {
      setItem: jasmine.createSpy("setItem"),
      getItem: jasmine.createSpy("getItem").and.callFake(() => {
        return JSON.stringify(cart);
      }),
    };
    Object.defineProperty(window, "localStorage", { value: mockLocalStorage });
    loadFromStorage();
    addToCart("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalled();
    expect(cart[0].productId).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(cart[0].quantity).toEqual(2);
  });
});
