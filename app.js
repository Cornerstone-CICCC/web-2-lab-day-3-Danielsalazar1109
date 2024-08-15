gsap.registerPlugin(ScrollTrigger);
let section1Tl = gsap.timeline();

section1Tl.from('.section1 h1 span:last-child', {
    x: '100vw',
    duration: 0.8,
    ease: 'power1.out'
}, 0);

section1Tl.from('.section1 h1 span:first-child', {
    x: '-100vw',
    duration: 0.8,
    ease: 'power1.out'
}, '-=0.5'); 

section1Tl.from('.section1 p', {
    rotate: 10,
    duration: 0.8,
    opacity: 0,
    ease: 'power1.out'
}, '-=0.4');

section1Tl.from('.section1 img', {
    y: '700vh',
    duration: 0.8,
    ease: 'power1.out'
}, '-=0.4');

let section2Tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".section2",
        start: "top top",
        end: "bottom top",
        scrub: true, 
        toggleActions: "play none reverse none",
    }
});

section2Tl.from('.section2 h2 span', {
    y: '-100vh',
    stagger: 0.2,
    duration: 0.8,
    opacity: 0,
    ease: 'power2.out'
});

section2Tl.from('.section2 p', {
    rotateY: 90,
    duration: 2,
    ease: 'power2.out',
    opacity: 0
}, '-=0.4');

let section3Tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".section3",
        start: "top top",
        end: "bottom top",
    }
});

gsap.set('.section3 p span', { backgroundColor: 'white' , color:'black' });

section3Tl.from('.section3 h2', {
    scale:5,
    stagger: 0.2, 
    duration: 0.8, 
    opacity: 0,
    ease: 'power2.out' 
});

section3Tl.to('.section3 h2', {
    scale: 1,
    stagger: 0.2,
    duration: 0.8, 
});


gsap.from('.section3 p span', {
    y: '100vh',
    stagger: 0.2,
    duration: 0.8,
    opacity: 0,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: ".section3",
        start: "top top",
        end: "bottom top",
        scrub: true,
    }
});

let sections = gsap.utils.toArray(".horizontal-sections > section"); 
 
let sectionsTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".horizontal-sections",
    start: "top top",
    end: "+=" + (innerWidth * (sections.length)),
    pin: true,
    scrub: 1,
  }
});

let section4Tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".section4",
        start: "right center",
        end: "left center",
    }
});

section4Tl.from('.section4 div', {
    x: '100vw',
    duration: 4,
}); 
 

gsap.utils.toArray('.section5 h2').forEach(h2 => {
    const letters = h2.textContent.split('').map(letter => {
        return `<span>${letter === ' ' ? '&nbsp;' : letter}</span>`;
    }).join('');
    h2.innerHTML = letters;

    gsap.from(h2.querySelectorAll('span'), {
        y: '-100vh',
        opacity: 0,
        duration: 1,
        stagger: 0.05,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: h2,
            start: "top 90%", 
            end: "bottom 10%",
            scrub:true,
        }
    });
});

let section5Tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".section5",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
    }
});
section5Tl.from('.section5 p', {
    y: '100vh',
    duration: 0.1,
    ease: 'power1.out'
}); 

section5Tl.from('.section5 button', {
    scale:0.5,
    stagger: 0.2, 
    duration: 0.8, 
    opacity: 0,
    ease: 'power2.out' 
});

section5Tl.to('.section5 button', {
    scale:1,
    stagger: 0.2,
    duration: 0.8, 
});

section5Tl.fromTo('.section5', 
    {
        backgroundPosition: '150% 90%',
    },
    {
        backgroundPosition: '90% 90%', 
        backgroundColor: 'black',
        duration: 2,
        ease: 'power1.out'
    },
    '+=0.5'
);
