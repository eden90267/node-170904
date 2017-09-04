// indexOf

// 尋找第一個完全符合的元素，並回傳它的索引。(lastIndexOf是從另一方向搜尋)。
// 如果只想搜尋部分陣列，可以指定開始的索引。
// 如果回傳-1，代表沒找到符合的元素

// const o = {name: "Jerry"};
// const arr = [1, 5, "a", o, true, 5, [1, 2], "9"];
// arr.indexOf(5);               // 1
// arr.lastIndexOf(5);           // 5
// arr.indexOf("a");             // 2
// arr.lastIndexOf("a");         // 2
// arr.indexOf({name: "Jerry"}); // -1
// arr.indexOf(o);               // 3
// arr.indexOf([1, 2]);          // -1
// arr.indexOf("9");             // 7
// arr.indexOf(9);               // -1
//
// arr.indexOf("a", 5);          // -1
// arr.indexOf(5, 5);            // 5
// arr.lastIndexOf(5, 4);        // 1
// arr.lastIndexOf(true, 3);     // -1

// =============================================


// findIndex

// 它也是回傳索引(or -1)。但它可提供一個判斷元素是否符合條件的函式，不過就無法從任意的索引開始，lastFindIndex也一樣

// const arr = [{id: 5, name: 'Judith'}, {id: 7, name: 'Francis'}];
// arr.findIndex(o => o.id === 5);               // 0
// arr.findIndex(o => o.name === 'Francis');     // 1
// arr.findIndex(o => o === 3);                  // -1
// arr.findIndex(o => o.id === 17);              // -1

// =============================================

// find

// 若不care索引，反要元素本身? find，也可指定函式來找想找的東西，若找不到元素，則回傳null

// const arr = [{id: 5, name: 'Judith'}, {id: 7, name: 'Francis'}];
// arr.find(o => o.id === 5); // {id: 5, name: 'Judith'}
// arr.find(o => o.id === 2); // null

// find與findIndex的被傳入函式

// 第一個引數：接收元素
// 第二個引數：目前元素的索引
// 第三個引數：整個陣列本身


// 找出平方值

// const arr = [1, 17, 16, 5, 4, 16, 10, 3, 49];
// const sqrtResult = arr.find((x, i) => i > 2 && Number.isInteger(Math.sqrt(x)));

// console.log(sqrtResult); // 4


// find與findIndex也可以指定this變數在呼叫過程中的值。如果你想呼叫一個函式，就像它是個物件的方法

// class Person {
//   constructor(name) {
//     this.name = name;
//     this.id = Person.nextId++;
//   }
// }
//
// Person.nextId = 0;
//
// const jamie = new Person("Jamie"),
//   juliet = new Person("Juliet"),
//   peter = new Person("Peter"),
//   jay = new Person("Jay");
// const arr = [jamie, juliet, peter, jay];
//
// arr.find(p => p.id === juliet.id); // {name: 'Juliet', id: 1}
//
// arr.find(p => p.id === this.id, juliet); // undefined
// // arrow function會自動綁定this(這裡是window物件)，導致失效，所以改寫以下正常
//
// arr.find(function (p) {
//   return p.id === this.id
// }, juliet); // {name: 'Juliet', id: 1}

// =============================================


// 不在乎陣列的元素索引，也不在乎索引或元素本身，只想知道它是否存在。顯然可使用之前的函式來檢查它會回傳-1或null，
// 看JavaScript提供兩個程式做這件事：some與every

// some找到第一個，就不找了，回傳true否false
// const arr = [5, 7, 12, 15, 17];
// arr.some(x => x % 2 === 0);                    // true
// arr.some(x => Number.isInteger(Math.sqrt(x))); // false

// 如果陣列每一個元素都符合條件，every會回傳true，否則false。every有一個false就會停止。

const arr = [4, 6, 16, 36];
arr.every(x => x % 2 === 0);                     // true
arr.every(x => Number.isInteger(Math.sqrt(x)));  // false

// find、findIndex、some、every都可接受第二個引數，可指定函式被呼叫時，this的值為何。