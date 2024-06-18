function getAveragePrice() {
  const priceElements = document.querySelectorAll(".a-price-whole");

  if (priceElements) {
    const priceValues = [];

    priceElements.forEach((element) => {
      priceValues.push(parseInt(element.textContent.replace(/\.$/, "")));
    });

    const totalPrices = priceValues.reduce((a, b) => a + b);
    const averagePrice = Math.round(totalPrices / priceValues.length);

    return averagePrice;
  }
}

function displayAveragePrice() {
  const price = getAveragePrice();

  console.log(`The average t-shirt price is ${price}` + `.99.`);
}

displayAveragePrice();
