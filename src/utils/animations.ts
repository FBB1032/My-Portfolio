import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initScrollProgress = (progressBar: HTMLElement) => {
    gsap.to(progressBar, {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.3,
        },
    });
};

export const animateOnScroll = (element: string | HTMLElement, vars: gsap.TweenVars) => {
    return gsap.from(element, {
        ...vars,
        scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
        },
    });
};
