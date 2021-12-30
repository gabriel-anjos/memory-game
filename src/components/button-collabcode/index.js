const buttonCollabcode = (function(){
    const module = {}


    module._style=()=>{
        const $head = document.querySelector("head");
        const $style = document.createElement("style");
        $style.textContent=`
            .button-collabcode{
                height:48px;
                width:100%;
                border-radius:24px;
                color:white;
                font-size:14px;
                text-transform:uppercase;
                background-color: #f25a70;

            }
            .input-collabcode + .button-collabcode{
                margin-top:45px;
            }
        `;
        $head.insertAdjacentElement("beforeend",$style);
    }

    module.handleClick=(event , path)=>{
        event.preventDefault();
        window.location.hash = `#/${path}`;
    }

    module.render=({content = "",path=""})=>{
        module._style();
        return`<input class="button-collabcode" type="submit" value=${content} onClick="buttonCollabcode.handleClick(event,'${path}')">`
    }

    return{
        render:module.render,
        handleClick:module.handleClick
    }
})();