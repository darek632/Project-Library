const myLibrary = [];


// object constructor function
function Book(title, author, pages, read) { 

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
   
  }


let mainDiv = document.querySelector(".main-container");



// function addBookToLibrary() { 
//     let question = prompt("Please enter the title,author,number of pages, read or not yet read, separated by commas", "Harry Potter and the Philosopher's stone, J K Rowling, 352, read");
//     let bookParameters = question.split(",");
//     let newBook = new Book(bookParameters[0], bookParameters[1], bookParameters[2], bookParameters[3]);
//     myLibrary.push(newBook);

//   }

// function to loop through each array and display each book on page.



// function to create card for each new book

const cardClassNames = ["title", "author-label", "author", "pages-label", "pages", "read"] //array of class names for card to create each div and assign 
//appropriate class to comply with card styling for each new book


//creates initial card but does not append until we've looped through myLibrary and added each value to specific text content element

    // card.classList.add("card");
    // title.classList.add("title");
    // authorLabel.classList.add("author-label");
    // authorLabel.textContent= "Author:";
    // author.classList.add("author");
    // pagesLabel.classList.add("pages-label");
    // pagesLabel.textContent= "Pages:";
    // pages.classList.add("pages");
    // read.classList.add("read");


//     card.classList.add("card");


//     cardClassNames.forEach(className => { 
//         const div = document.createElement("div");
//         div.classList.add(className);
//         div.textContent = `this is ${className}`;
//         card.appendChild(div);
//     })

//     mainDiv.appendChild(card) ;
// }

    // for (let i=0; i < 7; i++) { 
    //     const div = document.createElement("div");
    //     div.textContent = "Pussy bitch";
    //     card.appendChild(div);
    // }

// let arraySplit = "";
// for (let x in myLibrary) { 
//     arraySplit += myLibrary[x] + " ";
// };


function addBookToPage() { 

// myLibrary.forEach( (element) => { 

   let lastBook= myLibrary[myLibrary.length-1];


    let card = document.createElement("div");
    let title = document.createElement("div");
    let authorLabel = document.createElement("div");
    let author = document.createElement("div");
    let pagesLabel = document.createElement("div");
    let pages = document.createElement("div");
    let read = document.createElement("div");
// create divs for each iteration of loop

    card.classList.add("card");
    title.classList.add("title");
    authorLabel.classList.add("author-label");
    authorLabel.textContent= "Author:";
    author.classList.add("author");
    pagesLabel.classList.add("pages-label");
    pagesLabel.textContent= "Pages:";
    pages.classList.add("pages");
    read.classList.add("read");

    // add specific attributes
 
    let sampleBook = [];
    for (let key in lastBook) { 
        sampleBook.push(lastBook[key]);
        console.log(sampleBook);
    };
   
    title.textContent= sampleBook[0];
    author.textContent = sampleBook[1];
    pages.textContent = sampleBook[2];
    read.textContent = sampleBook[3];

    //loop through each object and assign key value to specific elements


    // let newBook = document.createElement("div");
    


    card.appendChild(title);
    card.appendChild(authorLabel);
    card.appendChild(author);
    card.appendChild(pagesLabel);
    card.appendChild(pages);
    card.appendChild(read);


    mainDiv.appendChild(card);

    }


const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".modal-button");
const closeButton = document.querySelector(".close-dialog");

showButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close()
});

document.getElementById("new-book").addEventListener("submit", function (event) {
    event.preventDefault();
    let titleName = document.getElementById("title-input").value; 
    let authorInput = document.getElementById("author-input").value; 
    let pagesInput = document.getElementById("pages-input").value; 
    console.log(titleName);
    console.log(authorInput);
    console.log(pagesInput);
    dialog.close();
})










