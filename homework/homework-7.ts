function max(a: number, b: number, c: number) {
  if (a > b) {
    return a > c ? a : c;
  }
  if (b > c) {
    return b;
  }
  return a > c ? a : c;
}

let maxValue = max(5, 2, 6);
console.log(maxValue);
