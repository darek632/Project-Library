const myLibrary = [];

function Book(title, author, pages, read) { 

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() { 
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
    };
  }

  const book1 = new Book("The Hotel Avocado", "Bob Mortimer", "416", "not read yet");


  function addBookToLibrary() { 
    let question = prompt("Please enter the title,author,number of pages, read or not yet read, separated by commas");
    let bookParameters = question.split(",");
    let newBook = new Book(bookParameters[0], bookParameters[1], bookParameters[2], bookParameters[3]);
    myLibrary.push(newBook);

    return myLibrary;
  }

  


