// var arr = [10,20,30]

// var [a,...b]= arr
// console.log(arr);
const user = {
  name: "Rahul",
  greet: () => {
    console.log(this.name);
  }
};

user.greet();