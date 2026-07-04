/*
=========================================
7th Heaven Cakes
Application Script
Version : 1.0
=========================================
*/

document.addEventListener("DOMContentLoaded", () => {

    console.log("7th Heaven Loaded");

    initSmoothScroll();
    initButtonAnimations();
    initScrollProgress();
    initActiveNavigation();
    initHeroAnimation();
    initFAQ();
    initScrollTop();

});


/* =========================================
   Smooth Scroll
========================================= */

function initSmoothScroll(){

    document.querySelectorAll('a[href^="#"]').forEach(link=>{

        link.addEventListener("click",function(e){

            e.preventDefault();

            const target=document.querySelector(this.getAttribute("href"));

            if(target){

                target.scrollIntoView({
                    behavior:"smooth",
                    block:"start"
                });

            }

        });

    });

}


/* =========================================
   Button Click Animation
========================================= */

function initButtonAnimations(){

    const buttons=document.querySelectorAll("button,.primary-btn");

    buttons.forEach(btn=>{

        btn.addEventListener("click",()=>{

            btn.style.transform="scale(.96)";

            setTimeout(()=>{

                btn.style.transform="scale(1)";

            },120);

        });

    });

}


/* =========================================
   Active Navigation
========================================= */

function initActiveNavigation(){

    const sections=document.querySelectorAll("section");

    const navLinks=document.querySelectorAll(".quick-nav a");

    window.addEventListener("scroll",()=>{

        let current="";

        sections.forEach(section=>{

            const top=section.offsetTop-140;

            if(window.scrollY>=top){

                current=section.getAttribute("id");

            }

        });

        navLinks.forEach(link=>{

            link.classList.remove("active");

            if(link.getAttribute("href")=="#"+current){

                link.classList.add("active");

            }

        });

    });

}


/* =========================================
   Scroll Progress
========================================= */

function initScrollProgress(){

    let fired25=false;
    let fired50=false;
    let fired75=false;
    let fired100=false;

    window.addEventListener("scroll",()=>{

        const scrollTop=window.scrollY;

        const height=document.documentElement.scrollHeight-window.innerHeight;

        const percent=Math.round((scrollTop/height)*100);

        if(percent>=25 && !fired25){

            fired25=true;

            if(typeof trackClick==="function"){

                trackClick("scroll_depth","25%");

            }

        }

        if(percent>=50 && !fired50){

            fired50=true;

            if(typeof trackClick==="function"){

                trackClick("scroll_depth","50%");

            }

        }

        if(percent>=75 && !fired75){

            fired75=true;

            if(typeof trackClick==="function"){

                trackClick("scroll_depth","75%");

            }

        }

        if(percent>=95 && !fired100){

            fired100=true;

            if(typeof trackClick==="function"){

                trackClick("scroll_depth","100%");

            }

        }

    });

}


/* =========================================
   Hero Fade Animation
========================================= */

function initHeroAnimation(){

    const hero=document.querySelector(".hero");

    if(!hero) return;

    window.addEventListener("scroll",()=>{

        const scroll=window.scrollY;

        hero.style.opacity=1-(scroll/500);

        hero.style.transform=`translateY(${scroll*.15}px)`;

    });

}


/* =========================================
   Utility Functions
========================================= */

function showToast(message){

    const toast=document.createElement("div");

    toast.innerText=message;

    toast.style.position="fixed";
    toast.style.bottom="90px";
    toast.style.left="50%";
    toast.style.transform="translateX(-50%)";
    toast.style.background="#d81b60";
    toast.style.color="#fff";
    toast.style.padding="12px 20px";
    toast.style.borderRadius="30px";
    toast.style.zIndex="9999";
    toast.style.fontSize="14px";
    toast.style.boxShadow="0 10px 25px rgba(0,0,0,.2)";

    document.body.appendChild(toast);

    setTimeout(()=>{

        toast.remove();

    },2500);

}
function initFAQ() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");

    question.onclick = function () {
      faqItems.forEach(faq => {
        if (faq !== item) {
          faq.classList.remove("active");
        }
      });

      item.classList.toggle("active");
      console.log("FAQ clicked:", question.innerText);
    };
  });
}

/* =========================================
   Scroll To Top
========================================= */

function initScrollTop(){

    const btn=document.getElementById("scrollTopBtn");

    if(!btn) return;

    window.addEventListener("scroll",()=>{

        if(window.scrollY>350){

            btn.classList.add("show");

        }else{

            btn.classList.remove("show");

        }

    });

    btn.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

        if(typeof trackClick==="function"){

            trackClick("scroll_to_top","Top Button");

        }

    });

}

/* =========================================
   Future Functions
========================================= */

// Gallery Slider
// Testimonials Slider
// Theme Switch
// Coupon Popup
// AI Assistant
// Google Maps
// Order Form
// PWA
// Push Notifications
// Language Switch
// Dark Mode
