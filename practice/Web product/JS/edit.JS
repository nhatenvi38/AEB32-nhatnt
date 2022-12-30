const URL_USER = "https://63a06c2fe3113e5a5c3d35fd.mockapi.io/manga/";

let urlDetail = new URLSearchParams(window.location.search);
let id = urlDetail.get("id");

if (id) {
  getUser()
}

function getUser() {
  fetch(`${URL_USER}/${id}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let elmName = document.getElementById("inputName");
      let elmAuthor = document.getElementById("inputAuthor");
      let elmThumb = document.getElementById("inputThumb");
      elmName.value = data.name;
      elmAuthor.value = data.author;
      elmThumb.value = data.thumb;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function handleSubmit() {
  let elmName = document.getElementById("inputName");
  let elmAuthor = document.getElementById("inputAuthor");
  let elmThumb = document.getElementById("inputThumb");

  let user = {
    name: elmName.value,
    author: elmAuthor.value,
    thumb: elmThumb.value,
  };
  if (id) {
    updateUser(user)
  }else{
    postUser(user);
  }
 
}

function postUser(user) {
  console.log('postUser');
  fetch(URL_USER, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function updateUser(user) {
  fetch(`${URL_USER}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}