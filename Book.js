export class Book {
  constructor(title, author, description, pages, currentPage, read) {
    this.title = title;
    this.author = author;
    this.description = description;
    this.pages = pages;
    this.currentPage = currentPage;
    this.read = read;
  }
  readbook(page) {
    if (page >= 1 && page < this.pages) {
      this.currentPage = page;
      return 1;
    } else if (page === this.pages) {
      this.currentPage = page;
      this.read = true;
      return 1;
    } else {
      return 0;
    }
  }
}

let LePrisonnierAzkaban;
let sorcerySchool;
let theDeathReliques;

export const books = [
  (LePrisonnierAzkaban = new Book(
    "Harry Potter and the azkaban's prisoner",
    "J.K Rowling",
    "Harry ans his friends have a new adventure, where harry's godfather wants to kill him after escaping of azkaban, the famous prison",
    252,
    50,
  )),
  (sorcerySchool = new Book(
    "Harry Potter and the sorcery school",
    "J.K Rowling",
    "Harry discover hogwart",
    300,
    100,
  )),
  (theDeathReliques = new Book(
    "Harry Potter and the azkaban's prisoner",
    "J.K Rowling",
    "Harry seeking those three legendary objects",
    582,
    1,
  ))
];
