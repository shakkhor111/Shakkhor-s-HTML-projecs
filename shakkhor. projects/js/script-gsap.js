(function ($) {
    'use strict';

    setTimeout(function() {
        gsap.registerPlugin(ScrollTrigger);


        // animation1
        var tm_gsap_animation1 = gsap.timeline({

            scrollTrigger: {
            animation: tm_gsap_animation1,
            trigger: '.tm-gsap-move-animation1',
            start: "top 95%",
            end: "top -50%",
            scrub: 4,
            toggleActions: "play reverse play reverse",
            markers: false
            }
        });
        tm_gsap_animation1.from(".tm-gsap-move-animation1", { xPercent: 50, });


        // animation2
        var tm_gsap_animation2 = gsap.timeline({

            scrollTrigger: {
                animation: tm_gsap_animation2,
                trigger: '.tm-gsap-move-animation2',
                start: "top 150%",
                end: "top -50%",
                scrub: 3,
                toggleActions: "play reverse play reverse",
                markers: false
            }
        });
        tm_gsap_animation2.from(".tm-gsap-move-animation2", { xPercent: 50, yPercent: -10, scale: .3 }, "<=.5");



        // animation3
        var tm_gsap_animation3 = gsap.timeline({
            scrollTrigger: {
            animation: tm_gsap_animation3,
            trigger: '.tm-gsap-move-animation3',
            start: "top 150%",
            end: "top -50%",
            scrub: 3,
            toggleActions: "play reverse play reverse",
            markers: false
            }
        });
        tm_gsap_animation3.from(".tm-gsap-move-animation3", { xPercent: 70, yPercent: -50, scale: .3, rotate: -20, opacity: 0.3 }, "<=.5");

    }, 2300);




    gsap.utils.toArray('.tm-gsap-animate-left').forEach((el, index) => {
        let tlcta = gsap.timeline({
            scrollTrigger: {
                trigger: el,
                scrub: 2,
                start: "top 90%",
                end: "top 70%",
                toggleActions: "play none none reverse",
                markers: false
            }
        })

        tlcta
        .set(el, {transformOrigin: 'center center'})
        .from(el, { opacity: 1,  x: "-=150"}, {opacity: 1, x: 0, duration: 1, immediateRender: false})
    });
    gsap.utils.toArray('.tm-gsap-animate-right').forEach((el, index) => {
        let tlcta = gsap.timeline({
            scrollTrigger: {
                trigger: el,
                scrub: 2,
                start: "top 90%",
                end: "top 70%",
                toggleActions: "play none none reverse",
                markers: false
            }
        })

        tlcta
        .set(el, {transformOrigin: 'center center'})
        .from(el, { opacity: 1,  x: "+=150"}, {opacity: 1, x: 0, duration: 1, immediateRender: false})
    });
    gsap.utils.toArray('.tm-gsap-animate-top').forEach((el, index) => {
        let tlcta = gsap.timeline({
            scrollTrigger: {
                trigger: el,
                scrub: 2,
                start: "top 90%",
                end: "top 70%",
                toggleActions: "play none none reverse",
                markers: false
            }
        })

        tlcta
        .set(el, {transformOrigin: 'center center'})
        .from(el, { opacity: 1,  y: "+=150"}, {opacity: 1, y: 0, duration: 1, immediateRender: false})
    });
    gsap.utils.toArray('.tm-gsap-animate-bottom').forEach((el, index) => {
        let tlcta = gsap.timeline({
            scrollTrigger: {
                trigger: el,
                scrub: 2,
                start: "top 90%",
                end: "top 70%",
                toggleActions: "play none none reverse",
                markers: false
            }
        })

        tlcta
        .set(el, {transformOrigin: 'center center'})
        .from(el, { opacity: 1,  y: "-=150"}, {opacity: 1, y: 0, duration: 1, immediateRender: false})
    });

    gsap.utils.toArray('.tm-gsap-animate-circle').forEach((el, index) => {
        let arspin = gsap.timeline({
            scrollTrigger: {
                trigger: el,
                scrub: 1,
                start: "top 85%",
                end: "top 0%",
                toggleActions: "play none none reverse",
                markers: false
            }
        })

        arspin
        .set(el, {transformOrigin: 'center center'})
        .fromTo(el, { rotate: 0}, { rotate: 180, duration: 2, immediateRender: false})
    });


    gsap.utils.toArray(".tm-gsap-img-parallax").forEach(function(container) {
      let image = container.querySelector("img");

      let tl = gsap.timeline({
          scrollTrigger: {
              trigger: container,
              scrub: .5,
          },
      });
      tl.from(image, {
          yPercent: -30,
          ease: "none",
      }).to(image, {
          yPercent: 30,
          ease: "none",
      });
    });

})(jQuery);