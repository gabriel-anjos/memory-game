(function(){
    
    const {hash} = window.location;
    const paths =[];
    paths[""]=login;
    paths["#/login"]=login;
    paths["#/signup"] = signup;

    paths[hash]();
    
    // if(hash === "#/signup"){
    //     signup();
    // }else{
    //     login();
    // }
    
  
})();