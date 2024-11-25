//circle 1
let c1 = document.getElementById("circle1");
c1.addEventListener("mouseenter",function(){
    let r = Math.floor(Math.random()*100);
    c1.innerHTML=`<h1>${r}</h1>`;
})
c1.addEventListener("mouseleave",function(){
    c1.innerHTML=`<h1>${1}</h1>`;
})
//Circle 2
let c2 = document.getElementById("circle2");
let clr = "green";
c2.addEventListener("mouseenter",function(){
    if(clr=="green"){
        c2.style.backgroundColor="green";
        clr="red"
    }
    else if(clr == "red"){
        c2.style.backgroundColor="red";
        clr = "blue";
    }
    else{
        c2.style.backgroundColor="blue";
        clr ="green"
    }
})
c2.addEventListener("mouseleave",function(){
    c2.style.backgroundColor="white";
})

//Circle 3
let c3 = document.getElementById("circle3");
c3.addEventListener("mouseenter",function(){
    let r1 = Math.floor(Math.random()*256);
    let r2 = Math.floor(Math.random()*256);
    let r3 = Math.floor(Math.random()*256);
    c3.style.backgroundColor=`rgb(${r1},${r2},${r3})`;

    
})
c3.addEventListener("mouseleave",function(){
    c3.style.backgroundColor="white";
   
})


//Circle 4
let c4 = document.getElementById("circle4");
c4.addEventListener("click",function(){
    let r1 = Math.floor(Math.random()*256);
    let r2 = Math.floor(Math.random()*256);
    let r3 = Math.floor(Math.random()*256);
    c1.style.backgroundColor=`rgb(${r1},${r2},${r3})`;
    c2.style.backgroundColor=`rgb(${r2},${r3},${r1})`;
    c3.style.backgroundColor=`rgb(${r3},${r1},${r2})`;

    
})

c4.addEventListener("mouseleave",function(){
    c4.style.backgroundColor="white";
    c3.style.backgroundColor="white";
    c2.style.backgroundColor="white";
    c1.style.backgroundColor="white";
})



let main = document.getElementById("main");
let crsr = document.getElementById("cursor");
main.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";


})


