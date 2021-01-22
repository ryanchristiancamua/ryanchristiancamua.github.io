;(function () {
  const header = document.querySelector('.main-header')
  const anchors = document.querySelectorAll('a')

  let prevY = 0
  let navigating = false

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop
    if (!scrollY) {
      navigating = false
    }
    if (scrollY > prevY) {
      header.classList.remove('active')
      navigating = false
    } else {
      if (!navigating) {
        header.classList.add('active')
      }
    }
    prevY = scrollY
  })

  anchors.forEach((anchor, index) =>
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      if (this.href === '#') {
        return
      }
      const target = this.href.match(/\#.+$/)[0]
      const element = document.querySelector(target)
      navigating = true
      scrollTo(0, element.offsetTop)
      if (!index) {
        header.classList.add('active')
        return
      }
      header.classList.remove('active')
    })
  )

  new Glide('.glide').mount()
})()
