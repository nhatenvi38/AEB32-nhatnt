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
      name: "Den",
      avatar:
        "https://cdn.alongwalker.co/info/wp-content/uploads/2022/03/15205113/image-12-rapper-noi-tieng-nhat-viet-nam-164732707321752.jpg",
      city: "Ha Long",
      id: "1",
    },
    {
      name: "bray",
      avatar:
        "https://cdn.alongwalker.co/info/wp-content/uploads/2022/03/15205112/image-12-rapper-noi-tieng-nhat-viet-nam-164732707117240.jpg",
      city: "Hochiminh",
      id: "2",
    },
    {
      name: "Justa Tee",
      avatar:
        "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/f/5/3/b/f53b7859f2f0aaf5c1363eb80e75c29b.jpg",
      city: "Hanoi",
      id: "3",
    },
    {
      name: "DSK",
      avatar:
        "https://i1.sndcdn.com/artworks-L9e8FtQmhTPY64Ek-L5f66A-t500x500.jpg",
      city: "Da Lat",
      id: "4",
    },
    {
      name: "Binz",
      avatar:
        "https://static2.yan.vn/YanNews/2167221/202012/xon-xao-gia-catxe-cua-binz-khoang-500-trieu1-dem-dien-f8272f70.jpg",
      city: "Da Nang",
      id: "5",
    },
    {
        name: "Suboi",
        avatar:
          "https://static.tuoitre.vn/tto/i/s626/2016/05/25/suboi-obama-1464164959.jpg",
        city: "Hochiminh",
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
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
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

