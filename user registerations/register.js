var form = document.getElementById("myForm");
const btn = document.getElementById("btn");

// to know whether submit button is disabled or not
console.log(`Is button has been disabled : ${btn.disabled}`);

function validations() {
  // logic for enabling button when all fields are filled.
  if (form.checkValidity()) {
    btn.disabled = false;

    // to know whether submit button is disabled or not
    console.log(`Is button has been disabled : ${btn.disabled}`);
    btn.style.backgroundColor = "greenyellow";
    btn.style.color = "black";
  } else {
    btn.disabled = true;
    // to know whether submit button is disabled or not
    console.log(`Is button has been disabled : ${btn.disabled}`);
    btn.style.backgroundColor = "rgb(44, 44, 44)";
    btn.style.color = "rgb(94, 94, 94)";
  }
}

function valid() {
  const name = document.getElementById("userName").value;
  const mail = document.getElementById("mail").value;
  const phone = document.getElementById("phno").value;
  const address = document.getElementById("address").value;

  // performing validations

  // getting the existing users form the local storage
  const users = JSON.parse(localStorage.getItem("clients")) || [];

  // adding new user to array by creating a new object
  const user = {
    name: name,
    email: mail,
    phone: phone,
    address: address,
  };

  users.push(user);

  // updatin array in local storage
  localStorage.setItem("clients", JSON.stringify(users));

  return true;
}
