const canvas = document.querySelector('#canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
canvas.style.backgroundColor = '#000000'

const ctx = canvas.getContext('2d')
ctx.font = '16px monospace'

const cirilica = Array.from('АаБбВвГгДдЕеЁёЖжЗзИиЙйКкЛлМмНнОоПпРрСсТтУуФфХхЦцЧчШшЩщЪъЫыЬьЭэЮюЯя')
const positions = []

class Position {
  constructor() {
    this.reset()
    this.brzina = Math.random() * 30 + 5
  }
  reset() {
    this.x = Math.random() * canvas.width
    this.y = 0
  }
}

/** INIT **/

cirilica.map((s, i) => positions[i] = new Position())

/** LOOP **/

const mainLoop = () => {
  window.requestAnimationFrame(mainLoop)
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = 'rgb(0, 255, 0)'
  positions.map(p => {
    const slovo = cirilica[Math.floor(Math.random() * cirilica.length)]
    ctx.fillText(slovo, p.x, p.y)
    p.y += p.brzina
    if (p.y > canvas.height) p.reset()
  })
}

mainLoop()
