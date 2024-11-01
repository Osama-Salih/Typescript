type Details = {
  title: string;
  descriptoin: string;
  price: number;
};

type Author = {
  authorName: string;
  country: string;
};

type Book = Details & Author; // Intersection Type

const newBook: Book = {
  title: 'Black Swan',
  descriptoin: 'About Black Swan',
  price: 10,
  authorName: 'Osama Salih',
  country: 'Sudan',
};

// Literal Type
type Price = 10 | 20;
let price: Price;
price = 10;
