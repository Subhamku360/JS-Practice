let btn=document.querySelector("button");
let main=document.querySelector(".main");

btn.addEventListener("click",function()
{
    div=document.createElement("div");
    div.classList.add("box");

    let  x=Math.random()*100;
    let  y=Math.random()*100;
    let c1=Math.floor(Math.random()*255);
    let c2=Math.floor(Math.random()*255);
    let c3=Math.floor(Math.random()*255);
    let sc=Math.random()*2;
    let rt=Math.random()*360;

    div.style.left=`${x}%`;
    div.style.top=`${y}%`;

    div.style.backgroundColor=`rgb(${c1},${c2},${c3})`

    div.style.scale=`${sc}`;
    div.style.rotate=`${rt}deg`;

    main.append(div);

})
