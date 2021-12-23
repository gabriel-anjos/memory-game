
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

//passsando um objectdestructuring como parame
const memoryCard = ()=>{
    const $head = document.querySelector("head");
    const $style = document.createElement("style")
    $style.textContent=`
        .Memory-card{
        width: 155px;
        height: 155px;
        background-color: #f25a70;
        border-radius: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16);
        position: relative;
        cursor: pointer;    
        /* display: inline-block; */
        /* display: inline-flex; */
    }
    
    
    .Memory-card > .icon{
        width: 100px;
        height: 100px;
         /* position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%); */
    }
    .Memory-card.-front::before{
        content:'';
        width: 90px;
        height: 90px;
        background-color: #d4d4d4;
        border-radius: 50%;
        position: absolute;
    }
    
    .Memory-card.-front > .icon{
        position: absolute;
        transform: translateY(-12px);
    }
    .Memory-card.-front{
        background-color: #fff;
    }
    
    
    `;

    $head.insertBefore($style,null)

    
    return ({src,alt,nameclass})=> `
        <article class="Memory-card ${nameclass}">
        <img  class='icon'
        onClick=handleClick() 
           src='${src}' 
           alt='${alt}'>
        </img>
   
   
        </article>
        `;
     
};
   








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

