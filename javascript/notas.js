let newX = 0, newY= 0, startX = 0, startY = 0;

const nota = document.getElementById('nota')

nota.addEventListener('mousedown', mouseDown)

function mouseDown(e){
    startX = e.clientX
    startY = e.clientY

    document.addEventListener('mousemove', mousemove)
    document.addEventListener('mouseup', mouseUp)

}

function mousemove(e){
    newX = startX - e.clientX
    newY = startY - e.clientY

    startX = e.clientX
    startY = e.clientY

    nota.style.top = (nota.offsetTop - newY) + 'px'
    nota.style.left = (nota.offsetLeft - newX) + 'px'

}

function mouseUp(e){
    document.removeEventListener('mousemove', mousemove)
    
}