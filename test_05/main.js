// GSAP & SCROLL TRIGGER CONFIG
document.addEventListener("DOMContentLoaded", function() {

    'use strict';

    Splitting();

    gsap.registerPlugin(ScrollTrigger);

    // 1. Creamos la primera timeline
    const timeline1 = gsap.timeline();
    timeline1.from(".title", { opacity: 0, yPercent: 32, stagger: 0.06, ease: "back.out"}); // Definimos los valores desde donde arranca
    timeline1.to(".white_box", { opacity: 1, clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", scale: 1, ease: "expo.out", duration: 1.5});
    timeline1.from(".scroll_container", { opacity: 0, yPercent: 100, ease: "expo.out"}, "+=0.5");


    // Sacred Geometry del header
    const sacredGeo = document.querySelector(".header_sacred_back_img")
    const rotateSacred = gsap.from(sacredGeo, {rotation: 450});
    ScrollTrigger.create({
        trigger: sacredGeo,
        animation: rotateSacred,
        start: "top bottom",
        scrub: 1.8
    });

    // Animación para los cuadrados tras el titular de cada sección al hacer scrub!
    const gsapSquare = gsap.utils.toArray(".section_title_square");
    gsapSquare.forEach((square, i) => {
        const rotation = gsap.from(square, {rotation: 250});
        ScrollTrigger.create({
            trigger: square,
            animation: rotation,
            start: "top bottom",
            scrub: 0.5,
        })   
    });


    // Animaciones para el header
    function header() {
        gsap.to(".title", {
            ScrollTrigger: {
                trigger: ".header",
                start: "top top",
                scrub: 1.5,
            },
            yPercent: 0
        })
        // Animación sobre el "GSAP TEST" hacia la derecha
        gsap.to(".header .stroke", {
            scrollTrigger: {
                trigger: ".header",
                start: "top top",
                scrub: 1.8,
            },
            xPercent: 50
        })
        // Animación para desplazar el scroller a la izquierda en el eje X
        gsap.to(".header .scroll_container", {
            scrollTrigger: {
                trigger: ".header",
                start: "top top",
                scrub: 1.8,
            },
            xPercent: -20
        })
        gsap.to(".header_img", {
            scrollTrigger: {
                trigger: ".header",
                start: "top top",
                scrub: 1.8,
            },
            xPercent: -80
        })
        // Animación de la mano al hacer scrub en la sección del header
        gsap.to(".header_img img", {
            scrollTrigger: {
                trigger: ".header",
                start: "top top",
                scrub: 1.8,
            },
            scale: 1.4, rotate: "-65deg",
        })
        gsap.to(".scroll_content_img img", {
            scrollTrigger: {
                trigger: ".header",
                scrub: 1.8,
                start: "top top",
            },
            rotate: "-720deg"
        })
    };

    header();

    function about(){
        gsap.from(".about_img_container", { // En este primer .from() le decimos desde donde va a partir
            scrollTrigger: {
                trigger: ".about",
                start: "top bottom",
                scrub: 1.4,
            },
            yPercent: 20, 
        })
        gsap.from(".about_img_container img", {
            scrollTrigger: {
                trigger: ".about",
                start: "top bottom",
                scrub: 1.4,
            },
            scale: 1.4
        })
        gsap.to(".about_text", {
            scrollTrigger: {
                trigger: ".about",
                start: "top bottom", 
                scrub: 1.8
            }, yPercent: 0
        })
        // gsap.to(".about_text .about_me_p", {
        //     scrollTrigger: {
        //         trigger: ".about",
        //         start: "bottom bottom",
        //         scrub: 1.8,
        //     }, xPercent: 100
        // })
    }
    about();


    // Revisar --------- ANIMACIÓN EN BENEFITS SECTION*
    // Crear una animación de entrada para los números
    function initial_benefits_state(){
        gsap.set(".benefits_item_num span", {
            x: -100,
            opacity: 0
        })

        gsap.set(".benefits_item_p", {
            opacity: 0,
            y: 120
        })
    };

    function benefits() {
        // Revisar la animación sobre los números
        gsap.from(".benefits_item span", {
            x: (i, el) => (1 - parseFloat(el.getAttribute("data-speed"))),
            opacity: 1,
            scrollTrigger: {
                trigger: ".benefits_list",
                start: "top top",
                scrub: 1.8
            },
        })
        gsap.to(".benefits_item_p", {
            scrollTrigger: {
                trigger: ".benefits_list",
                start: "25% 125%",
                scrub: 1.8,
            }, y: 0, opacity: 1
        })
    };
    initial_benefits_state()
    benefits()


    // ANIMACIÓN PARA LA PARTE DE PROJECTS
    function projects() {
        gsap.from(".work_item", {
            scrollTrigger: {
                trigger: ".work_wrap_container",
                scrub: 1.2,
                start: "top bottom",
                end: "bottom bottom"
            }, x: 1000
        })
        gsap.from(".work_item, .work_item_num", {
            y: (i, el) => (1 - parseFloat(el.getAttribute('data-speed'))),
            scrollTrigger: {
                trigger: '.work',
                start: "top center",
                scrub: 1.8,
            }, opacity: 1
        })
        gsap.from(".work_item_img img", {
            scale: 1.8,
            scrollTrigger: {
                trigger: ".work_wrap",
                start: "20% 80%",
                scrub: 1.8
            }
        })
    }
    projects()


    // Animación para el footer
    // function set_footer() {
    //     gsap.set('.span_container', {
    //         y: 32,
    //         opacity: 0,
    //     });
    // }

    function footer() {
    gsap.from(".footer_cont hr", {
        xPercent: -1000,
        scrollTrigger: {
            trigger: ".footer",
            scrub: 1.8,
            start: "top bottom",
            end: "bottom bottom"
        }
    })
    gsap.from(".span_container span", {
        y: (i, el) => (1 - parseFloat(el.getAttribute("data-speed"))),
        opacity: 0,
        scrollTrigger: {
            trigger: ".footer",
            scrub: 1.8,
            start: "top bottom",
            end: "bottom bottom"
        }
      })
    gsap.from(".logo_container img", {
        opacity: 0,
        yPercent: 500,
        scrollTrigger: {
            trigger: ".footer",
            start: "top bottom",
            end: "bottom bottom",
            scrub: 1.8,
        }
      })
    }
    // set_footer()
    footer()



})



// Lenis smooth scroller
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)