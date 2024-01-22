// Generamos nuestra class APP para introducir los métodos en orden
class App {

    constructor() {
        this.heroImages = [...document.querySelectorAll(".hero_images img")]

        this.text = [...document.querySelectorAll(".text_effect")]

        this._initialize();
    }


    // Dentro de esta función vamos a ir llamando a las animaciones que generemos
    _initialize() {
        this._setInitialStates(); // Para determinar las posiciones iniciales de los elemts en el DOM
        this._createIntro();
        this._createHero();
        this._textAnimation();
        this._createFullImageAnimation();
        this._createJoinUsAnimation();
    }


    // Le decimos a GSAP todo lo que necesita saber antes de comenzar con la animación
    _setInitialStates() {

        // Estados iniciales de los textos - si quitamos el bloque de texto, recibe el overlay.
        gsap.set('.hero_title span, .text_effect p, .full_image_text', {
            y: 32,
            opacity: 0,
        });

        // Estados iniciales de las imagenes del hero
        gsap.set('.hero_images img', {
            y: gsap.utils.random(100, 50), // Modificará cada imagen y le dará un valor random entre 100 y 50 en el eje Y
            opacity: 0,
        });

        // Estado inicial de la imagen full_width
        gsap.set('.full_image_cover img', {
            scale: 1.4,
        })

        gsap.set('.join_us_text', {
            opacity: 0,
            scale: 0.5,
        })
    };

    // 1º Animación
    _createIntro() {
        const timeline01 = gsap.timeline();

        timeline01.to('.hero_title div', {
            opacity: 1,
        }).to('.hero_title span', {
            y: 0,
            opacity: 1,
            ease: 'expo.out',
            duration: 2,
            stagger: 0.06, 
        }).to('.hero_images img', {
            y: 0,
            opacity: 1,
            ease: 'power3.out',
            duration: 2,
            stagger: 0.08,
        }, 0.5)
    }

    // 2º Animación con ScrollTrigger para hacer un efecto parallax en el HERO
    _createHero() {
        const timeline2 = gsap.timeline({
            scrollTrigger: {
                trigger: '.hero',
                start: "top top",
                end: "bottom top",
                scrub: true,
                markers: true,
            }
        })

        // Hemos guardado las imágenes del Hero en una variable dentro del constructor de la clase. Sobre cada una aplicamos el efecto parallax
        this.heroImages.forEach( (image) => {
           timeline2.to(image, {
            ease: 'none',
            yPercent: gsap.utils.random(-25, -10)
           }, 0) 
        })
    };


    // 3º Animación del texto
    _textAnimation(){
        const timeline03 = gsap.timeline({
            scrollTrigger: {
                trigger: '.text-block',
                start: "25% center",
                end: "bottom top",

                scrub: true,
                markers: true
            }
        })

        this.text.forEach( (text, index) => {
            const overlay = text.querySelector('.text_overlay');
            const content = text.querySelector('p')

            timeline03.to(overlay, {
                scaleX: 0,
            })
            // DEJANDO ESTA ANIMACIÓN OFF y sacándola del 
            .to(content, {
                y: 0,
                opacity: 1,
                ease: 'expo.out',
                duration: 2,
                delay: () => index * 0.1
            }, 0) // El valor a 0 para que ocurran ambas animaciones a la vez
        })
    };

    // Animación para la imagen de fondo full-width
    _createFullImageAnimation() {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '.full_image_cover img',
                start: "top top",
                end: "50% center",

                scrub: 0.5,
                markers: true,
                stagger: 0.06,
            }
        })

        timeline.to('.full_image_cover img', {
            scale: 0.8,
            ease: 'power3.inOut',
        }).to('.full_image_text', {
            y: 0,
            opacity: 1,
            ease: 'power2.inOut',
            stagger: 0.06
        }, 0)
    };

    // Animación para el texto de entrada join_us
    _createJoinUsAnimation() {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".join_us_text",
                scrub: true,

                start: "5% center",
                end: "50% center",
            }
        })

        timeline.to('.join_us_text', {
            scale: 1,
            opacity: 1,
            x: "0",
            ease: "expo.out",
            stagger: 0.5,
        })
    };


};


new App()


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
