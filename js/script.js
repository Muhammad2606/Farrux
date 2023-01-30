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
    
    if(Event.target){
        function barsShow(){
            setTimeout(() => {
                addNavigation.classList.add('hide');
                addNavigation.classList.remove('show','fade'); 
                clearTimeout(timirBars);
            }, 1000);     

        }
 
        barsShow();
 
    }
});


    const plus = document.querySelector('.fa-plus');
    const plus1 = document.querySelector('.p0');
    const plus2 = document.querySelector('.p1');
    const plus3 = document.querySelector('.p2');
    const plus4 = document.querySelector('.p3');
    const plus5 = document.querySelector('.p4');
    const plus6 = document.querySelector('.p5');
    const plus7 = document.querySelector('.p6');
    const addWork = document.querySelector('.add__work');
    const addWork2 = document.querySelector('.w2');
    const addWork3 = document.querySelector('.w3');
    const addWork4 = document.querySelector('.w4');
    const addWork5 = document.querySelector('.w5');
    const addWork6 = document.querySelector('.w6');
    const addWork7 = document.querySelector('.w7');
    const addWork8 = document.querySelector('.w8');

    workClose = document.querySelector('.close__work');

    plus.addEventListener('click', ()=>{
        addWork.classList.add('show');
        addWork.classList.remove('hide');
        document.body.style.overflow = 'hidden';
    });
    workClose.addEventListener('click', ()=>{
        addWork.classList.add('hide');
        addWork.classList.remove('show');
        document.body.style.overflow = '';
    });
    addWork.addEventListener('click', (Event) =>{
        
        if(Event.target == addWork){
            addWork.classList.add('hide');
            addWork.classList.remove('show');
            document.body.style.overflow = '';
        }
    });

    // 2

    plus.addEventListener('click', ()=>{
        addWork.classList.add('show');
        addWork.classList.remove('hide');
        document.body.style.overflow = 'hidden';
    });
    workClose.addEventListener('click', ()=>{
        addWork.classList.add('hide');
        addWork.classList.remove('show');
        document.body.style.overflow = '';
    });
    addWork.addEventListener('click', (Event) =>{
        
        if(Event.target == addWork){
            addWork.classList.add('hide');
            addWork.classList.remove('show');
            document.body.style.overflow = '';
        }
    });


});
