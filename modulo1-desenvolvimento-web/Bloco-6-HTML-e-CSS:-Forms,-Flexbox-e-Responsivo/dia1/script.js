document.getElementById("submit").addEventListener("click", function prevent(event) {
    event.preventDefault()
})

document.getElementById("limpar").addEventListener("click", function limpar() {
    for (let element of document.querySelectorAll(".input")) {
        element.value = ""
    }
})