Canvas=document.getElementById("myCanvas");
ctx= Canvas.getContext("2d");
var mouseEvent="";
var lastmouseX="";
var lastmouseY="";
Color="ivoryBlack";
width= 25;
Canvas.addEventListener("mousedown",cursorMouseDown);
function cursorMouseDown(e)
{
   mouseEvent="mousedown";
   console.log("mousedown");
}


Canvas.addEventListener("mouseup",cursorMouseUp);
function cursorMouseUp(e)
{
   mouseEvent="mouseup";
}


Canvas.addEventListener("mouseleave",cursorMouseLeave);
function cursorMouseLeave(e)
{
   mouseEvent="mouseleave";
}


Canvas.addEventListener("mousemove",cursorMouseMove);
function cursorMouseMove(e)
{
   currentPositionOfMouseX=e.clientX-Canvas.offsetLeft;
   currentPositionOfMouseY=e.clientY-Canvas.offsetTop;
   if(mouseEvent=="mousedown")
   {
      ctx.beginPath();
      ctx.strokeStyle=Color;
      ctx.lineWidth=width;
      console.log("Last Position of X");
      console.log("X= "+lastmouseX+"y=  "+lastmouseY);
      ctx.moveTo(lastmouseX,lastmouseY);
      ctx.lineTo(currentPositionOfMouseX,currentPositionOfMouseY);
      ctx.stroke();
   }
     lastmouseX=currentPositionOfMouseX;
     lastmouseY=currentPositionOfMouseY;
}
  











