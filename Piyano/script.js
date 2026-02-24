let h1=document.querySelector("h1");
let body=document.querySelector("body");
// h1=document.querySelector("h1");
var aud1=new Audio("./Sounds/key01.mp3");
var aud2=new Audio("./Sounds/key02.mp3");
body.addEventListener("keydown", function(e)
{

        if(e.key==="a")
        {
            aud1.play();
        }
        if(e.key==="b")
        {
            aud2.play();
        }

});
