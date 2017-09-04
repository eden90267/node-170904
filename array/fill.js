// 在陣列中填入特定值

// ES6：fill，可用它來將任何數量的元素設為固定值(就地)。特別適合與Array建構式一起使用(可指定陣列的初始大小)。
//            若只想要填入部分的陣列，可視情況指定開始與結束索引(負引數同樣有效)。

const arr = new Array(5).fill(1); // [1, 1, 1, 1, 1]
arr.fill('a');       // ['a', 'a', 'a', 'a', 'a']
arr.fill('b', 1);    // ['a', 'b', 'b', 'b', 'b']
arr.fill('c', 2, 4); // ['a', 'b', 'c', 'c', 'b']
arr.fill(5.5, -1);   // ['a', 'b', 'c', 'c', 5.5]
arr.fill(0, -3, -1); // ['a', 'b', 0, 0, 5.5];
console.log(arr);