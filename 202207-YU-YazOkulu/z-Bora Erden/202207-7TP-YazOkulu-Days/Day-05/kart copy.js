// iskambil destesinde eleman yeri değiştirme ve deste karma

// desteyi oluşturma
let deck = [];
for (let i = 0; i < 52; i++) {
  deck[i] = i + 1;
  console.log(deck[i]);
}

//destedeki elemanların yerini değiştirme
let t = Math.round(Math.random() * 53);
let y = Math.round(Math.random() * 53);
console.log("z[t]=", deck[t]);
console.log("z[y]=", deck[y]);
deck[y] = t + 1;
deck[t] = y + 1;
console.log("z[t]'nin yeni değeri=", deck[t]);
console.log("z[y]'nin yeni değeri=", deck[y]);
console.log(deck);

//deste kesme
let indexCut


= Math.round(Math.random() * 52);
// let left = [];
// let right = [];
let deckTmp = [];
// copy right half
for (let i = indexCut + 1; i <= 51; i++) {
  //   deckTmp[v]=deck[v];
  deckTmp.push(deck[i]);
}

// copy left half
for (let i = 0; i <= indexCut; i++) {
  deckTmp.push(deck[i]);
}
console.log([deckTmp]);

console.log("after " + deckTmp);

// deckTmp = right + left;
deck = deckTmp;
console.log(deck);
