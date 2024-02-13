let change = document.querySelector("button"),
    color = document.querySelector("input"),
    body = document.querySelector("body")

change.addEventListener("click", function(){
    body.style.backgroundColor = color.value
})

