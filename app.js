const books = [
  {
    "title": "Harry Potter and the Sorcerer's Stone"
  },
  {
    "title": "Gone with the Wind"
  },
  {
    "title": "1984"
  },
  {
    "title": "The Lion"
  },
  {
    "title": "Ulysses"
  },
  {
    "title": "Sapiens: A Brief History of Humankind"
  },
  {
    "title": "Faust"
  },
  {
    "title": "Great Expectations"
  },
  {
    "title": "The Fellowship of the Ring"
  },
  {
    "title": "To Kill a Mockingbird"
  },
  {
    "title": "The Little Prince"
  },
  {
    "title": "The Art of War"
  },
  {
    "title": "Lord of the Flies"
  },
  {
    "title": "Jane Eyre"
  },
  {
    "title": "All Quiet on the Western Front"
  },
  {
    "title": "The Old Man and the Sea"
  },
  {
    "title": "One Hundred Years of Solitude"
  },
  {
    "title": "The Wind-Up Bird Chronicle"
  },
  {
    "title": "The Book Thief"
  },
  {
    "title": "Moby-Dick; or, The Whale"
  },
  {
    "title": "The Great Gatsby"
  },
  {
    "title": "The Alchemist"
  },
  {
    "title": "Lolita"
  },
  {
    "title": "The Divine Comedy"
  },
  {
    "title": "The Adventures of Huckleberry Finn"
  },
  {
    "title": "Memoirs of a Geisha"
  },
  {
    "title": "Brave New World"
  },
  {
    "title": "Fahrenheit 451"
  },
  {
    "title": "Pride and Prejudice"
  },
  {
    "title": "The Kite Runner"
  },
  {
    "title": "Collected Fictions"
  },
  {
    "title": "Wuthering Heights"
  },
  {
    "title": "Romeo and Juliet"
  },
  {
    "title": "Austerlitz"
  },
  {
    "title": "The Catcher in the Rye"
  },
  {
    "title": "The Hitchhiker's Guide to the Galaxy"
  },
  {
    "title": "Mrs. Dalloway"
  },
  {
    "title": "A Game of Thrones"
  },
  {
    "title": "The Grapes of Wrath"
  },
  {
    "title": "Dao De Jing: The Book of the Way"
  },
  {
    "title": "Three Men in a Boat"
  },
  {
    "title": "Mary Poppins"
  },
  {
    "title": "The Sound and the Fury"
  },
  {
    "title": "Catch-22"
  },
  {
    "title": "The Odyssey"
  },
  {
    "title": "The Secret Garden"
  },
  {
    "title": "Swann's Way"
  },
  {
    "title": "The Adventures of Sherlock Holmes"
  },
  {
    "title": "The Trial"
  },
  {
    "title": "One Flew Over the Cuckoo's Nest"
  },
  {
    "title": "Pippi Longstocking"
  },
  {
    "title": "Frankenstein: The 1818 Text"
  },
  {
    "title": "Never Let Me Go"
  },
  {
    "title": "The Master and Margarita"
  },
  {
    "title": "Charlie and the Chocolate Factory"
  },
  {
    "title": "War and Peace"
  },
  {
    "title": "The Picture of Dorian Gray"
  },
  {
    "title": "Crime and Punishment"
  },
  {
    "title": "Dracula"
  },
  {
    "title": "The Red and the Black"
  },
  {
    "title": "Midnight's Children"
  },
  {
    "title": "The Call of the Wild"
  },
  {
    "title": "The Poisonwood Bible"
  },
  {
    "title": "The Bell Jar"
  },
  {
    "title": "Fight Club"
  },
  {
    "title": "And Then There Were None"
  },
  {
    "title": "Twenty Thousand Leagues Under the Sea"
  },
  {
    "title": "The Plague"
  },
  {
    "title": "The Prophet"
  },
  {
    "title": "Perfume: The Story of a Murderer"
  },
  {
    "title": "Alice's Adventures in Wonderland"
  },
  {
    "title": "The Portrait of a Lady"
  },
  {
    "title": "A Brief History of Time"
  },
  {
    "title": "The Three Musketeers"
  },
  {
    "title": "Siddhartha"
  },
  {
    "title": "The Stand"
  },
  {
    "title": "The Magic Mountain"
  },
  {
    "title": "Slaughterhouse-Five"
  },
  {
    "title": "Winnie-the-Pooh"
  },
  {
    "title": "A Prayer for Owen Meany"
  },
  {
    "title": "Les Misérables"
  },
  {
    "title": "Robinson Crusoe"
  },
  {
    "title": "The Last Samurai"
  },
  {
    "title": "Madame Bovary"
  },
  {
    "title": "Sister Carrie"
  },
  {
    "title": "The Girl with the Dragon Tattoo"
  },
  {
    "title": "The Complete Stories and Poems"
  },
  {
    "title": "The Secret Life of Bees"
  },
  {
    "title": "Little Women"
  },
  {
    "title": "Atonement"
  },
  {
    "title": "Charlotte's Web"
  },
  {
    "title": "The Little Mermaid"
  },
  {
    "title": "Gulliver's Travels"
  },
  {
    "title": "On the Road"
  },
  {
    "title": "A Clockwork Orange"
  },
  {
    "title": "Don Quixote"
  },
  {
    "title": "Hunger"
  },
  {
    "title": "Anne of Green"
  },
  {
    "title": "Lord Jim"
  }
]

const button = document.querySelector(".button-os");
const output = document.querySelector(".output");

const displayBook = () => {
  const randomNumber = getRandomNumber(1, 99)
  const book = books[randomNumber].title;
  output.innerText = book;
}

const getRandomNumber = (min, max) => 
  Math.floor(Math.random() * (max - min) + min);
  
let randombook = books[getRandomNumber(1, 99)].title;

console.log(getRandomNumber(1, 99));

console.log(randombook);


button.addEventListener("click", displayBook);


