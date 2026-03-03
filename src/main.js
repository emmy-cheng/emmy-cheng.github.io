import './style.css'

// ── Nav: hidden at top, appears on scroll up ──
const nav = document.getElementById('nav')
let lastY = 0
let ticking = false

window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      const y = window.scrollY
      if (y < 80) {
        nav.classList.remove('translate-y-0')
        nav.classList.add('-translate-y-full')
      } else if (y < lastY) {
        nav.classList.remove('-translate-y-full')
        nav.classList.add('translate-y-0')
        nav.classList.add('border-b', 'border-faint/40')
      } else {
        nav.classList.remove('translate-y-0')
        nav.classList.add('-translate-y-full')
      }
      lastY = y
      ticking = false
    })
    ticking = true
  }
})

// ── Scroll reveal ──
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('is-visible')
      io.unobserve(e.target)
    }
  })
}, { threshold: 0.06 })

document.querySelectorAll('.reveal').forEach(el => io.observe(el))
