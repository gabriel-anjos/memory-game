const $root = document.querySelector("#root");
const $cardsWrapper = createCardsWrapper();
//criaçao do objeto json
// const languageC = {
//     nameclass: "-front ",
//     src: "img/icon-c.png",
//     alt:"icone de um livro c"
// }
//atribuindo o objeto
// const $memoryCardC = createMemoryCard(languageC);

const createMemoryCard = memoryCard();

//passando o json direto sem precisar criar a varialvel como acima.
const $memoryCardC = createMemoryCard({
    
    src: "img/icon-c.png",
    alt:"icone de um livro c"
})




const $memoryCardJava = createMemoryCard({src:"img/icon-java.png",alt:"icone de um livro java"});
const $memoryCardPHP = createMemoryCard({src:"img/icon-php.png",alt:"icone de um livro php"});
const $memoryCardBug = createMemoryCard({src:"img/icon-bug.png",alt:"icone de um bug"});

// $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardBug);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPHP);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPHP);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardBug);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
$root.insertAdjacentElement("beforeend", $cardsWrapper);
                

