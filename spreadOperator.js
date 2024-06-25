// Với mảng 
const array1 = [1, 2, 3];
const array2 = [3, 4, 5];
// const array3 = array1.concat(array2);

// console.log(array3); 
const array3 = [...array1]; // copy mảng
console.log(array3);

const array4 = [...array2, ...array1, ...array3];
console.log(array4);

// spreadOperator with Object 
const infor = {
    id: 1,
    fullName: "Nguyễn Văn B"
};

const detailInfo = {
    age: 13,
    address: "Hà Nội"
};

const account = {
    id: infor.id,
    fullName: infor.fullName,
    age: detailInfo.age,
    address: detailInfo.address
}

console.log("account : ", account);
const infoAccount = { ...infor, ...detailInfo };

console.log("inorAccount : ", infoAccount);
