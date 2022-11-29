//This is the animations which run onLoad of window.


export function loadVisitAnimations() {
    const timeline = gsap.timeline({ defaults: { duration: 1, ease: "sine.inOut" } })
    gsap.fromTo('#footer', { y: '100%' }, { y: '0%', duration: 1, delay: 1, clearProps: 'all' })
    gsap.fromTo('#topbar', { y: '-100%' }, { y: '0%', duration: 1, delay: 1, clearProps: 'all' })
    gsap.fromTo('#bg', { opacity: 0 }, { opacity: 1, duration: 1, delay: 1 })
}

export default loadVisitAnimations;
