// Add event listener on load
window.onload = function () {
  document
    .getElementById("orderForm")
    .addEventListener("submit", function (event) {
      // get values from form
      var name = document.getElementById("name").value;
      var address = document.getElementById("address").value;
      var creditCardNumber = document.getElementById("creditCardNumber").value;
      var numberInputs = document.querySelectorAll('input[type="number"]');
      var creditCardRegex = /^\d{16}$/;

      // validate name address and CC are not empty
      if (!validateNotEmpty(name, address, creditCardNumber)) {
        event.preventDefault();
        return;
      }

      // validate number inputs are not negative
      if (!validateNonNegative(numberInputs)) {
        event.preventDefault();
        return;
      }

      // validate credit card number
      if (!validateCreditCard(creditCardNumber, creditCardRegex)) {
        event.preventDefault();
        return;
      }

      event.preventDefault(); // prevent form submission
      displayConfirmationMessage();
    });
};
// validation functions
function validateNotEmpty(name, address, creditCardNumber) {
  if (!name || !address || !creditCardNumber) {
    alert("Name, address, and credit card number cannot be blank.");
    return false;
  }
  return true;
}

function validateNotEmpty(name, address, creditCardNumber) {
  if (!name || !address || !creditCardNumber) {
    alert("Name, address, and credit card number cannot be blank.");
    return false;
  }
  return true;
}

function validateNonNegative(numberInputs) {
  for (var i = 0; i < numberInputs.length; i++) {
    if (numberInputs[i].value < 0) {
      alert("Input values cannot be negative.");
      return false;
    }
  }
  return true;
}

function validateCreditCard(creditCardNumber, creditCardRegex) {
  if (!creditCardRegex.test(creditCardNumber)) {
    alert("Invalid credit card number.");
    return false;
  }
  return true;
}

// calculate total function
function calculateTotal() {
  var productInputs = document.querySelectorAll('input[type="number"].product');
  var total = 0;

  for (var i = 0; i < productInputs.length; i++) {
    var quantity = Number(productInputs[i].value);
    var price = Number(productInputs[i].dataset.price);
    total += quantity * price;
  }

  return total;
}

// display confirmation message function
function displayConfirmationMessage() {
  var confirmationMessage = document.createElement("p");
  confirmationMessage.textContent = "Order Submitted!";
  document.body.appendChild(confirmationMessage);
}
