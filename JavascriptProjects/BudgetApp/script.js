const setBudgetBtn = document.querySelector("#total-amount-button");
const totalAmountInput = document.querySelector("#total-amount");

const productTitleInput = document.querySelector("#product-title");
const productCostInput = document.querySelector("#user-amount");

const totalAmountEl = document.querySelector("#amount");
const totalExpenditureEl = document.querySelector("#expenditure-value");
const balanceAmountEl = document.querySelector("#balance-amount");

const budgetError = document.querySelector("#budget-error");
const productTitleErr = document.querySelector("#product-title-error");

const checkAmountBtn = document.querySelector("#check-amount");
const listWrap = document.querySelector("#list");

let totalExpense = 0;
let balanceAmount = 0;

let editing = false;

let editinItemId;

let expenseList = JSON.parse(localStorage.getItem("expenseListArr"))
  ? JSON.parse(localStorage.getItem("expenseListArr"))
  : [];

let totalAmount = JSON.parse(localStorage.getItem("totalBudget"))
  ? JSON.parse(localStorage.getItem("totalBudget"))
  : 0;
totalAmountEl.textContent = totalAmount;

console.log(expenseList);

expenseList.forEach((item) => {
  listWrap.appendChild(
    renderListHTML(item.productName, item.productPrice, item.id)
  );
});

setFinalBudget();

setBudgetBtn.addEventListener("click", (e) => {
  e.preventDefault();
  setBudget();
});

// console.log(JSON.parse(localStorage.getItem("expenseListArr")));

checkAmountBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (editing) {
    changeCurrentListItem(editinItemId);
  } else {
    setExpenseList(productTitleInput.value, productCostInput.value);
    console.log(totalExpense);
  }
});

function setBudget() {
  if (totalAmountInput.value && totalAmountInput.value > 0) {
    totalAmountEl.textContent = totalAmountInput.value;
    removeHideIfPresent(budgetError);
    totalAmount = parseInt(totalAmountInput.value);
    localStorage.setItem("totalBudget", totalAmount);
    setFinalBudget();
  } else {
    budgetError.classList.remove("hide");
  }
}

function removeHideIfPresent(element) {
  if (!element.classList.contains("hide")) {
    element.classList.add("hide");
  }
}

function setFinalBudget() {
  totalExpense = 0;
  expenseList.forEach((item) => {
    totalExpense += parseInt(item.productPrice);
  });

  balanceAmount = totalAmount - totalExpense;

  totalExpenditureEl.textContent = totalExpense;
  balanceAmountEl.textContent = balanceAmount;
}

function setExpenseList(productTitle, productCost) {
  if (expenseListVaidation(productTitle, productCost) == false) return;

  const id = Date.now();
  let listItem = renderListHTML(productTitle, productCost, id);

  listWrap.appendChild(listItem);
  fillExpenseListArr(productTitle, productCost, id);
  setFinalBudget();
  clearExpenseInputs();
}

function renderListHTML(productTitle, productCost, id) {
  const listItem = document.createElement("div");

  const deleteBtn = document.createElement("button");
  deleteBtn.addEventListener("click", (e) => {
    e.preventDefault();
    deleteListItem(id);
  });
  deleteBtn.textContent = "delete";

  const editBtn = document.createElement("button");
  editBtn.textContent = "edit";

  editBtn.addEventListener("click", (e) => {
    e.preventDefault();

    editListItem(id);
  });

  listItem.textContent = `product Title: ${productTitle} , Product Cost : ${productCost}, Id: ${id}`;

  listItem.append(deleteBtn, editBtn);
  return listItem;
}

function fillExpenseListArr(productTitle, productCost, id) {
  expenseList.push({
    productName: productTitle,
    productPrice: productCost,
    id: id,
  });
  localStorage.setItem("expenseListArr", JSON.stringify(expenseList));
}

function clearExpenseInputs() {
  productTitleInput.value = "";
  productCostInput.value = "";
}

function expenseListVaidation(productTitle, productCost) {
  if (
    productTitle != null &&
    productCost >= 0 &&
    productCost != null &&
    productCost != "" &&
    productTitle != ""
  ) {
    removeHideIfPresent(productTitleErr);
    return true;
  } else {
    productTitleErr.classList.remove("hide");
    return false;
  }
}

function deleteListItem(itemId) {
  // console.log(expenseList)
  expenseList = expenseList.filter((item) => {
    return item.id != itemId;
  });

  localStorage.setItem("expenseListArr", JSON.stringify(expenseList));

  console.log(expenseList);
  listWrap.textContent = "";

  expenseList.forEach((item) => {
    listWrap.append(
      renderListHTML(item.productName, item.productPrice, item.id)
    );
  });

  setFinalBudget();
}

function editListItem(id) {
  console.log(id);

  const editItem = expenseList.find((item) => {
    return item.id === id;
  });

  productTitleInput.value = editItem.productName;
  productCostInput.value = editItem.productPrice;

  editing = true;
  editinItemId = id;
}

function changeCurrentListItem(id) {
  const editItem = expenseList.find((item) => {
    return item.id === id;
  });

  editItem.productName = productTitleInput.value;
  editItem.productPrice = productCostInput.value;

  localStorage.setItem("expenseListArr", JSON.stringify(expenseList));
  listWrap.textContent = "";

  expenseList.forEach((item) => {
    listWrap.append(
      renderListHTML(item.productName, item.productPrice, item.id)
    );
  });

  setFinalBudget();
}
