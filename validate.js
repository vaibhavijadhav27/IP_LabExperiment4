function validate() {
  // Store the values of the form inputs
  const values = [
    document.forms["myForm"]["tagline"].value,
    document.forms["myForm"]["color"].value,
    document.forms["myForm"]["size"].value,
    document.forms["myForm"]["quantity"].value,
    document.forms["myForm"]["name"].value,
    document.forms["myForm"]["number"].value,
    document.forms["myForm"]["address"].value,
    document.forms["myForm"]["pay"].value,
  ];

  // Validate the user name input
  var lettersName = /^[a-zA-Z]/;
  if (!values[4].match(lettersName)) {
    alert("Name must have alphabets only");
    return;
  }

  // Validate the size dropdown list
  if (values[2] == "default") {
    alert("Please select the size");
    return;
  }

  // Validate the quantity dropdown list
  if (values[3] == "default") {
    alert("Please select the quantity");
    return;
  }

  if (document.forms["myForm"]["order-date"].value == "") {
    alert("Please select the order date");
    return;
  }
  // Validate the user order date input
  todaysDate = new Date();
  var inputDate = new Date(document.forms["myForm"]["order-date"].value);
  if (inputDate <= todaysDate) {
    alert("Please select the date after today's date");
    return;
  }

  // Validate the user phone number input
  var phone_no = /\d{10}/;
  if (!values[5].match(phone_no)) {
    alert("Phone number must have 10 digits");
    return;
  }

  // Check whether the form inputs are empty or not
  const hasEmptyFields = Object.values(values).some(
    (element) => element === ""
  );

  if (hasEmptyFields) {
    alert("Please fill all the fields to place the order");
    return;
  }

  // Print the receipt
  const receipt_formatted = `Here's your receipt:\n\nTagline: ${values[0]}\nColor: ${values[1]}\nSize: ${values[2]}\nQuantity: ${values[3]}\nName: ${values[4]}\nPhone Number: ${values[5]}\nAddress: ${values[6]}\nPayment Method: ${values[7]}\nTotal Cost: ₹ 300\n\nDate of receipt: ${todaysDate}`;
  alert(receipt_formatted);
}

  