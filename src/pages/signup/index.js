(function(){
    const $root = document.querySelector("#root");

    const $loginButton = flatButton.render("Log in");
    const $signupButton = flatButton.render("Sign up",true);
    const $logoCollabcode = logoCollabcode.render();
    const $titleCollabcode = titleCollabcode.render("welcome!");
    const $logoWrapper = logoWrapper.render($logoCollabcode,$titleCollabcode);
    const $labelCollabcode = labelCollabcode.render("email");
    const $inputCollabcode = inputCollabcode.render();

    $root.insertAdjacentHTML("beforeend",$loginButton);
    $root.insertAdjacentHTML("beforeend",$signupButton);
    $root.insertAdjacentHTML("beforeend",$logoWrapper);
    $root.insertAdjacentHTML("beforeend",$labelCollabcode);
    $root.insertAdjacentHTML("beforeend",$inputCollabcode);


})();