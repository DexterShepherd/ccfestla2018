const Reveal = require('reveal.js')
const p5 = require('p5')
require('./node_modules/reveal.js/css/reveal.css')
require('./node_modules/reveal.js/css/theme/white.css')

Reveal.initialize({
  slideNumber: true,
  history: true
})

let sketchIndex = 0

let canvas = null

let slideIndex = Reveal.getIndices().h

let currentSketch = 13

const slideSketches = {
  0: function(p) {
    p.stroke(231, 76, 60)
    p.noFill()

    let numPoints = 5 

    p.translate(p.width / 2, p.height / 2)
    p.beginShape()
    for(let i = 0; i < numPoints; i += 1) {
      let delta = p.map(i, 0, numPoints - 1, 0, p.TWO_PI)
      p.vertex(p.map(i, 0, numPoints - 1, -p.width * 0.25, p.width * 0.25), p.sin(delta + p.frameCount * 0.01) * p.height * 0.25)
    }
    p.endShape()
  },
  3: function(p) {
    p.fill(231, 75, 60)
    p.noStroke()
    let numPoints = 20
    let r = p.height * 0.125
    p.translate(p.width / 2, p.height / 4)
    for(let i = 0; i < numPoints; i += 1) {
      let delta = p.map(i, 0, numPoints - 1, 0, p.TWO_PI)
      p.ellipse(p.map(i, 0, numPoints - 1, -p.width * 0.25, p.width * 0.25), p.sin(delta + p.frameCount * 0.01) * r, 20, 20)
    }

    p.fill(52, 152, 219)
    p.translate(0, p.height / 2)
    for(let i = 0; i < numPoints; i += 1) {
      let delta = p.map(i, 0, numPoints - 1, 0, p.TWO_PI)
      p.ellipse(p.map(i, 0, numPoints - 1, -p.width * 0.25, p.width * 0.25), p.cos(delta + p.frameCount * 0.01) * r, 20, 20)
    }
  },
  5: function(p) {
    p.stroke(231, 75, 60)
    p.noFill()
    let numPoints = 20
    let r = p.height * 0.125
    p.translate(p.width / 2, p.height / 4)
    for(let i = 0; i < numPoints; i += 1) {
      let delta = p.map(i, 0, numPoints - 1, 0, p.TWO_PI)
      p.ellipse(p.map(i, 0, numPoints - 1, -p.width * 0.25, p.width * 0.25), p.sin(delta + p.frameCount * 0.01) * r, 20, 20)
    }

    p.stroke(52, 152, 219)
    p.translate(0, p.height / 2)
    for(let i = 0; i < numPoints; i += 1) {
      let delta = p.map(i, 0, numPoints - 1, 0, p.TWO_PI)
      p.ellipse(p.map(i, 0, numPoints - 1, -p.width * 0.25, p.width * 0.25), p.cos(delta + p.frameCount * 0.01) * r, 20, 20)
    }
  },
  6: function(p) {
    p.noStroke()
    p.background(255, 50)
    const r = p.height * 0.125
    const s = p.frameCount * 0.01
    p.translate(p.width / 2, p.height / 2)
    p.translate(r, r)

    let x = p.sin(s) * r
    let y = p.cos(s) * r

    p.noFill()
    p.stroke(231, 75, 60)
    p.ellipse(0, 0, r * 2, r * 2)

    p.beginShape()
    p.curveVertex(p.sin(s) * r, -r)
    for(let i = 0; i < 20; i += 1) {
      p.curveVertex(p.sin(s + i * 0.5) * r, -r - i * 15)
    }
    p.endShape()


    p.line(x, y, x, -r)

    p.stroke(52, 152, 219)

    p.beginShape()
    p.curveVertex(-r, p.cos(s) * r)

    for(let i = 0; i < 20; i += 1) {
      p.curveVertex(-r - i * 15, p.cos(s + i * 0.5) * r)
    }
    p.line(x, y, -r, y)

    p.endShape()

    p.stroke(150)
    p.line(x, -r, -r, y)

    p.noStroke()
    p.fill(231, 75, 60)
    p.ellipse(x, y, 10, 10)
  },
  7: function(p) {
    p.fill(231, 75, 60)
    p.noStroke()
    let numPoints = 20
    let r = p.height * 0.125
    p.translate(p.width / 2, p.height / 4)
    for(let i = 0; i < numPoints; i += 1) {
      let delta = p.map(i, 0, numPoints - 1, 0, p.TWO_PI)
      p.ellipse(p.map(i, 0, numPoints - 1, -p.width * 0.25, p.width * 0.25), p.sin(delta + p.frameCount * 0.01) * r, 20, 20)
    }

    p.fill(52, 152, 219)
    p.translate(0, p.height / 2)
    for(let i = 0; i < numPoints; i += 1) {
      let delta = p.map(i, 0, numPoints - 1, 0, p.TWO_PI)
      p.ellipse(p.map(i, 0, numPoints - 1, -p.width * 0.25, p.width * 0.25), p.cos(delta + p.frameCount * 0.01) * r, 20, 20)
    }
  },
  10: function(p) {
    p.translate(p.width / 2, p.height * 0.25)
    p.ellipse(p.sin(p.frameCount * 0.1) * 100, 0, 10, 10)
  },
  12: function(p) {
    p.translate(p.width / 2, p.height * 0.25)
    for(let i = 0; i < 20; i += 1) {
      p.ellipse((20 * 20 / 2) - i * 20, p.sin(i) * 20, 10, 10)
    }
  },
  13: function(p) {
    p.translate(p.width / 2, p.height * 0.25)
    for(let i = 0; i < 20; i += 1) {
      p.ellipse((20 * 20 / 2) - i * 20, p.sin(i + p.frameCount * 0.1) * 20, 10, 10)
    }
  },
  14: function(p) {
    p.push()
    p.translate(p.width * 0.25, p.height * 0.25)
    p.rotate(p.frameCount * 0.01)
    for( let i = 0; i < 8; i += 1 ) {
      let x = p.sin(p.frameCount * 0.02) * p.sin(p.sin(p.frameCount * 0.02) * i + p.frameCount * 0.05) * 50
      let y = p.cos(p.sin(p.frameCount * 0.02) * i + p.frameCount * 0.05) * 50
      p.rect(x, y, 10, 10) 
    }
    p.pop()

    p.push()
    p.translate(p.width * 0.75, p.height * 0.25)
    p.rotate(p.frameCount * 0.01)
    for( let i = 0; i < 8; i += 1 ) {
      let angle = p.map(i, 0, 8, 0, p.TWO_PI)
      let x = p.sin(p.frameCount * 0.02) * p.sin(p.sin(p.frameCount * 0.02) * angle + p.frameCount * 0.01) * 50
      let y = p.cos(p.sin(p.frameCount * 0.02) * angle + p.frameCount * 0.01) * 50
      p.rect(x, y, 10, 10) 
    }
    p.pop()
  },
  15: function(p) {
    p.push()
    p.translate(p.width * 0.25 , p.height * 0.25)
    for(let i = 0; i < 5; i += 1) {
      p.rect(i * 55, 0, 50, 50)
    }
    p.pop()

    p.push()
    p.translate(p.width * 0.75 , p.height * 0.25 - 100)
    p.rotate(p.PI * 0.25)
    for(let i = 0; i < 5; i += 1) {
      p.rect(i * 55, 0, 50, 50)
    }
    p.pop()
  },
  16: function(p) {
    p.noFill()
    p.stroke(231, 75, 60)
    p.translate(p.width * 0.25, p.height / 2)
    p.ellipse(0, 0, 400, 400)
    for(let i = 0; i < 360; i += 1) {
      let x = p.sin(p.radians(i)) * 200
      let y = p.cos(p.radians(i)) * 200
      p.line(0, 0, x, y)
    }

    p.stroke(52, 152, 219)
    p.translate(p.width * 0.5, 0)
    p.ellipse(0, 0, 400, 400)
    for(let i = 0; i < p.TWO_PI; i += 1) {
      let x = p.sin(i) * 200
      let y = p.cos(i) * 200
      p.line(0, 0, x, y)
    }
  },
  19: function(p) {
    p.translate(p.width / 2, p.height / 2)
    for(let i = 0; i < 20; i += 1) {
      let angle = p.map(i, 0, 20, 0, p.TWO_PI) 
      p.ellipse(p.sin(angle) * p.height * 0.3, p.cos(angle) * p.height * 0.3, 20, 20)
    }
  },
  20: function(p) {
    p.translate(p.width / 2, p.height * 0.25)
    for(let i = 0; i < 20; i += 1) {
      let angle = p.map(i, 0, 20, 0, p.TWO_PI)
      p.ellipse((20 * 20 / 2) - i * 20, p.sin(angle) * 50, 10, 10)
    }
  },
  21: function(p) {
    p.noStroke()
    p.fill(231, 75, 60)
    p.rectMode(p.CENTER)
    p.translate(p.width / 2, p.height / 2)
    p.rotate(p.map(p.mouseX, 0, p.width, 0, p.TWO_PI))
    p.rect(0, 0, p.width * 0.3, p.height * 0.3)
  },
  26: function(p) {
    p.noStroke()
    p.fill(231, 75, 60)
    p.rectMode(p.CENTER)
    p.rotate(p.frameCount * 0.01)
    p.rect(p.width * 0.5, p.height * 0.5, 200, 200)
  },
  27: function(p) {
    p.noStroke()
    p.fill(52, 152, 219)
    p.translate(p.width * 0.5, p.height * 0.5)
    p.rectMode(p.CENTER)
    p.rotate(p.frameCount * 0.01)
    p.rect(0, 0, 200, 200)
  },
  29: function(p) {
    p.translate(p.width * 0.25, p.height * 0.25)
    p.rect(0, 0, 20, 20 )
    p.translate(p.width * 0.25, p.height * 0.25)
    p.rect(0, 0, 20, 20 )
    p.translate(p.width * 0.25, p.height * 0.25)
    p.rect(0, 0, 20, 20 )
  },
  30: function(p) {
    p.translate(p.width * 0.5, 0)
    for(let i = 0; i < 20; i += 1) {
      let angle = p.map(i, 0, 20, 0, p.TWO_PI)
      for(let j = 0; j < 10; j += 1) {
        p.translate(10, 15)
        p.rotate(angle / 10)
        p.rect(0, 0, j + 2 * 0.5, j + 2 * 0.5)
      }
    }
  },
  31: function(p) {
    p.rectMode(p.CENTER)
    p.translate(p.width * 0.25, 0)
    for(let i = 0; i < 10; i += 1) {
      p.push()
      let x = p.map(i, 0, 10, 0, p.width * 0.5)
      p.translate(x, p.height * 0.5)
      p.rotate(i % 2 == 0 ? p.frameCount * 0.01 : -p.frameCount * 0.01)
      p.rect(0, 0, 50, 50)
      p.pop()
    }
  },
  32: function(p) {
    p.fill(231, 75, 60)
    p.noStroke()
    let numPoints = 20
    let r = p.height * 0.125
    p.translate(p.width / 2, p.height / 4)
    for(let i = 0; i < numPoints; i += 1) {
      let delta = p.map(i, 0, numPoints - 1, 0, p.TWO_PI)
      p.ellipse(p.map(i, 0, numPoints - 1, -p.width * 0.25, p.width * 0.25), p.sin(delta + p.frameCount * 0.01) * r, 20, 20)
    }

    p.fill(52, 152, 219)
    p.translate(0, p.height / 2)
    for(let i = 0; i < numPoints; i += 1) {
      let delta = p.map(i, 0, numPoints - 1, 0, p.TWO_PI)
      p.ellipse(p.map(i, 0, numPoints - 1, -p.width * 0.25, p.width * 0.25), p.cos(delta + p.frameCount * 0.01) * r, 20, 20)
    }
  }
}


let muteAnimation = false
Reveal.addEventListener( 'ready', () => {
  const sketch = new p5( p => {
    p.setup = function() {
      const canvas = p.createCanvas(p.windowWidth, p.windowHeight)
      canvas.parent('canvas-container')
    }
    p.draw = function() {
      p.background(255, 50)
      if ( slideSketches[slideIndex] !== undefined )  {
        currentSketch = slideIndex
      }
      if ( !muteAnimation ) {
        slideSketches[currentSketch](p)
      }
    }
    p.keyPressed = function() {
      if(p.keyCode == 81) {
        muteAnimation = !muteAnimation
      }
    }
  })
} )

Reveal.addEventListener('slidechanged', (e) => slideIndex = e.indexh)

