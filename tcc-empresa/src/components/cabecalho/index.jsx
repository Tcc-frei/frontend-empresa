import "./index.scss"
import "./responsividade.scss"

import titulologo from "../../assets/img-logo.png";


import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


export default function Cabecalho(){
    return(
        <div className="container-empresa">
        <header className="faixa-cima"
                               data-aos="fade-center"
                               data-aos-offset="0"
                               data-aos-delay="50"
                               data-aos-duration="500"
                               data-aos-easing="ease-in-out"
                               data-aos-mirror="true"
                               data-aos-once="false"
                               data-aos-anchor-placement="bottom">
        <div className="img-tituolo">
          <img className="logo" src={titulologo} alt="" />
        </div>
        <div className="titulo">
            <h1>Info Solutions</h1>
        </div>
      </header>
        </div>

    )
}