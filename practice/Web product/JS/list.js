
let elmBodyTable = document.getElementById('tbody_user');
let tempRowTable = '';
function vd2() {
  const LIST_USER_CARD = [
    {
      name: "One piece",
      thumb:
        "https://st.ntcdntempv3.com/data/comics/209/dao-hai-tac.jpg",
      author: "Eichiiro Oda",
      id: "1",
    },
    {
      name: "Naruto",
      thumb:
        "https://st.ntcdntempv3.com/data/comics/175/naruto-new-generation.jpg",
      author: "Masashi Kishimoto",
      id: "2",
    },
    {
      name: "Demon slayer",
      thumb:
        "https://st.ntcdntempv3.com/data/comics/235/thanh-guom-diet-quy.jpg",
      author: "Gotouge Koyoharu",
      id: "3",
    },
    {
      name: "Conan",
      thumb:
        "https://st.ntcdntempv3.com/data/comics/30/tham-tu-conan.jpg",
      author: "Gosho Aoyama",
      id: "4",
    },
    {
      name: "One punch man",
      thumb:
        "https://st.ntcdntempv3.com/data/comics/37/anh-hung-onepunch.jpg",
      author: "One",
      id: "5",
    },
    {
        name: "Chain saw man",
        thumb:
          "https://st.ntcdntempv3.com/data/comics/41/chainsaw-man-tho-san-quy.jpg",
        author: "Fujimoto Tatsuki",
        id: "6",
      },
  ];

  let user = [];
  const URL = "https://63a06c2fe3113e5a5c3d35fd.mockapi.io/manga/";
  let elm = document.getElementById("div__content");

  function formatUICard(user) {
    return `
    <div class="card col-4 card__content">
        <img
            src="${user.thumb}"
            ,
            class="card-img-top"
            alt="..."
        />
        <div class="card-body m-auto justify-content-center justify-content-lg-center flex-wrap">
            <h5 class="m-auto card-title">${user.name}</h5>
            <div>
            <a href="#" onclick = gotoDetail(${user.id}) class="btn btn-primary">Đọc truyện</a> 
            <a href="#" onclick = edit(${user.id}) class="btn btn-success">edit</a>
            <a href="#" onclick = deleteUser(${user.id}) class="btn btn-warning">delete</a>
            </div>
     
        </div>
    </div>
    `;
  }
  
  let resUI = "";
  for (let index = 0; index < LIST_USER_CARD.length; index++) {
    resUI += formatUICard(LIST_USER_CARD[index]);
  }
  elm.innerHTML = resUI;
}


function gotoDetail(user) {
  window.location.href = `./detail.html?id=${user}`;
}

vd2();

// listUser.map((user) => {
//     tempRowTable += formatRowUser(user)
// })

function edit(user) {
  window.location.href = `./edit.html?id=${user}`;
}

function deleteUser(user) {
  console.log("deleteUser");
  let user_delete = URL + "/" + user;
  fetch(user_delete, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      getListUser();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}