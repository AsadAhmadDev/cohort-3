const createElem = document.querySelector("#createBtn");
const overlay = document.querySelector(".overlay");
const form = document.querySelector("form");
const close = document.querySelector("#close");
const subBtn = document.querySelector("#submit")
let productDiv = document.querySelector(".products");

let productArr = JSON.parse(localStorage.getItem("products"));
let updateIdx = null;


let ui = () => {
   productDiv.innerHTML = "";
  productArr.forEach((elem) => {
    productDiv.innerHTML += `<div class="productCards">
          <div class="image">
            <img
              src="${elem.image}"
              alt=""
            />
          </div>
          <div class="bottom">
            <h1>${elem.productName}</h1>
            <h2>${elem.descrption}</h2>
            <h3>${elem.price}</h3>
            <div class="btns">
              <button onClick="updateProduct('${elem.productName}')">Edit</button>
              <button onClick="delCard('${elem.productName}')">Delete</button>
            </div>
          </div>
        </div>`;
  });
};
ui()
createElem.addEventListener("click", () => {
  overlay.style.display = "flex";
  subBtn.textContent = "Create"
});
close.addEventListener("click", () => {
  overlay.style.display = "none";
});




form.addEventListener("submit", (events) => {
  events.preventDefault();
    
  let productName = form[0].value;
  let descrption = form[1].value;
  let price = form[2].value;
  let image = form[3].value;

  if (
    productName.trim() === "" ||
    descrption.trim() === "" ||
    price.trim() === "" ||
    image.trim() === ""
  ) {
    alert("Fil all the fields");
    return;
  }

  let obj = {
    productName,
    descrption,
    price,
    image,
  };

  if(updateIdx !== null){
    productArr[updateIdx] = obj;
    updateIdx = null;
    localStorage.setItem("products", JSON.stringify(productArr))
  }
  else{
    productArr.push(obj);
    localStorage.setItem("products", JSON.stringify(productArr))
  }
 


  ui();
//   console.log(productArr);
  form.reset();
  overlay.style.display = "none";
});


let updateProduct = (name)=>{
    // console.log(name);
    let product = productArr.find((elem)=> elem.productName === name);
    updateIdx = productArr.findIndex((elem) => elem.productName === name);
    // console.log(product);
    overlay.style.display = "flex";

    form[0].value = product.productName;
    form[1].value = product.descrption;
    form[2].value = product.price;
    form[3].value = product.image;
    
    subBtn.textContent = "Update"
    
}

let delCard = (name)=> {
    //  console.log(name);
    updateIdx = productArr.findIndex((elem) => elem.productName === name);
    productArr.splice(updateIdx, 1);
    // console.log(updateIdx);
        localStorage.setItem("products", JSON.stringify(productArr))

    ui();
    
}



// let data = [{
//   name: "Asad",
//   age: 19,
//   gender: "Male"
// },
// {
//   name: "Rehan",
//   age: 29,
//   gender: "Male"
// },
// {
//   name: "arif",
//   age: 23,
//   gender: "Female"
// },
// {
//   name: "Fahad",
//   age: 22,
//   gender: "Male"
// }];


// localStorage.setItem("people", JSON.stringify(data));
//  const lsd = localStorage.getItem("people");
//  let val = JSON.parse(lsd)
//  console.log(val);
 