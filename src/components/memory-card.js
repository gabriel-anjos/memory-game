function createMemoryCard(){

    const $MemoryCard = document.createElement('article');



    const $icon =`<img  class='icon' 
                src='img/icon-collabcode.png' 
                alt='gale mascote do collabcode'>
            </img>`;

    $MemoryCard.classList.add('Memory-card');
    $root.insertBefore($MemoryCard,null);           
    $MemoryCard.insertAdjacentHTML('afterbegin',$icon)
}
