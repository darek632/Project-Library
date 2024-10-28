const myLibrary = [];


// object constructor function
function Book(title, author, pages, read) { 

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
   
  }

let sampleBook1 = new Book ("Harry Potter and the Chamber of Secrets","J.K. Rowling",251, "Not read yet");
let sampleBook2 = new Book ("The Satsuma Complex", "Bob Mortimer", 320, "Read");

let mainDiv = document.querySelector(".main-container");

let firstCard = document.querySelector(".card:first-child");

myLibrary.push(sampleBook1, sampleBook2);

firstCard.setAttribute("data-index","0");

console.log(firstCard);

let secondCard = document.querySelectorAll(".card")[1];
secondCard.setAttribute("data-index","1");

console.log(secondCard);




// function addBookToLibrary() { 
//     let question = prompt("Please enter the title,author,number of pages, read or not yet read, separated by commas", "Harry Potter and the Philosopher's stone, J K Rowling, 352, read");
//     let bookParameters = question.split(",");
//     let newBook = new Book(bookParameters[0], bookParameters[1], bookParameters[2], bookParameters[3]);
//     myLibrary.push(newBook);

//   }

// function to loop through each array and display each book on page.



// function to create card for each new book

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
    let buttons = document.createElement("div");
    let remove = document.createElement("button");
    let changeRead = document.createElement("button");
   

    // create each div that makes up complete card.


    card.classList.add("card");
    title.classList.add("title");
    authorLabel.classList.add("author-label");
    authorLabel.textContent= "Author:";
    author.classList.add("author");
    pagesLabel.classList.add("pages-label");
    pagesLabel.textContent= "Pages:";
    pages.classList.add("pages");
    read.classList.add("read");
    buttons.classList.add("buttons");
    remove.classList.add("remove");
    changeRead.classList.add("change-read");


    // add specific attributes to these divs to inherit the card styling and content.

    
    let cards = document.querySelectorAll(".card");
    let count = cards.length;

    card.setAttribute("data-index",count);
    console.log(card);

    // count number of '.card elements and assign the data-type value of length of all '.cards'. for associating each button 
    // with index of myLibrary for removing.
  
 
    let bookHolder = [];
    for (let key in lastBook) { 
        bookHolder.push(lastBook[key]);
        console.log(bookHolder);
    };
   
    title.textContent= bookHolder[0];
    author.textContent = bookHolder[1];
    pages.textContent = bookHolder[2];
    read.textContent = bookHolder[3];

    remove.textContent = "Remove";
    changeRead.textContent = "Read/Not yet read";

    //loop through each object and assign key value to text of specific elements using for..in which handles looping through objects.


    // let newBook = document.createElement("div");
    


    card.appendChild(title);
    card.appendChild(authorLabel);
    card.appendChild(author);
    card.appendChild(pagesLabel);
    card.appendChild(pages);
    card.appendChild(read);
    buttons.appendChild(remove);
    buttons.appendChild(changeRead);
    card.appendChild(buttons);



    mainDiv.appendChild(card);

    }

    // once the text content has been assigned, we then append elements to DOM to make them visible on the page.


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
    let titleInput = document.getElementById("title-input").value; 
    let authorInput = document.getElementById("author-input").value; 
    let pagesInput = document.getElementById("pages-input").value; 
    let readInput = document.querySelector('input[name="read"]:checked').value;

    let newBook = new Book(titleInput,authorInput,pagesInput, readInput);

    myLibrary.push(newBook);

    addBookToPage();

    event.target.reset();

    // let newBook = new Book(titleInput, authorInput, pagesInput, ) 

    // get value from form inputs
    //assign value to variable for future use
    // create a new object using input value variables as parameters
    // 
    dialog.close();
})


// when remove button is clicked: 

//myLibrary item at index of 'data-index=' value is removed from myLibrary
// card element (and hopefully all children with it) are removed
// if not automatic, all children elements are removed/hidden. 
// reassign data-index of remaining ".card" elements to correspond with new length of array. 

mainDiv.addEventListener("click", function (event) { 

    const cardToRemove = event.target.closest(".card");
    const currentArrayIndex = parseInt(cardToRemove.dataset.index);

    if (event.target.classList.contains("change-read")) { 
        

        myLibrary[currentArrayIndex].changeReadStatus();
        const closestRead = cardToRemove.querySelector(".read");

            if (closestRead) { 
                closestRead.textContent = myLibrary[currentArrayIndex].read;
            }

    }

    if (event.target.classList.contains("remove")) {

        //locate the value of this card's data-index
        //remove the object at myLibrary[this.data-index]
        
       
        
        myLibrary.splice(currentArrayIndex,1);

        // locate all cards now that we've deleted. 
        // assign index of cards. length to each card. 

        console.log(currentArrayIndex,typeof(currentArrayIndex));
        console.log(myLibrary);
            if (cardToRemove) { 
                cardToRemove.remove();
                const remainingCardsIndex = document.querySelectorAll(".card");

                remainingCardsIndex.forEach((card, newIndex) => { 
                    card.setAttribute("data-index", newIndex );
                });
            }

        }


    

            // remainingCards.forEach((card, newIndex) => {
            //     card.setAttribute("data-index", newIndex);
            // });
    
    
}
);

//setting the event on the nearest 'parent' holding all of the remove buttons and then using event delegation to target the specific button.
// saves adding individual event listeners on each button.


// change read status function, created on the Book.prototype so all can access: 

//onClick { 
// if (value of current object's [read:] === "read") 
    // [read:] = "Not read yet"


// else if ( value of current object's read: === "Not read yet") { 
    // [read:] = Read }

    // //read.textContent = value of [read:]

Book.prototype.changeReadStatus = function () { 
    if (this.read === "Read") { 
        this.read = "Not read yet";
    }
    else if (this.read === "Not read yet" ) {
        this.read = "Read";
    }
};






