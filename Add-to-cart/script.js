let arr = [
    {
      name: "Urban Brew Coffee",
      about: "Rich and aromatic dark roast coffee.",
      price: "₹249",
      img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Mint Fresh Body Wash",
      about: "Cooling mint-infused body wash.",
      price: "₹179",
      img: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Classic Leather Wallet",
      about: "Premium handcrafted wallet .",
      price: "₹899",
      img: "https://images.unsplash.com/photo-1651928692943-5d837fccf061?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8UHJlbWl1bSUyMGhhbmRjcmFmdGVkJTIwd2FsbGV0fGVufDB8fDB8fHww"
    }
];

let newArr=[
    {
        name: "Cool Red Hearted Chair",
        about: "Rich and aromatic dark roast coffee.",
        price: "₹20000",
        img: "https://images.unsplash.com/photo-1694618029681-8480dcbf2b5d?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
    {
    name: "Urban Brew Coffee",
    about: "Rich and aromatic dark roast coffee.",
    price: "₹249",
    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=600&auto=format&fit=crop"
  },
  {
    name: "Mint Fresh Body Wash",
    about: "Cooling mint-infused body wash.",
    price: "₹179",
    img: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?q=80&w=600&auto=format&fit=crop"
  },
  {
    name: "Classic Leather Wallet",
    about: "Premium handcrafted wallet .",
    price: "₹899",
    img: "https://images.unsplash.com/photo-1651928692943-5d837fccf061?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8UHJlbWl1bSUyMGhhbmRjcmFmdGVkJTIwd2FsbGV0fGVufDB8fDB8fHww"
  }];

let products=document.querySelector(".products");
arr.forEach((element,index)=>{
    products.innerHTML+=`<div class=" bg-white rounded-2xl p-4 w-[240px] shrink-0 shadow-sm hover:shadow-lg transition duration-300">

    <!-- Image -->
    <div class="w-full h-52 bg-zinc-200 rounded-xl overflow-hidden">
        <img
            src="${element.img}"
            class="w-full h-full object-cover"
            alt=""
        >
    </div>

    <!-- Content -->
    <div class="pt-4">
        <h1 class="font-semibold text-lg">${element.name}</h1>

        <div class="flex justify-between items-end mt-3">
            <div>
                <p class="text-sm text-zinc-400">${element.about}</p>
                <p class="font-semibold mt-1">${element.price}</p>
            </div>

            <button data-index="${index}" class="w-10 h-10 rounded-full shader text-yellow-400 flex items-center justify-center hover:scale-105 transition add">
                <i  data-index="${index}" class="add ri-add-line"></i>
            </button>
        </div>
    </div>

</div>`;
})

let popular=document.querySelector(".popular");

newArr.forEach((elements)=>{
    popular.innerHTML+=` <div class="bg-white p-3 rounded-2xl flex gap-3 min-w-[260px] shadow-sm shrink-0">
                    <div class="w-20 h-20 rounded-2xl overflow-hidden shrink-0">
                        <img class="w-full h-full object-cover"
                            src="${elements.img}"
                            alt="">
                    </div>
                    <div>
                        <h1 class="font-semibold">${elements.name}</h1>
                        <p class="text-sm text-zinc-400 mt-1">${elements.about}</p>
                        <p class="mt-2 font-semibold">${elements.price}</p>
                    </div>
                </div>`
});

let cart=[];
function addToCart() {
    products.addEventListener("click",function(e) {

        if(e.target.classList.contains("add"))
        {
            cart.push(arr[e.target.dataset.index]);
            // console.log("index");
        }
    })
}

addToCart();
let cartExtend=document.querySelector(".cartextend");
let carticon=document.querySelector(".carticon");
function showcart() {
    carticon.addEventListener("click",function() {
        cartExtend.style.display="block";

        cart.forEach(function(element)
        {
            cartExtend.innerHTML+=`<div class="cartbox bg-white p-3  shadow-md flex items-center gap-3 w-64">

                    <!-- Image -->
                    <div class="w-14 h-14 rounded-lg overflow-hidden shrink-0">
                        <img
                            src="${element.img}"
                            class="w-full h-full object-cover"
                            alt=""
                        >
                    </div>

                    <!-- Details -->
                    <div class="flex-1">
                        <h4 class="font-semibold text-sm">${element.name}</h4>
                        <p class="text-sm text-zinc-500 mt-1">${element.price}</p>
                    </div>

                </div>`
        })

    })

}

showcart();
