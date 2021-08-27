mousevent="empty"
var lasstpositonofx,lasstpositonofy

canvas=document.getElementById("myCanvas")
ctx=canvas.getContext('2d')
color="blue"
widthofline=2

canvas.addEventListener("mousedown",mymousedown)
function mymousedown(e){
    color=document.getElementById("color").value
    widthofline=document.getElementById("widthofline").value
   mousevent="mousedown"
}
canvas.addEventListener("mousemove",mymousemove)
function mymousemove(e){
    currentpositionofmousx=e.clientX-canvas.offsetLeft
    currentpositionofmousy=e.clientY-canvas.offsetTop
    if(mousevent=="mousedown"){
        ctx.beginPath()
        ctx.strokeStyle=color
        ctx.lineWidth=widthofline
        console.log("lass postion of xandy")
        ctx.arc(currentpositionofmousx,currentpositionofmousy,30,0,2*Math.PI)
        ctx.stroke()
       
    }
   
}
canvas.addEventListener("mouseup",mymouseup)
function mymouseup(e){
   mousevent="mouseup"
}
canvas.addEventListener("mouseleave",mymouseleave)
function mymouseleave(e){
   mousevent="mouseleave"
}



function cleararea(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}