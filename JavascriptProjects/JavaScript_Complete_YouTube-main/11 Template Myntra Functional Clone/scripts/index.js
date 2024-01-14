let itemsContainerElement = document.querySelector(".items-container");
let searchInput = document.querySelector('[data-id="search-input"]');
let HTMLForProducts = "";

let startingProduct = 1;
let endingProduct = 4;
let isItemPresentAlready = false;
let bagItems;
onLoad();

function onLoad() {
  let bagItemsStr = localStorage.getItem("bagItems");
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];

  displayItemsOnHomePage(startingProduct, endingProduct);
  displayBagIcon();
}
// console.log(bagItems);

function addToBag(itemId) {
  // console.log(itemId)
  bagItems.forEach((bagItemId) => {
    if (bagItemId === itemId) return true;
    return false;
  });

  console.log(isItemPresentAlready);

  if (isItemPresentAlready) {
    IncreaseQuantity(itemId);
  } else {
    bagItems.push(itemId);
    localStorage.setItem("bagItems", JSON.stringify(bagItems));
    displayBagIcon();
  }
}

function displayBagIcon() {
  let bagItemsCountElement = document.querySelector(".bag-item-count");
  if (bagItems.length > 0) {
    bagItemsCountElement.style.visibility = "visible";
    bagItemsCountElement.textContent = bagItems.length;
  } else {
    bagItemsCountElement.style.visibility = "hidden";
  }
}

function displayItemsOnHomePage(startingProduct, endingProduct) {
  if (!itemsContainerElement) return;

  for (let i = startingProduct - 1; i < endingProduct; i++) {
    HTMLForProducts += `
      <div class="item-container">
        <img src="${items[i].image}" alt="item image"  class="item-image"/>
        <div class="rating">${items[i].rating.stars}⭐ | ${items[i].rating.count}</div>
      
        <div class="company-name">${items[i].company}</div>
      
        <div classs="item-name">${items[i].item_name}</div>
      
        <div class="price">
          <span class="current-price"> Rs ${items[i].current_price} </span>
          <span class="original-price"> Rs ${items[i].original_price} </span>
          <span class="discount">(${items[i].discount_percentage}% off)</span>
        </div>
      
        <button class="btn-add-bag" onclick="addToBag(${items[i].id})">Add to Bag</button>
      </div>`;
  }
  itemsContainerElement.innerHTML = HTMLForProducts;
}

function IncreaseQuantity(Id) {
  const Item = bagItems.filter((itemId) => {
    // console.log(itemId);
    // console.log(Id);
    return itemId !== Id;
  });

  // console.log(Item);
  // console.log("is");
}

function searchProduct(searchText) {
  let resultHTML = "";
  items.forEach((item) => {
    if (
      item.item_name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.company.toLowerCase().includes(searchText.toLowerCase()) ||
      String(item.original_price).includes(searchText) ||
      String(item.current_price).includes(searchText)
    ) {
      return (resultHTML += `
      <div class="item-container">
        <img src="${item.image}" alt="item image"  class="item-image"/>
        <div class="rating">${item.rating.stars}⭐ | ${item.rating.count}</div>
      
        <div class="company-name">${item.company}</div>
      
        <div classs="item-name">${item.item_name}</div>
      
        <div class="price">
          <span class="current-price"> Rs ${item.current_price} </span>
          <span class="original-price"> Rs ${item.original_price} </span>
          <span class="discount">(${item.discount_percentage}% off)</span>
        </div>
      
        <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
      </div>`);
    }
  });

  itemsContainerElement.innerHTML = resultHTML;
}

if (itemsContainerElement) {
  searchInput.addEventListener("change", (e) => {
    searchProduct(searchInput.value);
  });
}

function addMoreProductsTODom() {
  if (endingProduct >= items.length || startingProduct >= items.length) {
  } else {
    startingProduct += 4;
    endingProduct += 4;
    displayItemsOnHomePage(startingProduct, endingProduct);
  }
}

window.addEventListener("scroll", () => {
  if (
    window.scrollY + window.innerHeight + 100 >=
    document.documentElement.scrollHeight
  ) {
    addMoreProductsTODom();
  }
});
