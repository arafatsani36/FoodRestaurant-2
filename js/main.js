const bar = document.querySelector('#bar');
const navbar =document.querySelector('.nav');
const menu = document.querySelector('.list'); 
const menulist =document.querySelector('.menulist');

// scroll spy 

const section = document.querySelectorAll('section');
const navlinks = document.querySelectorAll('.nav ul li a')


bar.onclick = () => {
    bar.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}


window.onscroll = () => {
    bar.classList.remove('fa-times');
    navbar.classList.remove('active'); 
    
    // scroll spy 

    section.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach( links => {
                links.classList.remove('active');
                document.querySelector('.nav ul li a[href*=' + id + ']').classList.add('active');
            });
        };
    }); 
    
     
};

// menu section 

$(document).ready(function(){
    
    $('.list .menulist').click(function(){
        $(this).addClass('active').siblings().removeClass('active');

        let src = $(this).attr('data-src'); 
        $('.menu .row .image img').attr('src' ,src); 
    });

});



// initializing aos 

AOS.init({
    dellay : 400,
    duration:1000,
})