const formSignup = (function(){
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
        const $emailLabel = labelCollabcode.render("email");
        const $emailInput = inputCollabcode.render("example@gmail.com");
        const $usernameLabel = labelCollabcode.render("username");
        const $usernameInput = inputCollabcode.render("example-username");
        const $passwordLabel = labelCollabcode.render("password");
        const $passwordInput = inputCollabcode.render("**********");
        const $confirmPasswordLabel = labelCollabcode.render("confirm password");
        const $confirmPasswordInput = inputCollabcode.render("**********");
        const $buttonCollabcode = buttonCollabcode.render("signup");
        
        return`${$emailLabel}
            ${$emailInput}
            ${$usernameLabel}
            ${$usernameInput}
            ${$passwordLabel}
            ${$passwordInput}
            ${$confirmPasswordLabel}
            ${$confirmPasswordInput}
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