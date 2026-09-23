function isValidQuantity(quantity) {
  return quantity > 0 && quantity <= 20;
}

function calculateTicketPrice(quantity, basePrice, isVip = false) {
  let total = quantity * basePrice;
  if (isVip) {
    total *= 1.5;
  }
  return Math.floor(total);
}

module.exports = { isValidQuantity, calculateTicketPrice };