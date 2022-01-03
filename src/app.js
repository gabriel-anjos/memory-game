(function(){
    
    const {hash} = window.location;
    const paths =[];
    paths[""]= login;
    paths["#/login"]= login;
    paths["#/signup"] = signup;
    paths["#/game"] = Game;
    paths["#/404"] = status404;

    if(paths[hash] === undefined){
        paths["#/404"]();
    }else{

        paths[hash]();
    };
    
    // if(hash === "#/signup"){
    //     signup();
    // }else{
    //     login();
    // }
    
  
})();