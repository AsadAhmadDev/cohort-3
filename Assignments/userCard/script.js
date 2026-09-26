var form = document.querySelector("form");
// var inp = document.querySelector("input")
var subBtn = document.querySelector("#subBtn");
var inp1 = document.querySelector("#name");
var inp2 = document.querySelector("#email");
var inp3 = document.querySelector("#image");
var userCard = document.querySelector(".userCard");
var editingIdx = null;
var userData = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul@example.com",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Priya Singh",
    email: "priya@example.com",
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "Aman Khan",
    email: "aman@example.com",
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 4,
    name: "Sneha Verma",
    email: "sneha@example.com",
    image: "https://i.pravatar.cc/150?img=4",
  },
  {
    id: 5,
    name: "Arjun Mehta",
    email: "arjun@example.com",
    image: "https://i.pravatar.cc/150?img=5",
  },
];
const ui = () => {
  userCard.innerHTML = "";
  userData.forEach((elem, idx) => {
    console.log(idx);

    userCard.innerHTML += `<div class="user">
        <div class="img">
          <img
            src="${elem.image}"
            alt=""
          />
        </div>
        <div class="details">
          <h3 id="name">Name - ${elem.name}</h3>
          <h3 id="email">Email - ${elem.email}</h3>
        </div>
        <div class="actions">
            <button onclick="editCard(${idx});">Edit</button>
            <button onclick="delCard(${idx});">Delete</button>
        </div>
      </div>`;
  });
};
var editCard = (idx) => {
  editingIdx = idx;

  const user = userData[idx];
  inp1.value = user.name;
  inp2.value = user.email;
  inp3.value = user.image;

  subBtn.textContent = "Update";
};
ui();

form.addEventListener("submit", (events) => {
  events.preventDefault();

  var name = inp1.value.trim();
  var email = inp2.value.trim();
  var image = inp3.value.trim();
  if (name.trim() === "" && email.trim() === "" && image.trim() === "") return;

  if (editingIdx !== null) {
    userData[editingIdx] = {
      ...userData[editingIdx],
      name: name,
      email: email,
      image: image,
    };
  } else {
    userData.push({
      id: Date.now(),
      name: name,
      email: email,
      image: image,
    });
  }

  ui();
  form.reset();
  editingIndex = null;
  subBtn.textContent = "Submit";
});

var delCard = (idx) => {
  userData.splice(idx, 1);
  // console.log(userData);

  ui();
};
