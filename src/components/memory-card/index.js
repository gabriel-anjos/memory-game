function createMemoryCard(){

    const $MemoryCard = document.createElement('article');



    const $icon =`<img  class='icon' 
                src='img/icon-collabcode.png' 
                alt='gale mascote do collabcode'>
            </img>`;

    $MemoryCard.classList.add('Memory-card');
    $wrapCards.insertBefore($MemoryCard,null);           
    $MemoryCard.insertAdjacentHTML('afterbegin',$icon)
}


function createMemoryCardFront(){

    const $MemoryCardFront = document.createElement('article');

    const $iconC =`<img  class='icon' 
                src='img/icon-c.png' 
                alt='gale mascote do collabcode'>
            </img>`;


    
$MemoryCardFront.classList.add('Memory-card')
$MemoryCardFront.classList.add('-front')
$wrapCards.insertBefore($MemoryCardFront,null)

$MemoryCardFront.insertAdjacentHTML('afterbegin',$iconC)

}