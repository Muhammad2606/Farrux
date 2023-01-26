window.addEventListener('DOMContentLoaded', ()=>{

const addNavigation = document.querySelector('.add__navigation');
const bars = document.querySelector('.fa-bars'),
    closeBars = document.querySelector('.close__bars');

bars.addEventListener('click', ()=>{
    addNavigation.classList.remove('hide');
    addNavigation.classList.add('roll-in-right', 'show');
    
});
closeBars.addEventListener('click', ()=>{
    addNavigation.classList.remove('roll-in-right', 'show');
    addNavigation.classList.add('hide');
});
addNavigation.addEventListener('click', (Event)=>{
    if(Event == Event.target){
        console.log(Event.target);
        // addNavigation.classList.add('hide');
        // addNavigation.classList.remove('show');

    }
});


});