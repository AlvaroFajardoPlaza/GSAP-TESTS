gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {

    const sections = gsap.utils.toArray('section');

    // 1º En esta variable scrollTween configuramos un scroll sobre todo el wrapper!
    let scrollTween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
            trigger: '.wrapper',
            pin: true, 
            scrub: 0.5,
            snap: 1 / (sections.length - 1),
            start: 'top top',
            end: 3000,
        }
    })

    // Animación de sroll sobre el logo
    gsap.to('.logo', {
        fontSize: '2.4rem',
        lineHeight: '2.2rem',
        top: '4rem',
        scrollTrigger: {
            trigger: '.logo',
            start: 'top top',
            end: 1000,
            scrub: 0.5,
        }
    })

    // Creamos animación sobre las líneas de la primera sección
    gsap.to('.line', {
        height: '66rem',
        scrollTrigger: {
            trigger: '.line',
            scrub: 0.5,
            start: 'center center',
            end: 2000
        }
    })

    // 2º Creamos animación para los personajes mediante un querySelectorAll
    document.querySelectorAll('.character').forEach( (elem) => {
        
        // Animación de la caption
        gsap.to(elem.querySelector('.caption'), {
            x: 0,
            y: 0, 
            scrollTrigger: {
                containerAnimation: scrollTween,
                trigger: elem.querySelector('.caption'),
                start: 'top bottom',
                end: '+=1000',
                scrub: 0.5
            }
        });

        // Animación de la quote
        gsap.to(elem.querySelector('.quote'), {
            y: 0, 
            ease: 'none',
            scrollTrigger: {
                containerAnimation: scrollTween,
                trigger: elem.querySelector('.quote'),
                start: 'top bottom',
                end: '+=30%',
                scrub: 0.5,
            }
        })

        // Idem para el slogan
        gsap.to(elem.querySelector('.slogan'), {
            y: 0, 
            ease: 'none',
            scrollTrigger: {
                containerAnimation: scrollTween,
                trigger: elem.querySelector('.slogan'),
                start: 'top bottom',
                end: '+=60%',
                scrub: 0.5,
            }
        })

        // Idem para el block y la imagen!
        gsap.to(elem.querySelector('.block'), {
            x: 0, 
            ease: 'none',
            scrollTrigger: {
                containerAnimation: scrollTween,
                trigger: elem.querySelector('.block'),
                start: 'top bottom',
                end: '+=' + window.innerWidth,
                scrub: 0.5,
            }
        })

        gsap.to(elem.querySelector('img'), {
            height: '80dvh',
            y: 0, 
            ease: 'none',
            scrollTrigger: {
                containerAnimation: scrollTween,
                trigger: elem.querySelector('img'),
                start: 'top bottom',
                end: '+=60%',
                scrub: 0.5,
            }
        })


        // Finalmente, vamos a modificar el huge-text!
        gsap.to(elem.querySelector('.huge_text'), {
            y: 0,
            fontSize: '14rem',
            ease: 'none',
            scrollTrigger: {
                containerAnimation: scrollTween,
                trigger: elem.querySelector('.huge_text'),
                start: 'top bottom',
                end: '+=90%',
                scrub: 0.5,
            }
        })


    })
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