$(function () {
    let contact_inp_1 = $(".contact-inp-1");
    let contact_inp_2 = $(".contact-inp-2");
    let contact_inp_3 = $(".contact-inp-3");
    let contact_btn = $("#contact-btn");
    $(contact_btn).click(function () {
        if (contact_inp_1.val() == "" && contact_inp_2.val() == "" && contact_inp_3.val() == "") {
        } else if (contact_inp_1.val() == "") {
        } else if (contact_inp_2.val() == "") {
        } else if (contact_inp_3.val() == "") {
        } else {
            document.querySelector(".contact-btn-block").style.display = "flex";
        }
    });
    setTimeout(() => {
        $('.loader-control').css({
            display: 'none'
        })
    }, 2500);
    setTimeout(() => {
        $('.loader-control').css({
            opacity: '0',
            transition: '1s'
        })
    }, 1500);
    setTimeout(() => {
        $('.loader-control ul li a').addClass('active');
    }, 500);
    $(window).scroll(function () {
        if ($(this).scrollTop() > 20) {
            $('.header-menu').addClass('active');
            
        } 
        else {
            $('.header-menu').removeClass('active');
           
        }
    });
    let link = $('.header-menu-container_block ul li .header-menu-links');
    let bg = $('.header-menu ul:nth-child(2)');
    link.on('click', function (e) {
        e.preventDefault();
        link.removeClass('active');
        bg.removeClass('active');
        let selector = $(this).addClass('active').attr('href');
        let target = $(selector);
        $('html , body').animate({
            scrollTop: target.offset().top - 100
        }, 300);
    });
    let link2 = $('.scroll-link');
    link2.on('click', function (e) {
        e.preventDefault();
        link2.removeClass('active');
        let selector = $(this).addClass('active').attr('href');
        let target = $(selector);
        $('html , body').animate({
            scrollTop: target.offset().top - 100
        }, 400);
    });
    $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        link.each(function () {
            let selector = $(this).attr('href');
            let target = $(selector);
            if (scroll >= target.offset().top - 200) {
                link.removeClass('active');
                $(this).addClass('active');
            }
        });
    });
    $('.header-menu ul:nth-child(2)').removeClass('active');
    $('.header-menu-logo-control').click(function () {
        $('.header-menu ul:nth-child(2)').toggleClass('active');
    });
});
let menuToggle = document.querySelector('.header-menu-logo-control');
menuToggle.onclick = function () {
    menuToggle.classList.toggle('active');
}
AOS.init();

// skills bar

const skillsSection = document.querySelector('.skills-section');
const progressBars = document.querySelectorAll('.skills-block');
function showProgress() {
    progressBars.forEach(progressBars => {
        const value = progressBars.dataset.progress;
        progressBars.style.opacity = 1;
        progressBars.style.width = `${value}%`;
    })
}
function hideProgress() {
    progressBars.forEach(p => {
        p.style.opacity = 0;
        p.style.width = 0;
    });
}
window.addEventListener('scroll' , () => {
   const sectionPos = skillsSection.getBoundingClientRect().top; 
   const screenPos = window.innerHeight;
   
   if(sectionPos < screenPos) {
       showProgress();
   }else{
       hideProgress();
   }
});

// skills bar