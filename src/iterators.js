// export const isIterable = (obj) => {
//   // checks for null and undefined
//   if (obj == null) {
//     return false;
//   }
//   return typeof obj[Symbol.iterator] === 'function';
// }

// export const getIterator = (pData, pSelect) => {
//   function addIterable(obj) {
//     return {[Symbol.iterator]: () => obj};
//   }

//   function makeAllIterator(data) {
//     let nextIndex = 0;
//     const obj = {
//       next: function() {
//         return nextIndex < data.length ?
//           {value: data[nextIndex++], done: false} : {done: true};
//       }
//     }
//     return addIterable(obj);
//   }

//   function mkIterator(data, how, test) {
//     const nTest = test || function() {return true;};
//     let delivered = false;
//     const obj = {
//       next: function() {
//         if (!delivered && nTest(data)) {
//           delivered = true;
//           return {value: how(data), done: false};
//         }
//         return {done: true};
//       }
//     }
//     return addIterable(obj);
//   }

//   function makeFirstIterator(data) {
//     return mkIterator(data, (d) => d[Symbol.iterator]().next().value);
//   }

//   function makeIteratorForItem(item) {
//     return mkIterator(item, (i) => i);
//   }

//   function makeNumberIterator(data, select) {
//     const test = (d) => select >=0 && select < d.length;
//     return mkIterator(data, (d) => d[select], test);
//   }

//   function makeStringIterator(data, select) {
//     if (select === 'all') {
//       if (isIterable(data)) {
//         return data;
//       } else {
//         return makeAllIterator(data);
//       }
//     } else if (select === 'first') {
//       if (isIterable(data)) {
//         return makeFirstIterator(data);
//       } else {
//         return makeIteratorForItem(data);
//       }
//     }
//   }

//   switch (typeof(pSelect)) {
//   case 'number': return makeNumberIterator(pData, pSelect);
//   case 'string': return makeStringIterator(pData, pSelect);
//   }
//   return undefined;
// };
