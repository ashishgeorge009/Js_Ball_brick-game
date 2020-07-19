const d = document;

const bar1 = d.querySelector("#one");
const bar2 = d.querySelector("#two");
const ball = d.querySelector("#ball");
const body = d.querySelector("body");
const bound = body.clientHeight - bar1.clientHeight;

body.addEventListener("keydown", function(e){
    
    if(e.key == "ArrowDown"){
   
    //bar1,bar2
    let b1top = Number((bar2.style.top.slice(0,-2)))
    console.log(b1top);
    if(b1top<=bound){
        bar2.style.top = (100 + b1top) + "px";

    }
    }
    if(e.key == "ArrowUp"){
   
        //bar1,bar2
        let b1top = Number((bar2.style.top.slice(0,-2)))
        console.log(b1top);
        if(b1top>=0){
        bar2.style.top = (b1top - 100) + "px";
        }
        }
    if(e.key == "s"){

        //bar1,bar2
        let b1top = Number((bar1.style.top.slice(0,-2)))
        console.log(b1top);
        if(b1top<=bound){
            bar1.style.top = (100 + b1top) + "px";

        }
        }
    if(e.key == "w"){

        //bar1,bar2
        let b1top = Number((bar1.style.top.slice(0,-2)))
        console.log(b1top);
        if(b1top>=0){
            bar1.style.top = (b1top - 100) + "px";
        }
        }
    console.log(e.key);
})

// console.log(body.clientHeight - bar1.clientHeight)
let xd = true;
let yd = true;
const disp = 1.5;
function moveball(){
    let bodyheight = body.clientHeight;
    let bodyWidth = body.clientWidth;
    let ballTop = Number(ball.style.top.slice(0, -2));
    let ballLeft = Number(ball.style.left.slice(0, -2));
    let ballBottom = Number(ball.style.top.slice(0, -2)) + 100;
    let ballRight = Number(ball.style.left.slice(0, -2)) + 100;

    if (ballTop <= 0 || ballBottom >= bodyheight) {
        yd = !yd
    }
    
    if (ballLeft <= 0 || ballRight >= bodyWidth) {
        xd = !xd;
    }

    ball.style.top=yd==true?(ballTop-disp)+"px":(ballTop+disp)+"px"

    ball.style.left=xd==true?(ballLeft-disp)+"px":(ballLeft+disp)+"px"

}
setInterval(moveball,1)