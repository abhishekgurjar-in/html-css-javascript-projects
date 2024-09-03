const btn = document.getElementById("calculate");
const inputBill = document.getElementById("bill");
const inputTip = document.getElementById("tip");
const totalSpan = document.getElementById("total");

function calculateTotal() {
    const billValue = parseFloat(inputBill.value);
    const tipValue = parseFloat(inputTip.value);
    const totalValue = billValue * (1 + tipValue / 100);
    totalSpan.innerText = totalValue.toFixed(2);
}

btn.addEventListener("click", calculateTotal);
