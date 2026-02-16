img=document.querySelector(".upper");
icon=document.querySelector("#icon");

img.addEventListener("dblclick",function()
{
    icon.style.opacity=1;
    icon.style.transform='translate(-50%,-50%) scale(1) rotate(0deg)';

    setTimeout(() => {
        icon.style.transform='translate(-50%,-250%) scale(0) rotate(360deg)';
    }, 800);
    setTimeout(() => {

        icon.style.opacity=0;
    }, 1000);
    setTimeout(() => {
        icon.style.transform='translate(-50%,-50%) scale(1) rotate(0)'
    }, 1200);

})
