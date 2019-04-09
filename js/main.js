const log = console.log;

// const lottoNumber = function() {
//   const allLottoNumber = [];
//   for (let i = 1; i < 46; i++) {
//     allLottoNumber.push(i);
//   }
//   return randomItem(allLottoNumber);
// };

// function randomItem(arr) {
//   const ExtractNumber = [];
//   while (ExtractNumber.length < 6) {
//     let eNum = Math.floor(Math.random() * arr.length);
//     ExtractNumber.push(eNum);
//     arr.splice(eNum, 1);
//   }
//   return console.log(ExtractNumber);
// }
// lottoNumber();

// const generateLottoNumber = function() {
//   return {
//     aln: (function() {
//       const allLottoNumber = [];
//       for (let i = 1; i < 46; i++) {
//         allLottoNumber.push(i);
//       }
//       return allLottoNumber;
//     })(),
//     next: function() {
//       let eNum = Math.floor(Math.random() * this.aln.length) + 1;
//       // log(eNum);
//       // log(this.aln);
//       this.aln.splice(eNum - 1, 1);
//       // log(this.aln);
//       if (this.aln.length > 38) return { done: false, value: eNum };
//       else if (this.aln.length <= 38) return { done: true, value: undefined };
//     },
//     [Symbol.iterator]: function() {
//       return this;
//     }
//   };
// };

const generateLottoNumber = function*() {
  const allLottoNumber = [];
  for (let i = 1; i < 46; i++) {
    allLottoNumber.push(i);
  }

  for (let n = 0; n < 6; n++) {
    let eNum = Math.floor(Math.random() * allLottoNumber.length) + 1;
    yield eNum;
    allLottoNumber.splice(eNum - 1, 1);
  }
};

const generateLottoNumber2 = function*() {
  yield 1;
  yield 2;
  yield 3;
};

const iter2 = generateLottoNumber2();

const iter1 = generateLottoNumber();
log(iter1);
// log(lottoIter.next());
// log(lottoIter.next());
// log(lottoIter.next());
// log(lottoIter.next());
// log(lottoIter.next());
// log(lottoIter.next());
// log(lottoIter.next());
// log(lottoIter.next());

// log(iter1.next());
// log(iter1.next());
// log(iter1.next());
// log(iter1.next());
// log(iter1.next());
// log(iter1.next());
// log(iter1.next());

// iter1.next(); // { done: ture, value: undefined }
