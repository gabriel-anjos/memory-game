const memoryCard = (function(){
    //toda funcao foi convertida para arrow function
// function createMemoryCard(){

    // const $MemoryCard = document.createElement('article');



    // const $icon =`<img  class='icon' 
    //             src='img/icon-collabcode.png' 
    //             alt='gale mascote do collabcode'>
    //         </img>`;

    // $MemoryCard.classList.add(.memory-card 'card');
    // $wrapCards.insertBefore($MemoryCard,null);           
    // $MemoryCard.insertAdjacentHTML('afterbegin',$icon)


//     const $memoryCard = `
//         <article class=.memory-card "card">
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
const module = {};
module.create = ()=>{
    const $head = document.querySelector("head");
    const $style = document.createElement("style")
    $style.textContent=`
        .memory-card{
        width: 155px;
        height: 155px;
        position: relative;
        }

        .memory-card .card{
        width:100%;
        height:100%;
        background-color: #f25a70;
        border-radius: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16);
        position: relative;
        cursor: pointer;
        position:absolute;
        /* display: inline-block; */
        /* display: inline-flex; */
    }
    
    .memory-card.-active .card,
    .memory-card.-score .card
    {
        display:none
    }
    
    .memory-card.-active .card.-front,
    .memory-card.-score .card.-front
    {
        display:flex
    }
    
    .memory-card .card > .icon{
        width: 100px;
        height: 100px;
         /* position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%); */
    }
    .memory-card .card.-front::before{
        content:'';
        width: 90px;
        height: 90px;
        background-color: #d4d4d4;
        border-radius: 50%;
        position: absolute;
    }
    
    .memory-card .card.-front > .icon{
        position: absolute;
        transform: translateY(-12px);
    }
    .memory-card .card.-front{
        background-color: #fff;
    }
    
    
    `;

    $head.insertBefore($style,null)

    
    return ({src,alt,nameclass})=> `
        <div class="memory-card " onClick="memoryCard.handleClick(this)" >
        <article class="card -front">
        <img  class='icon'
           src='${src}' 
           alt='${alt}'>
        </img>
   
   
        </article>
        <article class="card">
        <img  class='icon'
           src='img/icon-collabcode.png' 
           alt='o mascote da collabcode gale'>
        </img>
   
   
        </article>
        </div>
        `;
     
}

module.handleClick = $component=>{
    if(!$component.classList.contains("-active")){
       module._activeMemoryCard($component);
       module._checkSure();

       

    }
} 

module._activeMemoryCard = ($component)=>{
    if(qtdActiveMemoryCard < 2){

            
        $component.classList.add("-active");

    }
}

module._checkSure =()=>{

    if(qtdActiveMemoryCard === 1){
        const $activeMemoryCards = document.querySelectorAll(".memory-card.-active")


        if($activeMemoryCards[0].querySelector(".-front .icon").getAttribute("src")===
        $activeMemoryCards[1].querySelector(".-front .icon").getAttribute("src")){
            
            store.score++;
            const score = document.querySelector(".score-bar > .score").textContent = store.score;
            $activeMemoryCards.forEach($memoryCard=>{
                $memoryCard.classList.add("-score");
                $memoryCard.classList.remove("-active");
            })
        }else{

            setTimeout(()=>{
            
                $activeMemoryCards.forEach($memoryCard => {
                    $memoryCard.classList.remove("-active");
                });

                qtdActiveMemoryCard = 0
            
            },1000);

        }
        


        
    };


}



// const createMemoryCardFront = ()=>

//     `
//         <article class=.memory-card "card -front">
//             <img  class='icon' 
//             onClick="handleClick()"
//                 src='img/icon-c.png' 
//                 alt='gale mascote do collabcode'>
//             </img>
            
//         </article>

//     `;




// function createMemoryCardFront(){
        //refatora????o da cria??ao e iser??ao do componente 
//     const $MemoryCardFront = document.createElement('article');

//     const $iconC =`<img  class='icon' 
//                 src='img/icon-c.png' 
//                 alt='gale mascote do collabcode'>
//             </img>`;


    
// $MemoryCardFront.classList.add(.memory-card 'card')
// $MemoryCardFront.classList.add('-front')
// $wrapCards.insertBefore($MemoryCardFront,null)

// $MemoryCardFront.insertAdjacentHTML('afterbegin',$iconC)


//     const $memoryCard = `
//         <article class=.memory-card "card -front">
//             <img  class='icon' 
//             onClick="handleClick()"
//                 src='img/icon-c.png' 
//                 alt='gale mascote do collabcode'>
//             </img>
            
//         </article>

//     `;
//     return $memoryCard;
// }
return {
    create:module.create,
    handleClick:module.handleClick 
}
})();