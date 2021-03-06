const logoCollabcode = (function(){
    const module = {};
    module._style=()=>{
        const $head = document.querySelector("head");
        const $style = document.createElement("style");
        $style.textContent=`
            .logo-collabcode{
                border: solid 40px white;
                border-radius: 50%;
                display:inline-block;
                background-color:white;
            }
            .logo-collabcode > .logo{
                width: 175px;

            }
        `;
        $head.insertAdjacentElement('beforeend',$style)
    }

    module.render =()=>{
        module._style();
        
        return`
        <figure class="logo-collabcode">
        <img class="logo" src="/img/icon-collabcode.png">
        </figure>
        `;

    } 
    
    
    
    return{
        render: module.render
    }

})();