const div = document.createElement('div')

div.innerHTML = `
<div style="position: fixed;z-index: 2000;height:5px;width:100%">
  <div style="background-color: #F4623A; width:30%;height: 5px"></div>
</div>
`
document.querySelector('body').prepend(div)

const progressBar = div.querySelector('div div div')

let h = document.documentElement.scrollHeight - document.documentElement.clientHeight
progressBar.style.width = `${scrollY / h *100}%`

window.addEventListener('scroll', _.throttle(()=> {
  let h = document.documentElement.scrollHeight - document.documentElement.clientHeight
  progressBar.style.width = `${scrollY / h *100}%`
}, 100))


