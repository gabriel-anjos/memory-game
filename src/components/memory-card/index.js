
    //toda funcao foi convertida para arrow function
// function createMemoryCard(){

    // const $MemoryCard = document.createElement('article');



    // const $icon =`<img  class='icon' 
    //             src='img/icon-collabcode.png' 
    //             alt='gale mascote do collabcode'>
    //         </img>`;

    // $MemoryCard.classList.add('Memory-card');
    // $wrapCards.insertBefore($MemoryCard,null);           
    // $MemoryCard.insertAdjacentHTML('afterbegin',$icon)


//     const $memoryCard = `
//         <article class="Memory-card">
//             <img  class='icon'
//             onClick=handleClick() 
//                 src='img/icon-collabcode.png' 
//                 alt='gale mascote do collabcode'>
//             </img>
        
        
//         </article>
        
//     `;
//     return $memoryCard; 
// }

const createMemoryCard = ()=>
    `
    <article class="Memory-card">
        <img  class='icon'
        onClick=handleClick() 
            src='img/icon-collabcode.png' 
            alt='gale mascote do collabcode'>
        </img>
    
    
    </article>
    `; 



const createMemoryCardFront = ()=>

    `
        <article class="Memory-card -front">
            <img  class='icon' 
            onClick="handleClick()"
                src='img/icon-c.png' 
                alt='gale mascote do collabcode'>
            </img>
            
        </article>

    `;



function handleClick(){
    console.log("ae")
}
// function createMemoryCardFront(){
        //refatoração da criaçao e iserçao do componente 
//     const $MemoryCardFront = document.createElement('article');

//     const $iconC =`<img  class='icon' 
//                 src='img/icon-c.png' 
//                 alt='gale mascote do collabcode'>
//             </img>`;


    
// $MemoryCardFront.classList.add('Memory-card')
// $MemoryCardFront.classList.add('-front')
// $wrapCards.insertBefore($MemoryCardFront,null)

// $MemoryCardFront.insertAdjacentHTML('afterbegin',$iconC)


//     const $memoryCard = `
//         <article class="Memory-card -front">
//             <img  class='icon' 
//             onClick="handleClick()"
//                 src='img/icon-c.png' 
//                 alt='gale mascote do collabcode'>
//             </img>
            
//         </article>

//     `;
//     return $memoryCard;
// }

