class App {

        constructor(){

            this.initialize()
        }

        initialize() {
            this._setInitialStates(); // Para determinar las posiciones iniciales de los elemts en el DOM
            this._intro()
            this._redCircleSection();
        }

        // 1. Damos los valores iniciales a cada elemento que queremos animar
        _setInitialStates() {
            gsap.set(".hero_title span", {
                opacity: 0,
                y: 100
            })
            gsap.set(".hero hr", {
                opacity: 0,
                scale: 0,
            })
            gsap.set(".my_circle_red", {
                scale: 0
            })
        }

        // 2. Podemos empezar a animar: creamos una timeline y la asignamos al header class="hero"
        _intro() {
            const timeline = gsap.timeline();

            timeline.to(".hero", {
                opacity: 1
            })
            .to(".hero_title span", {
                opacity: 1,
                y: 0,
                duration: 2,
                stagger: 0.08,
                ease: "expo.out"
            })
            .to(".hero hr", {
                opacity: 1,
                scale: 1,
                duration: 1.5
            }, 0.5)
        }
        

        _redCircleSection() {
            const tl = gsap.timeline();

            tl.to(".my_circle_red", {
                scale: 120,
                scrollTrigger: {
                    trigger: ".section__01",
                    start: "bottom bottom",
                    scrub: 1.5,
                    markers: true,
                    yoyo: true,
                }
            })
        }


}

// Llamamos a la clase que hemos creado para que se apliquen las animaciones
new App()

// Smooth scroller from Lenis Freight Studio
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)