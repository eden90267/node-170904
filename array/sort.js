// 排序陣列

// sort 會就地排序陣列

// const arr = [5, 4, 3, 2, 1];
// arr.sort();
//
// console.log(arr); // [1, 2, 3, 4, 5]

// =================================================

// 也可指定一個方便的排序函式。例如，排序物件沒有任何意義：

const arr = [
  {name: 'Suzanne'}, {name: 'Jim'}, {name: 'Trevor'}, {name: 'Amanda'}
];
arr.sort();
console.log(arr); // [{name: 'Suzanne'}, {name: 'Jim'}, {name: 'Trevor'}, {name: 'Amanda'}]

arr.sort((a, b) => a.name > b.name);
console.log(arr); // [{name: 'Amanda'}, {name: 'Jim'}, {name: 'Suzanne'}, {name: 'Trevor'}]

arr.sort((a, b) => a.name[1] < b.name[2]); // 按照name特性的第二個字母反向排序