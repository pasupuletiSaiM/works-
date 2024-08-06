window.onload = function() {
    var tl = gsap.timeline();
    tl.to("#yellow1", {
        top: "-100%",
        delay: 0.5,
        duration: 0.5,
        ease: "expo.out"
    });
    tl.from("#yellow2", {
        top: "100%",
        delay: 0.5,
        duration: 0.5,
        ease: "expo.out"
    }, "anim");
    tl.to("#loader h1", {
        duration: 0.6,
        delay: 0.7,
        color: "black"
    }, "anim");
    tl.to("#loader", {
        opacity: 0
    });
    tl.to("#loader", {
        display: "none"
    });

    // const scroll = new LocomotiveScroll({
    //     el: document.querySelector('#main'),
    //     smooth: true
    // });
};

var elems = document.querySelectorAll(".elem");
var page2 = document.querySelector("#page2")
elems.forEach(function(ele) {
    ele.addEventListener("mouseenter", function() {
        var bgimg = ele.getAttribute("data-img");
        page2.style.backgroundImage= `url(${bgimg})`
        
    });
});

function page2animation() {
    var rightElems = document.querySelectorAll(".right-elem");

    rightElems.forEach(function(elem) {
        elem.addEventListener("mouseenter", function() {
            gsap.to(elem.childNodes[3], {
                opacity: 1,
                scale: 1,
                duration: 0.1 // Set a very small duration for immediate effect
            });
        });
        elem.addEventListener("mouseleave", function() {
            gsap.to(elem.childNodes[3], {
                opacity: 0,
                scale: 0,
                duration: 0.1 // Set a very small duration for immediate effect
            });
        });
        elem.addEventListener("mousemove", function(dets) {
            gsap.to(elem.childNodes[3], {
                x: dets.x - elem.getBoundingClientRect().x - 90,
                y: dets.y - elem.getBoundingClientRect().y - 215,
                duration: 0 // Set duration to 0 for immediate movement
            });
        });
    });
}


page2animation()
