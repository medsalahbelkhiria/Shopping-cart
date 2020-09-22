// Like button
const btn = document.querySelectorAll(".heart");
btn.forEach(function (btn) {
    btn.addEventListener("click", function (event) {

        if (btn.classList.contains("far")) {
            btn.classList.remove("far");
            btn.classList.add("fas");

        } else {
            btn.classList.remove("fas");
            btn.classList.add("far");
        }
    })
})
// End of like button


// Delete button
const deleteButtons = document.querySelectorAll(".cart-item-remove")
const products = document.querySelectorAll(".product")
deleteButtons.forEach((btn, i) => {
    btn.addEventListener("click", function (event) {
        let unitPrice = parseInt(prices[i].innerHTML)
        let quantity = parseInt(plusB[i].previousElementSibling.value)
        total.innerHTML = parseInt(total.innerHTML) - unitPrice * quantity
        products[i].remove()
    })
})
// End of delete button


// Total 
var total = document.querySelector(".total-amount")
// Plus minus buttons

var unit = 0;
// Plus button
var prices = document.querySelectorAll(".price")
const plusB = document.querySelectorAll('.plus')
Array.from(plusB).forEach((boutton, i) => {
    boutton.addEventListener("click", () => {
        boutton.previousElementSibling.value = parseInt(boutton.previousElementSibling.value) + 1
        var price = prices[i]
        total.innerHTML = parseInt(total.innerHTML) + parseInt(price.innerHTML)
    })
});
// End of plus button



// Minus button
const minusB = document.querySelectorAll('.minus')
Array.from(minusB).forEach((bouton, i) => {

    bouton.addEventListener("click", () => {
        if (bouton.nextElementSibling.value > 0) {
            bouton.nextElementSibling.value = parseInt(bouton.nextElementSibling.value) - 1
            var price = prices[i]
            total.innerHTML = parseInt(total.innerHTML) - parseInt(price.innerHTML)
        }
    })
});

// End of minus button

// End of plus minus buttons
// End of total