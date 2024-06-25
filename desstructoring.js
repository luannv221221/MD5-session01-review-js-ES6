const colors = ["red", "black", "yellow"];

// let firstColor = colors[0];
// let secondColor = colors[1];
// console.log(firstColor);

const [firstColor, secondColor, otherColor] = colors;

console.log("firstColor : ", firstColor);
console.log("secondColor : ", secondColor);
console.log("otherColor : ", otherColor);

const user = {
    id: 1,
    userName: "Đức Đăng",
    age: 18
}

// let userId = user.id;
// console.log(userId);

const { id, userName, age } = user;
console.log(id);
console.log(userName);
console.log(age);

// dùng để truy xuất phần tử trong mảng 1 cách nhanh chóng 
