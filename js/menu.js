export function initalizeMenu() {
    let isOpened = false;

    var nav = $(".nav")
    var bg = $("#nav-bg")
    var toggle = $("#menu")
    var menu_icon = toggle.children('img')[0]

    toggle.click(e => {
        nav.toggleClass("active")
        isOpened = !isOpened
        if (isOpened) {
            bg.css("visibility", "visible")
            gsap.fromTo('#nav-bg', { opacity: 0 }, { opacity: 1, duration: 0.5, ease: "power2" })
            nav.css("visibility", "visible")
            gsap.fromTo('.nav', { opacity: 0 }, { opacity: 1, duration: 0.5, ease: "power2" })
            $(menu_icon).attr('src', './images/cross.svg')
        }
        else {
            gsap.fromTo('#nav-bg', { opacity: 1 }, {
                opacity: 0, duration: 0.5, ease: "power2", onComplete: () => {
                    bg.css("visibility", "hidden")
                }
            })
            gsap.fromTo('.nav', { opacity: 1 }, {
                opacity: 0, duration: 0.5, ease: "power2", onComplete: () => {
                    nav.css("visibility", "hidden")
                }
            })
            $(menu_icon).attr('src', './images/menu.svg')
        }

    })
}

export default initalizeMenu;