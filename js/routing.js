import { loadSwiper, swiper, destroySwiper } from "./slider.js";
import { loadCursor } from "./cursor.js";
import { addRedirectToLink, addRedirectFrom404 } from "./helper_script.js";
import initLocalization from "./localization.js";

export function setupRouting() {

    var about = document.getElementById('about')
    var project = document.getElementById('project')
    var contact = document.getElementById('contact')

    about.addEventListener('click', e => {
        loadhtml("main", "about.html")
    })

    project.addEventListener('click', e => {
        loadhtml("main", "project.html")
    })


    contact.addEventListener('click', e => {
        loadhtml("main", "contact.html")
    })

    console.log("[Routing] Listeners Intialized!")

    addRedirectFrom404();

    function loadhtml(id, filename) {

        //Code to fetch
        let xhttp;
        let element = document.getElementById(id);
        let file = filename;

        if (file) {
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        // Destroy the Swiper Instance.
                        destroySwiper();
                        // Set the fetched Content.
                        element.innerHTML = this.responseText;
                        // Re-Initialize the Swiper Instance with new Content.
                        loadSwiper();
                        // Re-Intiliaze the Cursor Script.
                        loadCursor();
                        // Re-Intialize Localization
                        initLocalization();
                        // Addons.
                        if(filename=="project.html")
                        {
                            addRedirectToLink();
                        }
                    }
                    else if (this.status == 404) {
                        console.log("[Routing] Requested Page Not Found. Redirecting to 404.");
                        window.location.replace('https://isitayush.me/404.html');
                    }
                    else {
                        console.log(`Request Returned the following code: ${this.status}. Please E-Mail mail@isitayush.me if you feel this is an error.`)
                    }
                }
            }
            xhttp.open("GET", `../${filename}`, true)
            xhttp.send();
            return;
        }
    }
}

export default setupRouting;