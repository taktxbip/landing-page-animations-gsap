'strict';

import gsap, { Back } from 'gsap';
import Splitter from 'split-html-to-chars';

// import ScrollMagic from 'scrollmagic';
// import { ScrollMagicPluginIndicator, ScrollMagicPluginGsap } from "scrollmagic-plugins";

// ScrollMagicPluginGsap(ScrollMagic, gsap);
// ScrollMagicPluginIndicator(ScrollMagic);

import './scss/main.scss';
import './js/assets';

(function () {
    window.addEventListener('DOMContentLoaded', (e) => {
        let els = document.querySelectorAll('h1');
        [].forEach.call(els, function (el) {
            el.outerHTML = Splitter(el.outerHTML, '<span class="letter">$</span>');
        });

        const tl = new gsap.timeline();

        performance.mark('start');

        tl
            .fromTo('.loader-inside', 2, { scale: 0, opacity: 0 }, {
                scale: 1,
                opacity: 1,
                onComplete: () => {
                    document.querySelector('.loader').remove();
                    performance.mark('loader');
                }
            }, 0.03)
            .fromTo('.site-title', 0.5, { y: -100, opacity: 0 }, { y: 0, opacity: 1 }, '-=1')
            .staggerFromTo('.nav > li ', 0.5, { y: -20, opacity: 0 }, { y: 0, opacity: 1 }, 0.1)
            .staggerFromTo('h1 .letter', 0.5, { y: -40, opacity: 0 }, { y: 0, opacity: 1, ease: Back.easeOut.config(4) }, 0.03)
            .fromTo('.hero-text p', 0.5, { y: 40, opacity: 0 }, { y: 0, opacity: 1 }, '-=0.7')
            .fromTo('.hero-text .btn', 0.5, { scale: 0.1, opacity: 0 }, {
                scale: 1,
                opacity: 1,
                onComplete: () => {
                    performance.mark('end');
                    performance.measure('measure', 'start', 'end');
                }
            }, '-=0.7');
    });
})();
