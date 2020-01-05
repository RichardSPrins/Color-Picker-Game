let num_of_squares = 6
let colors = generateRandomColors(num_of_squares)
let squaresList = document.querySelectorAll('.square')
let squares = Array.from(squaresList)
let picked_color = pickColorIndex()
let color_choice = document.getElementById('color-display')
let message_text = document.getElementById('message')
let restart = document.getElementById('restart')
let easy = document.querySelector('#easy')
let hard = document.querySelector('#hard')
let modal = document.getElementById('modal')
color_choice.innerHTML = picked_color.toUpperCase()



easy.addEventListener('click', function(){
  easy.classList.add('selected')
  hard.classList.remove('selected')
  num_of_squares = 3
  colors = generateRandomColors(num_of_squares)
  picked_color = pickColorIndex()
  color_choice.textContent = picked_color
  for(let i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.backgroundColor = colors[i]  
    } else{
      squares[i].style.display = 'none'
    }
  }
})

hard.addEventListener('click', function(){
  hard.classList.add('selected')
  easy.classList.remove('selected')
  num_of_squares = 6
  colors = generateRandomColors(num_of_squares)
  picked_color = pickColorIndex()
  color_choice.textContent = picked_color
  for(let i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i] 
    squares[i].style.display = 'block'
  }
})

restart.addEventListener('click', function() {
  colors = generateRandomColors(num_of_squares)
  picked_color = pickColorIndex()
  color_choice.textContent = picked_color
  message_text.textContent = ''
  restart.textContent = 'New Colors'
  modal.style.display = 'none'

  for(let i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i]
    squares[i].style['box-shadow'] = '0px 10px 18px 1px #000000'
  }
})

function pickColorIndex(){
  let random = Math.floor(Math.random() * colors.length)

  return colors[random]
}

function randomColor() {
  let r = Math.floor(Math.random() * 256)
  let b = Math.floor(Math.random() * 256)
  let g = Math.floor(Math.random() * 256)

  return `rgb(${r}, ${g}, ${b})`
}

function generateRandomColors(n){
  let colors_array = []
  for(let i = 0; i < n; i++){
    colors_array.push(randomColor())
  }

  return colors_array
}

function changeColors (color) {
  for(let x = 0; x < squares.length; x++){
    squares[x].style.backgroundColor = color
  }
}

for(let i = 0; i < squares.length; i++){
  // add colors to squares
  squares[i].style.backgroundColor = colors[i]
  // add event listeners to squares
  squares[i].addEventListener('click', function(){
    let clicked_color = this.style.backgroundColor
    if(clicked_color === picked_color){
      changeColors(picked_color)
      restart.textContent = 'Play Again'
      message_text.innerHTML = 'CORRECT'
      modal.style.backgroundColor = 'green'
      modal.style.display = 'flex'
      for(let i = 0; i < squares.length; i++){
        squares[i].style['box-shadow'] = '0px 10px 18px 1px #000000'
      }
    } else {
      message_text.innerHTML = 'TRY AGAIN'
      modal.style.backgroundColor = 'red'
      modal.style.display = 'flex'
      setTimeout(function(){
        modal.style.display = 'none'
      }, 500)
      this.style.background = '#232323'
      this.style['box-shadow'] = 'none'
    }
  })
}