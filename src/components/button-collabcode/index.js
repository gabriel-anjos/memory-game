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
        `;
        $head.insertAdjacentElement("beforeend",$style);
    }

    module.render=(content)=>{
        module._style();
        return`<input class="button-collabcode" type="submit" value=${content}>`
    }

    return{
        render:module.render
    }
})();