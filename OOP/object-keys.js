// Object.keys

// Object.keys可產生一個陣列，它裡面枚舉物件的所有字串特性：

// const SYM = Symbol();
// const o = { a: 1, b: 2, c: 3, [SYM]: 4 };
// Object.keys(o).forEach(prop => console.log(`${prop}: ${o[prop]}`));

// 範例結果與for...in迴圈一樣(而且不需檢查hasOwnProperty)。當需要陣列形式的物件特性鍵，它很好用

// 例如輕鬆列出所有以字母x開頭的物件特性：

const o = {apple: 1, xochitl: 2, balloon: 3, guitar: 4, xylophone: 5};
Object.keys(o)
  .filter(prop => prop.match(/^x/))
  .forEach(prop => console.log(`${prop}: ${o[prop]}`));