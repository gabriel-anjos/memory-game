const $root = document.querySelector("#root");
const $cardsWrapper = createCardsWrapper();
const $memoryCard = createMemoryCard("img/icon-collabcode.png","gale mascote da collabcode");
//criaçao do objeto json
// const languageC = {
//     nameclass: "-front ",
//     src: "img/icon-c.png",
//     alt:"icone de um livro c"
// }
//atribuindo o objeto
// const $memoryCardC = createMemoryCard(languageC);


//passando o json direto sem precisar criar a varialvel como acima.
const $memoryCardC = createMemoryCard({
    nameclass: "-front ",
    src: "img/icon-c.png",
    alt:"icone de um livro c"
})




const $memoryCardJava = createMemoryCard({src:"img/icon-java.png",alt:"icone de um livro java",nameclass:"-front"});
const $memoryCardPHP = createMemoryCard({src:"img/icon-php.png",alt:"icone de um livro php", nameclass:"-front"});
const $memoryCardBug = createMemoryCard({src:"img/icon-bug.png",alt:"icone de um bug",nameclass:"-front"});

// $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardBug);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPHP);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPHP);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardBug);

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
$root.insertAdjacentElement("beforeend", $cardsWrapper);
                

