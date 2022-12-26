let user = [];
const URL = "https://63a06c2fe3113e5a5c3d35fd.mockapi.io/Users";
fetch(URL, {
  method: "GET",
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    _renderUI(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

function _renderUI(user) {
  let elmBody = document.getElementById("tbody__user");

  function fomatRow(user) {
    return `<tr (${user.id})">
    <td>${user.id}</td>
    <td>${user.name}</td>
    <td>${user.city}</td>
    <td>${user.avatar}</td>
    <td>
    <button class="btn btn-success" onclick="gotoDetail(${user.id})">Detail</button>
    <button class="btn btn-danger" onclick="deleteUser(${user.id})">Delete</button>
    </td>
  </tr>`;
  }
  let resRow = "";
  for (let index = 0; index < user.length; index++) {
    resRow += fomatRow(user[index]);
  }
  elmBody.innerHTML = resRow;
}
function handleClickRow(userId) {
  console.log(userId);
  window.location.href="./detail.html?id="+userId
}
function gotoDetail(userId) {
  console.log("gotoDetail", userId);
  window.location.href=`./detail.html?id=+${userId}`;
}
function deleteUser(userId) {
  console.log("deleteUser", userId);
  let user_delete = URL + '/' +userId;
  fetch("https://63a06c2fe3113e5a5c3d35fd.mockapi.io/Users/" + userId, {
    method: "DELETE",
  })  
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    resetTbody()
    getListUsers();
  })
  .catch((error) => {
    console.error("Error:", error);
  });
}