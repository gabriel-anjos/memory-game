const gameButton = (function(){
const module = {};

module._style=()=>{
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    
    $style.textContent=`
        .game-button{
        height: 100px;
        width: 100px;
        border-radius: 50%;
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #57606f;
        border: 3px solid #fffcee;
        color: #fffcee;
        font-weight: bold;
        font-size: 1.0em;
        text-transform: upercase;
        box-shadow: 0px 4px 8px #3a4042 ;
        cursor: pointer;
    }
    
    `;
    $head.insertBefore($style,null);
}


module.render=content=>{
    module._style();

    return`
    <button class ="game-button">${content}</button>
    
    `
}

return{
    render:module.render,
    handleClick: module.handleClick
};
})();