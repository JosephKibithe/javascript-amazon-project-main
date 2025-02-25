import { formatCurrency } from "../utils/money.js";
// Test that formatCurrency is working correctly by checking that it formats 2095 cents as $20.95 and 0 cents as FREE. If it is working correctly, the test will log "formatCurrency is working" to the console. If it is not working correctly, the test will log "formatCurrency is not working" to the console.
console.log("Testing formatCurrency working with 2095 cents as $20.95");
if (formatCurrency(2095) === "20.95") {
  console.log("formatCurrency is working");
} else {
  console.log("formatCurrency is not working");
}
console.log("Testing formatCurrency working with 0 cents");
if (formatCurrency(0) === "0.00") {
  console.log("formatCurrency is working");
} else {
  console.log("formatCurrency is not working");
}
console.log("Testing formatCurrency working with 2005 cents as $20.01");
if (formatCurrency(2000.5) === "20.01") {
  console.log("formatCurrency is working");
} else {
  console.log("formatCurrency is not working");
}
console.log("Testing formatCurrency working with 2004 cents as $20.00");
if (formatCurrency(2000.4) === "20.00") {
  console.log("formatCurrency is working");
} else {
  console.log("formatCurrency is not working");
}
console.log("Testing formatCurrency working with 2006 cents as $20.01");
if (formatCurrency(2000.6) === "20.01") {
  console.log("formatCurrency is working");
} else {
  console.log("formatCurrency is not working");
}
