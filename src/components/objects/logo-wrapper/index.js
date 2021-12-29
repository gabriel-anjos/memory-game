const logoWrapper = (function(){
    const module ={}
    
    module.render=(...$children)=>{

        return`<div class="avatar-wrapper">${$children.join("")} </div>`
    }


    return{
        render: module.render
    };
})();