const inputCollabcode = (function(){
    const module = {}

    module._style =()=>{
        const $head = document.querySelector("head");
        const $style = document.createElement("style");
        $style.textContent=`
            .input-collabcode{
                box-sizing:border-box;
                width:100%;
                color: #3a4042;
                font-size: 18px;
                font-weight: bold;
                border-bottom: 2px solid rgba(58, 64, 66, 0.5);
                padding:12px 12px;
                outline:none;
            }
           
        
        `;

        $head.insertAdjacentElement("beforeend",$style);
    }

    module.render=(placeholder)=>{
        module._style();

            return`<input type="email" class="input-collabcode" placeholder=${placeholder || "" }></input>`
    }

    return{
        render: module.render
    }
})();