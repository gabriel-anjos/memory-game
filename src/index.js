const $root = document.querySelector('#root');
const $MemoryCard = document.createElement('article');
const $MemoryCardFront = document.createElement('article');

const $icon =`<img  class='icon' 
                src='img/icon-collabcode.png' 
                alt='gale mascote do collabcode'>
            </img>`;

const $iconC =`<img  class='icon' 
                src='img/icon-c.png' 
                alt='gale mascote do collabcode'>
            </img>`;



const $icon =`<img class='icon'
                src='img/icon-java.png'
                alt='java icone'</img>`;
                
                        

                
$MemoryCard.classList.add('Memory-card');
$root.insertBefore($MemoryCard,null);

$MemoryCardFront.classList.add('Memory-card')
$MemoryCardFront.classList.add('-front')
$root.insertBefore($MemoryCardFront,$MemoryCard)

$MemoryCard.insertAdjacentHTML('afterbegin',$icon)
$MemoryCardFront.insertAdjacentHTML('afterbegin',$iconC)