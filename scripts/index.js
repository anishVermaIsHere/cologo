"use strict"
import { toggleMenu, searchToggle,validateField} from "./util.js";


const contactForm=document.querySelector('#contact-form');
const subsribeForm=document.querySelector('.subscribe-form');

subsribeForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    if(validateField()){
        alert(JSON.stringify({susbscribedEmail:event.target[0].value}));
        // form values
    };
})

contactForm.addEventListener('submit',(event)=>{
   event.preventDefault();
   if(validateField()){
        // form values
    };

});

toggleMenu();
searchToggle();