console.log('OK');

gsap.to('.guitar', {
  duration: 6,
  x: 400,
  scale: 1,
  delay: 2
})

gsap.to('.notes', {
  opacity: 1,
  duration: 2
})