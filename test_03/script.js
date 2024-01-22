
// 1º  Crear nuestra timeline con gsap
let timeline01 = gsap.timeline({
    scrollTrigger: {
        // 2º Generamos el trigger, y lo linkeamos a la clase del div que contiene todo
        // También le decimos cuando va a empezar
        trigger: ".animated_element",
        start: "-50% center", // Jugamos con los porcentajes de donde empieza y donde acaba nuestra animación
        end: "120% center",

        // El scrub nos sirve para darle delay y flow a la animación. Los markers nos permiten visualizar como estamos setteando la animación
        scrub: true,
        markers: true,
        //toggleActions: 'onEnter reverse reverse complete',
    }
})

let timeline02 = gsap.timeline({
    scrollTrigger: {
        trigger: ".second_card",
        start: "-50% center",
        end: "140% center",
        scrub: true,
        markers: true,
        toggleActions: "play reverse reverse complete",
    }
})

// Aplicamos los valores del primer timeline a la primera card
timeline01.to('.animated_element', {
    x: 900,
    rotate: "0deg",
})


// Aplicamos sobre la segunda card
timeline02.to(".second_card", {
    x: 800,
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