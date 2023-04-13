const form = document.getElementById("myForm");
const submitButton = documetn.getElementById("btn");

function checkValidity() {
  const name = document.getElementById("userName");
  const mail = document.getElementById("mail");
  const phone = document.getElementById("phno");
  const address = document.getElementById("address");

  if (
    name.value.trim() == "" ||
    mail.value.trim() == "" ||
    phone.value.trim() == "" ||
    address.value.trim() == ""
  ) {
    return false;
  } else {
    return true;
  }
}

form.addEventListener("input", function () {
  if (checkValidity()) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});
