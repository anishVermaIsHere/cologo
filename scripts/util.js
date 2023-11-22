


export const validateField=()=>{
    const subscribeField=document.querySelector('#subscribe-email');
    const emailField=document.querySelector('#contact-email');
    const emailErrLabel=document.querySelector('#contact-email-error');
    const subscribeErrLabel=document.querySelector('#subscribe-error');


    if(subscribeField.value){
        subscribeField.addEventListener('keyup',(e)=>{
            if(validate(subscribeField,subscribeErrLabel)){
                subscribeErrLabel.innerHTML="";
                subscribeErrLabel.style.display="none";
                subscribeField.style.borderColor='#dee2e6';
                return true;
            }            
        });
        return validate(subscribeField,subscribeErrLabel);
    }
    if(emailField.value){
        emailField.addEventListener('keyup',(e)=>{
            if(validate(emailField,emailErrLabel)){
                emailErrLabel.innerHTML="";
                emailErrLabel.style.display="none";
                emailField.style.borderColor='#dee2e6';
                return true;
            }
        });
        return validate(emailField,emailErrLabel);
    }

}

const validate=(field,errorLabel)=>{
    if(!field.value.trim().match(/^[a-zA-Z\._\-0-9]*[@][a-zA-Z]*[\.][a-z]{2,4}$/)){
        errorLabel.innerHTML="Email not valid";
        field.style.borderColor='red';
        errorLabel.style.display="block";
        return false;
    } else {
        return true;
    }
}

export const toggleMenu=()=>{
    const closeMenu=document.querySelector('#close-sidebar-button');
    const openMenu=document.querySelector('#hambg-button');
    const outerLayout=document.querySelector('#bg-layout');
    const sidebarMenu=document.querySelector('#sidebar-menu');

    closeMenu.addEventListener('click',()=>{
        sidebarMenu.style.transform='translateX(-120%)';
        outerLayout.style.display='none';
    });

    openMenu.addEventListener('click',()=>{
        sidebarMenu.style.transform='translateX(0%)';
        outerLayout.style.display='block';
    })
    outerLayout.addEventListener('click',()=>{
        sidebarMenu.style.transform='translateX(-120%)';
        outerLayout.style.display='none';
    })
}


export const searchToggle=()=>{
    const search=document.querySelector('#nav-search-icon');
    const close=document.querySelector('#close-search-icon');
    const searchBox=document.querySelector('#navbar-searchbox-form');

    close.addEventListener('click',()=>{
        searchBox.style.display='none';
        close.style.display='none';
        search.style.display='block';
    })
    search.addEventListener('click',()=>{
        searchBox.style.display='block';
        close.style.display='block';
        search.style.display='none';
    })
}

