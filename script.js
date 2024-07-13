


const section = document.querySelector('section.vid')
const vid = section.querySelector('video')

vid.pause()

const scroll = () => {
  const distance = window.scrollY - section.offsetTop
  const total = section.clientHeight - window.innerHeight

  let percentage = distance / total
  percentage = Math.max(0, percentage)
  percentage = Math.min(percentage , 1)

  if (vid.duration > 0) {
    vid.currentTime = vid.duration * percentage
  }
}

scroll()
window.addEventListener('scroll', scroll)


// script.js
document.addEventListener('DOMContentLoaded', function() {
  gsap.registerPlugin(ScrollTrigger);

  const svgPath = document.querySelector('#mySvg path');
  const length = svgPath.getTotalLength();

  // Set up the initial styles
  gsap.set(svgPath, {
      strokeDasharray: length,
      strokeDashoffset: length
  });

  // Create the animation
  gsap.to(svgPath, {
      strokeDashoffset: 0,
      scrollTrigger: {
          trigger: svgPath,
          start: 'top 80%', // Start the animation when the top of the SVG is 80% down the viewport
          end: 'bottom 20%', // End the animation when the bottom of the SVG is 20% up the viewport
          scrub: true, // Smoothly animate the drawing
      }
  });
});
