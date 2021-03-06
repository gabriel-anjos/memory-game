const flatButton = (function(){
    const module = {}

    module._id=0;

    module._style=(active)=>{
        const $head = document.querySelector("head");
        const $style = document.createElement("style");
        $style.textContent=`
        .flat-button-${module._id}{
            background-color: ${active ? "#f25a70": "#eae6da"};
            box-sizing: border-box;
            justify-content: center;
            display: inline-flex;
            color:${active ?"#fff" : "#fffcee"};
            font-size: 24px;
            font-weight: bold;
            border:none;
            width:50%;
            height:176px;
            padding-top: 60px;
            text-transform: uppercase;
        }
       
        `;
        $head.insertAdjacentElement("beforeend",$style);
    };

    module.handleClick=path=>{
         window.location.hash = `#/${path}`;
    }

    module.render=(content="", active = false,path="")=>{
        // module._id = module._id + 1
        module._id++;
        module._style(active);
        return `<button class="flat-button-${module._id}" onClick="flatButton.handleClick('${path}')">${content}</button>`        
    }

    return{
        render:module.render,
        handleClick:module.handleClick
    }
})()