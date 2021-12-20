const $root = document.querySelector('#root');
const $MemoryCardFront = document.createElement('article');

const $iconC =`<img  class='icon' 
                src='img/icon-c.png' 
                alt='gale mascote do collabcode'>
            </img>`;





                


$MemoryCardFront.classList.add('Memory-card')
$MemoryCardFront.classList.add('-front')
$root.insertBefore($MemoryCardFront,null)

$MemoryCardFront.insertAdjacentHTML('afterbegin',$iconC)