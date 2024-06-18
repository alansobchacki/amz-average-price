function getAveragePrice() {
  const container = document.getElementById("search");
  const priceElements = container.querySelectorAll(".a-price-whole");

  if (priceElements) {
    const prices = [];

    priceElements.forEach((element) => {
      prices.push(parseInt(element.textContent.replace(/\.$/, "")));
    });

    const totalPrices = prices.reduce((a, b) => a + b);

    return Math.round(totalPrices / prices.length);
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
