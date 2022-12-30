// get elm body table
let elmBodyTable = document.getElementById('tbody_user');
let tempRowTable = '';

// dummy data row `<tr><td>1</td><td>2</td></tr>`
// for (let index = 0; index < 4; index++) {
//     tempRowTable += `<tr>
//     <th scope="row">1</th>
//     <td>Mark</td>
//     <td>Otto</td>
//     <td>@mdo</td>
//   </tr>`
// }

// elm.innerHTML -> render row table -> table co 1 row data
// for -> render 5 row 

// dummy listUser -> for listUser -> render data row listUser
// tạo 1 biến user
function vd1(params) {
    let user = {
        id: 1,
        name: "name 1",
        age: 30,
        address: "address 1",
      };
      let listUser = [
        {
          id: 1,
          name: "name 1",
          age: 30,
          address: "address 1",
        },
        {
          id: 2,
          name: "name 2",
          age: 30,
          address: "address 2",
        },
        {
          id: 3,
          name: "name 3",
          age: 30,
          address: "address 3",
        },
        {
          id: 4,
          name: "name 4",
          age: 34,
          address: "address 4",
        },
      ];
      
      let elmBodyTable = document.getElementById("tbody__user");
      let tempRowTable = "";
      
      function formatRowUser(user) {
        let _stringTr = `<tr>
                              <th scope="row">${user.id}</th>
                              <td>${user.name}</td>
                              <td>${user.age}</td>
                              <td>${user.address}</td>
                          </tr>`;
        return _stringTr;
      }
      
      listUser.map((user) => {
        tempRowTable += formatRowUser(user);
      });
      
      elmBodyTable.innerHTML = tempRowTable;
      console.log(elmBodyTable);
}

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


  let elm = document.getElementById("div__content");

  function formatUICard(user) {
    return `
    <div class="card col-4">
        <img
            src="${user.thumb}"
            ,
            class="card-img-top"
            alt="..."
        />
        <div class="card-body">
            <h5 class="card-title">${user.name}</h5>
            <p class="card-text">
            Click vào nút để đọc ngay.
            </p>
            <a href="#" class="btn btn-primary">Đọc truyện</a>
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

vd2();

// listUser.map((user) => {
//     tempRowTable += formatRowUser(user)
// })

