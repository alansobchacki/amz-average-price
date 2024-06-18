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

function showAveragePrice() {
  const averagePriceElement = document.createElement("div");
  const header = document.querySelector(".s-no-outline");
  const price = getAveragePrice();

  averagePriceElement.textContent = `The average listing price is $${price}.99.`;

  header.appendChild(averagePriceElement);
}

showAveragePrice();
