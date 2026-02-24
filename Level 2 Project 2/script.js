let arr=[
    {
        image:"https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name:"Cool Chair Cosson",
        about:"A stylish chair for modern interiors.",
        price:"$199.99" ,

    },
    {
        image:"https://images.unsplash.com/photo-1758486561455-ebd0d3ba7423?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
        name:"Traditional Chair",
        about:"Old Traditional Chair",
        price:"$1500.99" ,

    },
    {
        image:"https://images.unsplash.com/photo-1613807871118-9e983601b759?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name:"Sofha Chair",
        about:"A stylish chair for modern interiors with soffa texture.",
        price:"$399.99" ,

    },
];

let popu=[{
        image:"https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name:"Cool Chair Cosson",
        about:"A stylish chair for modern interiors.",
        price:"$199.99" ,

    },
    {
        image:"https://images.unsplash.com/photo-1758486561455-ebd0d3ba7423?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
        name:"Traditional Chair",
        about:"Old Traditional Chair",
        price:"$1500.99" ,

    },
    {
        image:"https://images.unsplash.com/photo-1613807871118-9e983601b759?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name:"Sofha Chair",
        about:"A stylish chair for modern interiors with soffa texture.",
        price:"$399.99" ,

    },];

    let cart=[];


h2=document.querySelectorAll(".h2");
p=document.querySelectorAll(".para");   
price=document.querySelectorAll(".price");
image=document.querySelectorAll(".image");
icon=document.querySelectorAll(".ri-add-line");

arr.forEach(function(item,index)
{
      h2[index].textContent=item.name;
      p[index].textContent=item.about;
      price[index].textContent=item.price;
      image[index].style.backgroundImage=`url(${item.image})`;
      
})
let cluster="";
let popularList=document.querySelector(".popular-list");
popu.forEach(function(item,index){

    popularList.innerHTML+=`<div class="popular-card">
                    <img src="${item.image}" />
                    <div>
                        <h4>${item.name}</h4>
                        <p>${item.about}</p>
                        <span>${item.price}</span>
                    </div>
                </div>`
})

let products=document.querySelector(".products");
