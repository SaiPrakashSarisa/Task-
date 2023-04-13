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
