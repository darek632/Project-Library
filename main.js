const myLibrary = [];

function Book(title, author, pages, read) { 

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    // this.info = function() { 
    //     return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
    // };
  }

  const book1 = new Book("The Hotel Avocado", "Bob Mortimer", 416 , "not read yet");


  function addBookToLibrary() { 
    let question = prompt("Please enter the title,author,number of pages, read or not yet read, separated by commas");
    let bookParameters = question.split(",");
    let newBook = new Book(bookParameters[0], bookParameters[1], bookParameters[2], bookParameters[3]);
    myLibrary.push(newBook);

    return myLibrary;
  }

  const book2 = {
    title: "A Gentleman in Moscow",
    author: "Amor Towles",
    pages: 512,
    read: "read",
  }

  myLibrary.push(book1,book2); // adding books to store in array


let mainDiv = document.querySelector(".main-container");


// function to loop through each array and display each book on page.
myLibrary.forEach( (element) => { 
let sampleBook = "";
for (let x in element) { 
    sampleBook += element[x] + " ";
};

let newBook = document.createElement("div");

newBook.textContent = sampleBook;

mainDiv.appendChild(newBook);

}
);

// function to create card for each new book

const cardClassNames = ["title", "author-label", "author", "pages-label", "pages", "read"]

function createCard () { 
    let card = document.createElement("div");
    card.classList.add("card");
    // for (let i=0; i < 7; i++) { 
    //     const div = document.createElement("div");
    //     div.textContent = "Pussy bitch";
    //     card.appendChild(div);
    // }

    cardClassNames.forEach(className => { 
        const div = document.createElement("div");
        div.classList.add(className);
        div.textContent = `this is ${className}`;
        card.appendChild(div);
    })

    mainDiv.appendChild(card) ;
}

createCard();

// let arraySplit = "";
// for (let x in myLibrary) { 
//     arraySplit += myLibrary[x] + " ";
// };






