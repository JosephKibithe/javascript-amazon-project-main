import { renderOrderSummary } from "../../src/checkout/orderSummary.js";

describe("Test suite: renderOrderSummary", () => {
  it("displays the cart", () => {
    document.querySelector(".js-test-container").innerHTML = `
            <div class="js-order-summary"></div>
        `;
  });
});
