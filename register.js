// Getting form element
var form = document.getElementById("myForm");
// Getting button element
const btn = document.getElementById("btn");

// to know whether submit button is disabled or not  (newly added)
// console.log(`Is button has been disabled : ${btn.disabled}`);

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
  // Getting all input fields values
  const uname = document.getElementById("userName").value;
  const mail = document.getElementById("mail").value;
  const phone = document.getElementById("phno").value;
  const address = document.getElementById("address").value;

  // getting the existing users form the local storage
  const users = JSON.parse(localStorage.getItem("clients")) || [];

  // adding new user to array by creating a new object
  const user = {
    name: uname,
    email: mail,
    phone: phone,
    address: address,
  };

  users.push(user);

  // updatin array in local storage
  localStorage.setItem("clients", JSON.stringify(users));

  return true;
}

function nameValidation() {
  // Getting all input fields values
  const uname = document.getElementById("userName");
  const nameExp = /^[\S].*/;

  if (!nameExp.test(uname.value)) {
    alert("valid name can't be stared with white space");
    btn.disabled = true;
  }
}

function addressValidation() {
  // Getting all input fields values
  const uname = document.getElementById("address");
  const nameExp = /^[\S].*/;

  if (!nameExp.test(uname.value)) {
    alert("valid address can't be stared with white space");
    btn.disabled = true;
  }
}
