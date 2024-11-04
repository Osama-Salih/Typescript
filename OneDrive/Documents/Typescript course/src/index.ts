// type Details = {
//   title: string;
//   descriptoin: string;
//   price: number;
// };

// type Author = {
//   authorName: string;
//   country: string;
// };

// type Book = Details & Author; // Intersection Type

// const newBook: Book = {
//   title: 'Black Swan',
//   descriptoin: 'About Black Swan',
//   price: 10,
//   authorName: 'Osama Salih',
//   country: 'Sudan',
// };

// // Literal Type
// type Price = 10 | 20;
// let price: Price;
// price = 10;

// unknown type
function checkTypes(input: unknown): void {
  if (typeof input === 'string') {
    input.toUpperCase();
  }

  if (typeof input === 'number') {
    input.toFixed();
  }

  if (typeof input === 'boolean') {
    input.valueOf();
  }
}

// never
function nverRetchTheEnd(): never {
  throw new Error('This is the error message');

  console.log('this code will nerver gonna work!');
}
