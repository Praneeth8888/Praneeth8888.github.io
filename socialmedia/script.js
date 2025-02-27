let users = [];

function showLogin() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => displayUsers(data))
    .catch((err) => console.log(err));
}

function displayUsers(data) {
  let str = "<select class='form-select'>";
  data.forEach((user) => {
    str += `<option value="${user.id}">${user.name}</option>`;
  });
  str += "</select>";
  document.getElementById("root").innerHTML = str;
}

function login() {
  alert("Login functionality to be implemented!");
}
