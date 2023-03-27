const changeSizeButton = document.getElementById('change-size-button');
const resetButton = document.getElementById('reset-button');
const canvasSizeTitle = document.getElementById('canvas-size-title');
const canvas = document.getElementById('canvas');


const defaultSize = 16;

function initPage(){
  setCanvasSize(defaultSize);
  setCanvasSizeTitle(defaultSize)
}

function draw(e){
  e.target.style.backgroundColor = "#333"
}

function setCanvasSize(size){
  canvas.innerHTML = ""
  canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`
  for (let i = 0; i < size * size; i++){
    const canvasItem = document.createElement('div');
    canvasItem.classList.add('canvas-item');
    canvasItem.addEventListener('mouseover', draw)
    canvasItem.addEventListener('mousedown', draw)
    canvas.appendChild(canvasItem)
  }
}

function setCanvasSizeTitle(size){
  canvasSizeTitle.textContent = `${size} x ${size}`
}

function getUserInput(){
  return prompt('Input your canvas size between 16 to 64');
}

function changeSizeCanvasHandler(){
  let isInputUserValid = false;
  while(!isInputUserValid){
    let userInput = getUserInput();
    if (userInput === null) {
      return;
    }

    userInput = Number(userInput);
    if (userInput < 16 || userInput > 64){
      alert('You can only input number between 16 to 64');
      continue
    }

    setCanvasSizeTitle(userInput)
    setCanvasSize(userInput)
    isInputUserValid = true
  }
}

function resetCanvas(){
  const canvasItems = document.querySelectorAll('.canvas-item');
  canvasItems.forEach(canvasItem => {
    canvasItem.style.backgroundColor = "unset"
  })
}

window.addEventListener('load' ,initPage);
changeSizeButton.addEventListener('click', changeSizeCanvasHandler);
resetButton.addEventListener('click', resetCanvas);