
let urlDetail = new URLSearchParams(window.location.search);
let id = urlDetail.get("id");
console.log(id);

const URL = "https://63a06c2fe3113e5a5c3d35fd.mockapi.io/manga/" + id;

fetch(URL, {
  method: "GET",
})
  .then((response) => response.json())
  .then((data) => {
    _renderInfoUser(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

function _renderInfoUser(user) {
  let elm = document.getElementById("info__user");
  elm.innerHTML = `
  <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">ID</th>
      <th scope="col">NAME</th>
      <th scope="col">THUMBNAIL</th>
      <th scope="col">AUTHOR</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>${user.id}</td>
      <td>${user.name}</td>
      <td>${user.thumb}</td>
      <td>${user.author}</td>
    </tr>
</table>
    `;
}