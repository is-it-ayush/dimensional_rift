export function initLocalization() {
    $('.en').click(function () {
        set_language('en')
        gsap.fromTo('body', { opacity: 0 }, { opacity: '1', duration: 3, ease: 'power2' })
    });

    $('.hi').click(function () {
        set_language('hi')
        gsap.fromTo('body', { opacity: 0 }, { opacity: '1', duration: 3, ease: 'power2' })
    });

    console.log("[App] Languages have been Intialized!")
}


function set_language(lang) {

    var language = {
        en: {
            about: "about.",
            blog: "blog.",
            projects: "projects.",
            contact: "contact.",
            resume: "resume.",
            slide2_about: "What do you fear the most? I fear being forgotten.",
            slide3_letter_header: "Dear Reader,",
            slide3_letter_body: "I grew up in a town in a state where every blink of eye reveal's people. I do not know what would describe me since I am still on my way to discover my purpose. Here's a little story of how I fell in love with computer's. It was summer of 2006 and I was still in my early years trying to understand this world. As every kid I was intrigued by the flashing lights vibrant colours of toys. I was lucky enough to be able to get a computer in our house back then in 2006 since our dad always made sure we got the best of everything. As far I could recall, I saw my sister as she moved a very strange object and suddenly a white square moved on the screen moved. I was fascinated and intrigued by this very moment in time and at that age I could only wonder what other worldly magic was done to make it move. Fast forward a couple of years to now, I am building tools for the web which will enable more decentralization and would a step towards equality among every individual on this planet.",
            slide3_letter_footer: "Regards,\nAyush",

            project_slide1_heading: "[ A Weather Project ]",
            project_slide1_body_para1: "'So You Wanna Know The Weather' is a project I began building on Christmas of 2020. It was finished it by New Year of 2021. This project was built on the stack of Python & Django. I deployed it to Heroku at first but later migrated to Vercel after an year. It gave me a new understanding of idea's & concept's behind API (Application Programming Interface) and taught me how to fetch data from varioius API's simultaneously as well as presenting them in a beautiful way. The Project was built in a timespan of a week.",
            project_slide1_body_para2: "When a user opens any website. He sents a 'Request' to the Webserver. The Webserver passes the request to the Backend-Framework. For us its the Django-Framewrok. Django then transfers the Request to our 'Views' and this is where all the magic of our backend happens. The Views in Django are programmed to determine the Internet Protocol or I.P. Address of client from the 'X-Forwarded-For' Header in the 'GET' Request which includes the originiating IP Address. The IP is then passed to IpInfo API which fetches and retuns a approximate location of the user. The Location is then transferred to Tommrow's Weather API which fetches the weather for that location and returns and displays it to the user.",
            project_slide_tech: "Technologies",
        },
        hi: {
            about: "मै",
            blog: "ब्लॉग",
            projects: "परियोजनाओं की सूची",
            contact: "संपर्क",
            resume: "मेरा संक्षेप विवरण",
            slide2_about: "सबसे ज्यादा किससे डरते हो? मुझे भुला दिए जाने का डर है।",
            slide3_letter_header: "प्रिय पाठक,",
            slide3_letter_body: "मैं एक ऐसे राज्य के शहर में पला-बढ़ा हूं, जहां पलक झपकाते ही हर जगह बस लोग दिखते हैं। मुझे नहीं पता कि मेरा क्या वर्णन होगा क्योंकि मैं अभी भी अपने उद्देश्य की खोज के रास्ते पर हूं। यहाँ एक छोटी सी कहानी है कि कैसे मुझे कंप्यूटर से प्यार हो गया। यह 2006 की गर्मी थी और मैं अभी भी अपने शुरुआती वर्षों में इस दुनिया को समझने की कोशिश कर रहा था। हर बच्चे की तरह मैं भी चमकती रोशनी और खिलौनों के जीवंत रंगों से आकर्षित था। मैं भाग्यशाली था कि 2006 में हमारे घर में एक कंप्यूटर प्राप्त करने में सक्षम था। हमारे पिताजी ने हमेशा यह सुनिश्चित किया कि हमें सब कुछ सबसे अच्छा मिले। जहाँ तक मुझे याद आया, मैंने देखा कि मेरी बहन ने माउस को नियंत्रित किया और अचानक स्क्रीन पर एक सफेद वस्तु हिल गई। मैं इसी क्षण से मोहित और उत्सुक था और उस उम्र में मैं केवल यह सोच सकता था कि इसे स्थानांतरित करने के लिए अन्य सांसारिक जादू क्या किया गया था। कुछ वर्षों से अब तक, मैं वेब के लिए उपकरण बना रहा हूं जो अधिक विकेंद्रीकरण को सक्षम करेगा और इस ग्रह पर प्रत्येक व्यक्ति के बीच समानता की दिशा में एक कदम होगा।",
            slide3_letter_footer: "सादर,\nआयुष",

            project_slide1_heading: "[ एक मौसम परियोजना ]",
            project_slide1_body_para1: "'सो यू वांट नो द वेदर' एक प्रोजेक्ट है जिसे मैंने 2020 के क्रिसमस पर बनाना शुरू किया था। इसे 2021 के नए साल तक पूरा कर लिया गया था। यह प्रोजेक्ट पायथन और डीजेंगो के स्टैक पर बनाया गया था और इसे पहले हेरोकू में डेप्लॉय किया गया था, लेकिन एक साल के बाद वर्सेल में माइग्रेट किया गया था। इसने मुझे एपीआई (एप्लिकेशन प्रोग्रामिंग इंटरफेस) के पीछे के विचार और अवधारणा की एक नई समझ दी और मुझे सिखाया कि विभिन्न एपीआई से एक साथ डेटा कैसे लाया जाए और साथ ही उन्हें एक सुंदर तरीके से प्रस्तुत किया जाए। यह परियोजना एक सप्ताह के समय में बनाई गई थी।",
            project_slide1_body_para2: "जब कोई यूजर कोई वेबसाइट खोलता है। वह वेबसर्वर को एक 'रिक्वेस्ट' भेजता है। वेबसर्वर बैकएंड-फ्रेमवर्क को रिक्वेस्ट भेजता है। हमारे लिए यह डीजेंगो-फ्रेमवर्क है। डीजेंगो फिर अनुरोध को हमारे 'व्यू' में स्थानांतरित करता है और यहीं पर हमारे बैकएंड का सारा जादू होता है। डीजेंगो में व्यू इंटरनेट प्रोटोकॉल या आईपी निर्धारित करने के लिए प्रोग्राम किए गए हैं। 'GET' अनुरोध में 'एक्स-फॉरवर्डेड-फॉर' हेडर से क्लाइंट का पता जिसमें मूल आईपी पता शामिल है। फिर आईपी को आईपीइन्फो एपीआई को पास कर दिया जाता है जो उपयोगकर्ता के अनुमानित स्थान को प्राप्त करता है और फिर से चालू करता है। इसके बाद स्थान को टॉम्रो के वेदर एपीआई में स्थानांतरित कर दिया जाता है जो उस स्थान के लिए मौसम प्राप्त करता है और उपयोगकर्ता को लौटाता है और प्रदर्शित करता है।",
            project_slide_tech: "टेक्नोलॉजी",
        },
    };

    //List of elements that will have their languages updated.
    let nav = $(".nav").children('ul').children("li").children('a');
    
    let slide2_about = $('.about_slide2');
    let slide3_letter_header = $('#letter-header')
    let slide3_letter_body = $('#letter-body')
    let slide3_letter_footer = $('#letter-footer')

    let project_slide1_heading = $('.project-content-heading');
    let project_slide1_body_para1 = $('.project-content-body')
    let project_slide1_body_para2 = $('.parachange')
    let project_slide_tech = $('.project-content-tech-heading')

    if (lang == "en") {
        //Menu Text
        nav[0].textContent = language.en.about;
        nav[1].textContent = language.en.blog;
        nav[2].textContent = language.en.projects;
        nav[3].textContent = language.en.contact;
        nav[4].textContent = language.en.resume;


        if (slide2_about[0] != null) {
            //About Slides
            slide2_about[0].textContent = language.en.slide2_about;
            slide3_letter_header[0].textContent = language.en.slide3_letter_header;
            slide3_letter_body[0].textContent = language.en.slide3_letter_body;
            slide3_letter_footer[0].textContent = language.en.slide3_letter_footer;
        }

        if( project_slide1_heading[0] != null) {
            //Project Slides 
            project_slide1_heading[0].textContent = language.en.project_slide1_heading;
            project_slide1_body_para1[0].textContent = language.en.project_slide1_body_para1;
            project_slide1_body_para2[0].textContent = language.en.project_slide1_body_para2;
            project_slide_tech[0].textContent  = language.en.project_slide_tech;

            // Fixes the resetting of css properties on content change.
            $('.container').children('ul').children('li').css('margin-top', "20px");
        }



    }
    else if (lang == "hi") {

        //Menu Text
        nav[0].textContent = language.hi.about;
        nav[1].textContent = language.hi.blog;
        nav[2].textContent = language.hi.projects;
        nav[3].textContent = language.hi.contact;
        nav[4].textContent = language.hi.resume;



        if (slide2_about[0] != null) {
            //About Slides
            slide2_about[0].textContent = language.hi.slide2_about;
            slide3_letter_header[0].textContent = language.hi.slide3_letter_header;
            slide3_letter_body[0].textContent = language.hi.slide3_letter_body;
            slide3_letter_footer[0].textContent = language.hi.slide3_letter_footer;
        }

        if( project_slide1_heading[0] != null) {
            //Project Slides 
            project_slide1_heading[0].textContent = language.hi.project_slide1_heading;
            project_slide1_body_para1[0].textContent = language.hi.project_slide1_body_para1;
            project_slide1_body_para2[0].textContent = language.hi.project_slide1_body_para2;
            project_slide_tech[0].textContent  = language.hi.project_slide_tech;
            
            // Fixes the resetting of css properties on content change.
            $('.container').children('ul').children('li').css('margin-top', "20px");
        }
        
    }
    else {
        console.log("[Localization] Language Error. Please reload the page.")
    }
}


export default initLocalization;

