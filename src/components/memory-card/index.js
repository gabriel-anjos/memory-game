
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

//passsando um objectdestructuring como parametro
const createMemoryCard = ({src,alt,nameclass})=>
    //object destructuring
    // const {src,alt,nameclass}= card;
    // return
   `
   <article class="Memory-card ${nameclass}">
       <img  class='icon'
       onClick=handleClick() 
           src='${src}' 
           alt='${alt}'>
       </img>
   
   
   </article>
   `; 










// const createMemoryCardFront = ()=>

//     `
//         <article class="Memory-card -front">
//             <img  class='icon' 
//             onClick="handleClick()"
//                 src='img/icon-c.png' 
//                 alt='gale mascote do collabcode'>
//             </img>
            
//         </article>

//     `;



const handleClick = ()=>console.log("ae")
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

