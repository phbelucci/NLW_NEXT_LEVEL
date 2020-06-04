console.log("ok")

const buttonSearch = document.querySelector("#page-home main a")
const modal = document.querySelector("#modal")
const close = document.querySelector("#modal .header a")

buttonSearch.addEventListener("click", () => {
    /*remove class do elemento*/
    modal.classList.remove("hide")
})

close.addEventListener("click", () => {
    /*adiciona class ao elemento*/
    modal.classList.add("hide")
})