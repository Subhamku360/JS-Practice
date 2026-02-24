let arr=[
    {
        image:"https://images.unsplash.com/photo-1694871420298-52ce0615ab1a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
        Name:"Pratham",
        Profession:"Shop Keeper",
    },
    {
        image:"https://plus.unsplash.com/premium_photo-1689838026921-c09632fd77ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D",
        Name:"Sonu",
        Profession:"WeB Developer",
    },
    {
        image:"https://plus.unsplash.com/premium_photo-1689870830524-e1aa1bcee383?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8",
        Name:"Prince",
        Profession:"Company Owner",
    },
];
// let image=document.querySelectorAll("img")
// let h1=document.querySelectorAll("h1");
// let p=document.querySelectorAll("p");
let cluster="";
body=document.body
arr.forEach(function(ele,index)
{
   body.innerHTML+=`<div class="card">
                        <img src="${ele.image}" alt="">
                        <h1>${ele.Name}</h1>
                        <p>${ele.Profession}</p>
                    </div>`;


})
