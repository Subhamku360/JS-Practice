const productsData = [
  {
    name: "Golden Chair",
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=958&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    about: "A cool Sofa Chair",
    price: "$1200",
  },
  {
    name: "Wodden Chair",
    img: "https://plus.unsplash.com/premium_photo-1704686580555-6f31384f756a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    about: "An old wooden Chair",
    price: "$600",
  },
  {
    name: "Soffa",
    img: "https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?q=80&w=1206&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    about: "A Blue House Sofa",
    price: "$1000",
  },
];

const popularData = [...productsData];
const cart = [];

const productsContainer = document.querySelector(".products");
const popularsContainer = document.querySelector(".populars");
const cartContainer = document.querySelector(".cartexpnd");
const cartIcon = document.querySelector(".carticon");

function renderProducts() {
  if (!productsContainer) return;

  productsContainer.innerHTML = productsData
    .map(
      (item, index) => `
        <div class="product w-fit rounded-xl p-2 bg-white">
          <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
            <img src="${item.img}" alt="${item.name}">
          </div>
          <div class="data w-full px-2 py-5">
            <h1 class="font-semibold text-xl leading-none tracking-tight">${item.name}</h1>
            <div class="flex justify-between w-full items-center mt-2">
              <div class="w-1/2">
                <h3 class="font-semibold opacity-20">${item.about}</h3>
                <h4 class="font-semibold mt-2">${item.price}</h4>
              </div>
              <button data-add-to-cart="${index}" class="w-10 h-10 rounded-full bg-[#4A4563] text-yellow-400" aria-label="Add ${item.name} to cart">
                <i class="ri-add-line"></i>
              </button>
            </div>
          </div>
        </div>`
    )
    .join("");
}

function renderPopulars() {
  if (!popularsContainer) return;

  popularsContainer.innerHTML = popularData
    .map(
      (item) => `
        <div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[250px] flex-shrink-0">
          <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
            <img class="w-full h-full object-cover" src="${item.img}" alt="${item.name}">
          </div>
          <div class="data py-2 w-full">
            <h1 class="leading-none font-semibold">${item.name}</h1>
            <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${item.about}</h4>
            <h4 class="mt-3 font-semibold text-zinc-500">${item.price}</h4>
          </div>
        </div>`
    )
    .join("");
}

function renderCart() {
  if (!cartContainer) return;

  if (cart.length === 0) {
    cartContainer.innerHTML =
      '<p class="px-3 py-2 text-sm text-zinc-500">Cart is empty</p>';
    return;
  }

  cartContainer.innerHTML = cart
    .map(
      (item) => `
        <div class="flex items-center justify-between px-3 py-2 border-b border-zinc-200 last:border-b-0">
          <p class="text-sm font-medium">${item.name}</p>
          <p class="text-sm text-zinc-500">${item.price}</p>
        </div>`
    )
    .join("");
}

if (productsContainer) {
  productsContainer.addEventListener("click", (event) => {
    const addButton = event.target.closest("[data-add-to-cart]");
    if (!addButton) return;

    const index = Number(addButton.dataset.addToCart);
    const item = productsData[index];
    if (!item) return;

    cart.push(item);
    renderCart();
  });
}

if (cartIcon && cartContainer) {
  cartIcon.addEventListener("click", () => {
    cartContainer.classList.toggle("hidden");
  });
}

renderProducts();
renderPopulars();
renderCart();
