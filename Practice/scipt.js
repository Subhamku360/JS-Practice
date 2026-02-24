h1=document.querySelector("h1");
p=document.querySelector("#modeText");
btn=document.querySelector("#themeBtn");
body=document.querySelector("body");

function currentTheme()
{
    if(window.matchMedia("(prefers-color-scheme:dark)").matches)
    {
        body.classList.add("dark");
        body.classList.remove("light");
        p.textContent="dark";
        
    }
    else{
        p.textContent="light";
        body.classList.remove("dark");
        body.classList.add("light");

    }
}

let mediaQuery=window.matchMedia("(prefers-color-scheme:dark)");
currentTheme();
mediaQuery.addEventListener("change",function()
{
    currentTheme();

})


btn.addEventListener("click",function(){
    if(body.classList.contains("dark"))
    {
        body.classList.add("light");
        body.classList.remove("dark");
        p.textContent="light";

    }
    else{
        body.classList.add("dark");
        body.classList.remove("light");
        p.textContent="dark";
    }
})
