// 取得子陣列

// slide(開始的地方, 結束的地方)

const arr = [1, 2, 3, 4, 5];
console.log(arr.slice(3));      // [4, 5]
console.log(arr.slice(2, 4));   // [3, 4]
console.log(arr.slice(-2));     // [4, 5]
console.log(arr.slice(1, -2));  // [2, 3]
console.log(arr.slice(-2, -1)); // [4]

// arr不會被修改