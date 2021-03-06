const formLogin = (function(){
    const module = {}

    module._style=()=>{
        const $head = document.querySelector("head");
        const $style = document.createElement("style");
        $style.textContent=`
            .form-signup{
                padding: 0 35px 40px;

            }
        
        `;
        $head.insertAdjacentElement("beforeend",$style);
    }

    module._children=()=>{
       
        const $usernameLabel = labelCollabcode.render("username or email");
        const $usernameInput = inputCollabcode.render({placeholder:"example@example.com"});
        const $passwordLabel = labelCollabcode.render("password");
        const $passwordInput = inputCollabcode.render({id:"password",placeholder:"8 digits",type:"password"});
        const $eyeCollabcode = eyeCollabcode.render({attrFor:"password"});
        const $linkCollab = linkCollab.render({href:"#",content:"Forget password?"});
       
        const $buttonCollabcode = buttonCollabcode.render({content:"login",path:"game"});
        
        return`
            ${$usernameLabel}
            ${$usernameInput}
            ${$passwordLabel}
            ${$passwordInput}
            ${$eyeCollabcode}
            ${$linkCollab}
            ${$buttonCollabcode}

        `;
    }
    module.render=()=>{
        module._style();
        return`<form class="form-signup" action="" method="POST">${module._children()}</form>`;
    }

    return{
        render:module.render
    }
})();