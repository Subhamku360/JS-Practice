let elem1=document.querySelector(".element1");
let elem2=document.querySelector(".element2");
let elem3=document.querySelector(".element3");
let elem4=document.querySelector(".element4");
let elem5=document.querySelector(".element5");
let img1=document.querySelector(".image1");
let img2=document.querySelector(".image2");
let img3=document.querySelector(".image3");
let img4=document.querySelector(".image4");
let img5=document.querySelector(".image5");

elem1.addEventListener("mouseenter",function()
{
    elem1.addEventListener("mousemove",function(e)
    {
        console.log(e.clientX,e.clientY);
        img1.style.position="absolute";
        img1.style.opacity=1;
        img1.style.left=`${e.clientX}px`;
        



    }
)
})
elem1.addEventListener("mouseleave",function()
{
    img1.style.opacity="0";

})
elem2.addEventListener("mouseenter",function()
{
    elem2.addEventListener("mousemove",function(e)
    {
        console.log(e.clientX,e.clientY);
        img2.style.opacity="1";
        img2.style.position="absolute";
        img2.style.left=`${e.clientX}px `;






    })
})
elem2.addEventListener("mouseleave",function()
{
    img2.style.opacity="0";

})
elem3.addEventListener("mouseenter",function()
{

    elem3.addEventListener("mousemove",function(e)
    {
        console.log(e.clientX,e.clientY);
        img3.style.opacity="1";
        img3.style.position="absolute";
        img3.style.left=`${e.clientX}px`;




    })
})
elem3.addEventListener("mouseleave",function()
{
    img3.style.opacity="0";

})
elem4.addEventListener("mouseenter",function()
{
    elem4.addEventListener("mousemove",function(e)
    {
        console.log(e.clientX,e.clientY);
        img4.style.opacity="1";
        img4.style.position="absolute";
        img4.style.left=`${e.clientX}px`;




    })
})
elem4.addEventListener("mouseleave",function()
{
    img4.style.opacity="0";

})
elem5.addEventListener("mouseenter",function()
{
    elem5.addEventListener("mousemove",function(e)
    {
        console.log(e.clientX,e.clientY);
        img5.style.opacity="1";
        img5.style.position="absolute";
        img5.style.left=`${e.clientX}px`;




    })
})
elem5.addEventListener("mouseleave",function()
{
    img5.style.opacity="0";

})
