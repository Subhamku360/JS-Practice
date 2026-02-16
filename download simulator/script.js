start=document.querySelector(".start");
stopbtn=document.querySelector(".stop");
downloading=document.querySelector(".Downloading");
progress=document.querySelector(".perce");
percentage=document.querySelector(".percent");

let count=0;
let timer=null;



start.addEventListener("click",function()
{
    downloading.textContent="Downloading is Started";
    start.style.pointerEvents="none"
    timer=setInterval(() => {

        if(count<=100)
        {
            progress.style.width=`${count}%`;
            percentage.textContent=`${count}%`;
            count++;

        }
        else{
            clearInterval(timer);
            start.style.opacity="0.5"
            downloading.textContent="Downloading completed";

        }

    }, 10);


})
stopbtn.addEventListener("click",function()
{

    downloading.textContent="Downloading is stopped";
    clearInterval(timer);
    console.log("stop");
    count=0;
    progress.style.width=`${count}%`;
    percentage.textContent=`${count}%`;
    start.style.opacity="1"
    start.style.pointerEvents="auto"
})
