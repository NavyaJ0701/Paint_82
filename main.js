var mouse_event="empty";


var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="purple";
width_of_line =2;
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    color=document.getElementById("color").value;
    width_of_line =document.getElementById("width_of_line").value;
    radius=document.getElementById("radius").value;
mouse_event="mouseDown";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){

    current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY-canvas.offsetTop;

    if(mouse_event=="mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;

        console.log("Current position of x and y coordinates are= ");
        console.log("x= "+current_position_of_mouse_x+" y="+current_position_of_mouse_y );
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,radius,0,2 *Math.PI)

        console.log("current position of x and y coordinates are ");
        console.log("x= "+current_x+" & y="+current_y );
        ctx.lineTo(current_x,current_y);
        ctx.stroke();
    }
    last_x=current_x;
    last_y=current_y;
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
mouseevent="mouseUP";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
mouseevent="mouseleave";
}