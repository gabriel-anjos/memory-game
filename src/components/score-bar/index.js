const scoreBar = (function(){
    const module = {};

    module._style = function (){
        const $head = document.querySelector("head")
        const $style =  document.createElement("style");
        $style.textContent=`
        .score-bar{
            
            background-color:#3a4042;
            height:40px;
            text-align: center;
            font-family:'Roboto',sans-serif;
            font-weight:bold;
        }

        .score-bar > .score{
            color:#FFF;
            line-height:40px
        }
       
       `;

       $head.insertBefore($style,null);
    }


    module.create = ()=>{
        module._style()
        return`
        
        <header class="score-bar">
            <span class="score">0</span>
        </header>

        `
    }

 return{
    create: module.create
 }   
})();