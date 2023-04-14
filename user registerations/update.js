const userIndex = localStorage.getItem("userIndex");
console.log(userIndex);
const users = JSON.parse(localStorage.getItem("clients"));

const user = users[userIndex];
console.log(user);

document.getElementById("userName").value = user.name;
document.getElementById("mail").value = user.email;
document.getElementById("phno").value = user.phone;
document.getElementById("address").value = user.address;

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

  // updating values using index value and name property of the object.
  users[userIndex].name = name;
  users[userIndex].email = mail;
  users[userIndex].phone = phone;
  users[userIndex].address = address;

  // updatin array in local storage
  localStorage.setItem("clients", JSON.stringify(users));

  return true;
}
