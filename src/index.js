'strict';

import gsap from 'gsap';
// import ScrollMagic from 'scrollmagic';
// import { ScrollMagicPluginIndicator, ScrollMagicPluginGsap } from "scrollmagic-plugins";

// ScrollMagicPluginGsap(ScrollMagic, gsap);
// ScrollMagicPluginIndicator(ScrollMagic);

import './scss/main.scss';
import './js/assets';

(function () {
    window.addEventListener('DOMContentLoaded', (e) => {
        const tl = new gsap.timeline();

        tl.fromTo('.site-title', 1, { y: -100, opacity: 0 }, { y: 0, opacity: 1 }, 1);
        tl.staggerFromTo('.nav > li ', 0.5, { y: -20, opacity: 0 }, { y: 0, opacity: 1 }, 0.1);
    });
})();
