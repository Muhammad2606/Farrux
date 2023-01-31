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

    workClose = document.querySelectorAll('.close__work');

    plus.addEventListener('click', ()=>{
        addWork.classList.add('show');
        addWork.classList.remove('hide');
  
    });
    workClose.forEach(item => {
        item.addEventListener('click', ()=>{
            addWork.classList.add('hide');
            addWork.classList.remove('show');
            
        });
    });
    
    addWork.addEventListener('click', (Event) =>{
        
        if(Event.target == addWork){
            addWork.classList.add('hide');
            addWork.classList.remove('show');
           
        }
    });

    // 2

    plus1.addEventListener('click', ()=>{
        addWork2.classList.add('show');
        addWork2.classList.remove('hide');
  
    });
    workClose.forEach(item => {
        item.addEventListener('click', ()=>{
            addWork2.classList.add('hide');
            addWork2.classList.remove('show');
        
        });
    });
    addWork2.addEventListener('click', (Event) =>{
        
        if(Event.target == addWork2){
            addWork2.classList.add('hide');
            addWork2.classList.remove('show');
         
        }
    });

    // 3

    plus2.addEventListener('click', ()=>{
        addWork3.classList.add('show');
        addWork3.classList.remove('hide');
        
    });
    workClose.forEach(item => {
        item.addEventListener('click', ()=>{
            addWork3.classList.add('hide');
            addWork3.classList.remove('show');
            
        });
    });
    addWork3.addEventListener('click', (Event) =>{
        
        if(Event.target == addWork3){
            addWork3.classList.add('hide');
            addWork3.classList.remove('show');
           
        }
    });
    // 4

    plus3.addEventListener('click', ()=>{
        addWork4.classList.add('show');
        addWork4.classList.remove('hide');
        
    });
    workClose.forEach(item => {
        item.addEventListener('click', ()=>{
            addWork4.classList.add('hide');
            addWork4.classList.remove('show');
          
        });
    });
    addWork4.addEventListener('click', (Event) =>{
        
        if(Event.target == addWork4){
            addWork4.classList.add('hide');
            addWork4.classList.remove('show');
          
        }
    });

    plus4.addEventListener('click', ()=>{
        addWork4.classList.add('show');
        addWork4.classList.remove('hide');
        
    });
    workClose.forEach(item => {
        item.addEventListener('click', ()=>{
            addWork4.classList.add('hide');
            addWork4.classList.remove('show');
            
        });
    });
    
    addWork4.addEventListener('click', (Event) =>{
        
        if(Event.target == addWork4){
            addWork4.classList.add('hide');
            addWork4.classList.remove('show');
            
        }
    });

    // 2

    plus5.addEventListener('click', ()=>{
        addWork6.classList.add('show');
        addWork6.classList.remove('hide');
        
    });
    workClose.forEach(item => {
        item.addEventListener('click', ()=>{
            addWork6.classList.add('hide');
            addWork6.classList.remove('show');
           
        });
    });
    addWork6.addEventListener('click', (Event) =>{
        
        if(Event.target == addWork6){
            addWork6.classList.add('hide');
            addWork6.classList.remove('show');
         
        }
    });

    // 3

    plus6.addEventListener('click', ()=>{
        addWork7.classList.add('show');
        addWork7.classList.remove('hide');
        
    });
    workClose.forEach(item => {
        item.addEventListener('click', ()=>{
            addWork7.classList.add('hide');
            addWork7.classList.remove('show');
            
        });
    });
    addWork7.addEventListener('click', (Event) =>{
        
        if(Event.target == addWork7){
            addWork7.classList.add('hide');
            addWork7.classList.remove('show');
           
        }
    });
    // 4

    plus7.addEventListener('click', ()=>{
        addWork8.classList.add('show');
        addWork8.classList.remove('hide');
        
    });
    workClose.forEach(item => {
        item.addEventListener('click', ()=>{
            addWork8.classList.add('hide');
            addWork8.classList.remove('show');
            
        });
    });
    addWork8.addEventListener('click', (Event) =>{
        
        if(Event.target == addWork8){
            addWork8.classList.add('hide');
            addWork8.classList.remove('show');
       
        }
    });

    const swiper = new Swiper('.swiper', {
        autoplay:{
delay:3000,
disableOnInteraction: false,
},
loop: true,


pagination: {
el: '.swiper-pagination',
clickable:true,
},

navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev',
},



});

});
