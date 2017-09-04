// 特性枚舉：順序不保證對

// for...in
// 傳統的物件特性枚舉方式

const SYM = Symbol();

const o = {a: 1, b: 2, c: 3, [SYM]: 4};

for(let prop in o) {
  if (!o.hasOwnProperty(prop)) continue;
  console.log(`${prop}: ${o[prop]}`);
}

// hasOwnProperty可處理for...in一危險的地方：繼承而來的屬性
// for...in迴圈不包含使用符號鍵的特性
// for...in也可迭代陣列，但不是好方法，比較建議用for迴圈或陣列的forEach

