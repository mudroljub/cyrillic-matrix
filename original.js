const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
canvas.height = window.innerHeight
canvas.width = window.innerWidth

const cyrillic = ('АаБбВвГгДдЕеЁёЖжЗзИиЙйКкЛлМмНнОоПпРрСсТтУуФфХхЦцЧчШшЩщЪъЫыЬьЭэЮюЯя').split('')

const fontSize = 14
const columns = canvas.width / fontSize
const drops = [] // one per column

// x below is the x coordinate
// 1 = y co-ordinate of the drop(same for every drop initially)
for (let x = 0; x < columns; x++)
  drops[x] = 1

function draw() {
  // translucent BG to show trail
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = '#0F0'
  ctx.font = fontSize + 'px arial'

  for (let i = 0; i < drops.length; i++) {
    const slovo = cyrillic[Math.floor(Math.random() * cyrillic.length)]
    ctx.fillText(slovo, i * fontSize, drops[i] * fontSize)

    // adding a randomness to the reset to make the drops scattered on the Y axis
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975)
      drops[i] = 0

    drops[i]++
  }
}

setInterval(draw, 33)
