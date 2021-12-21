
function createCardsWrapper(){
        //refatoração transformando a string em um elemento da pagina.
    // const $cardsWrapper = `
    //     <section class="cards-wrapper"></section>
    
    // `;

    const $cardsWrapper = document.createElement("section");
    $cardsWrapper.classList.add("cards-wrapper");

   

    return $cardsWrapper;
}