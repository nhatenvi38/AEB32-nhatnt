

function list__manga__1() {
  const list__manga = [
    {
      name: "One piece",
      avatar:
        "https://st.ntcdntempv3.com/data/comics/209/dao-hai-tac.jpg",
      city: "Eichiiro Oda",
      id: "1",
    },
    {
      name: "Naruto",
      avatar:
        "https://st.ntcdntempv3.com/data/comics/175/naruto-new-generation.jpg",
      city: "Masashi Kishimoto",
      id: "2",
    },
    {
      name: "Demon slayer",
      avatar:
        "https://st.ntcdntempv3.com/data/comics/235/thanh-guom-diet-quy.jpg",
      city: "Gotouge Koyoharu",
      id: "3",
    },
    {
      name: "Conan",
      avatar:
        "https://st.ntcdntempv3.com/data/comics/30/tham-tu-conan.jpg",
      city: "Gosho Aoyama",
      id: "4",
    },
    {
      name: "One punch man",
      avatar:
        "https://st.ntcdntempv3.com/data/comics/37/anh-hung-onepunch.jpg",
      city: "One",
      id: "5",
    },
    {
        name: "Chain saw man",
        avatar:
          "https://st.ntcdntempv3.com/data/comics/41/chainsaw-man-tho-san-quy.jpg",
        city: "Fujimoto Tatsuki",
        id: "6",
      },
  ];

  let elm = document.getElementById("div__content");

  function formatUICard(user) {
    return `
    <div class="card col-4">
        <img
            src="${user.avatar}"
            ,
            class="card-img-top"
            alt="..."
        />
        <div class="card-body">
            <h5 class="card-title">${user.name}</h5>
            <p class="card-text">
            Click để đọc ngay.
            </p>
            <a href="#" class="btn btn-primary">Đọc truyện</a>
        </div>
    </div>
    `;
  }
  
  let resUI = "";
  for (let index = 0; index < list__manga.length; index++) {
    resUI += formatUICard(list__manga[index]);
  }
  elm.innerHTML = resUI;
}

list__manga();

// listUser.map((user) => {
//     tempRowTable += formatRowUser(user)
// })

