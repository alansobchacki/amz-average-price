const prices = document.querySelectorAll(".a-price-whole");

if (prices) {
  let allPrices = [];

  prices.forEach((price) => {
    allPrices.push(price.textContent);
  });

  console.log(allPrices);

  let reducedPrices = allPrices.reduce((a, b) => a + b);

  console.log(reducedPrices / allPrices.length);
} else {
  alert("No prices found.");
}
