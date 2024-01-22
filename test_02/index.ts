import "./styles.css";
import gsap from "gsap";

// gsap.registerPlugin(ScrollTrigger);
// import gsap, { Elastic } from "gsap";


function randomInt(min: number, max: number) {
    return Math.floor(
        Math.random() * (max - min + 1) + min
    );
}

const boxDOMEl = document.querySelector("box")

gsap.to(boxDOMEl, {
    rotate: 90,
    duration: 3,

});





