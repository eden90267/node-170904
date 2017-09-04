// ES6新方法：copyWithin，它會將陣列內一系列的元素"就地"複製到該陣列的其他地方，覆寫原本的元素

// copyWithin(被貼上的地方, 開始複製的地方, [停止複製的地方(不包含指定的字元)])

const arr = [1, 2, 3, 4];
arr.copyWithin(1, 2);     // [1, 3, 4, 4]
arr.copyWithin(2, 0, 2);  // [1, 3, 1, 3]
arr.copyWithin(0, -3, -1);// [3, 1, 1, 3]