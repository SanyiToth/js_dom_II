//2
let todoArray = ["takaritas", "kutyaseta", "vaccsora", "zuhanyzas", "programozni", "felkelni", "tvzni", "lefekudni", "kocsimosas"]
let ulEl = document.createElement("Ul")
document.body.prepend(ulEl)*/



todoArray.forEach(listItem => {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(listItem));
    ulEl.appendChild(li);
})

//3
ulEl.addEventListener("dblclick", event => {
    if (event.target.nodeName === "LI") {
        if (window.confirm("Are you sure?")) {
            event.target.remove()
        }
    }
})


//4
let elBtn = document.querySelector("button")

elBtn.addEventListener("click", function () {
        let newText = window.prompt("Add a new Todo to your List")
        let newLi = document.createElement("li")
        newLi.textContent = newText
        ulEl.prepend(newLi)
    }
)

//5

ulEl.addEventListener("click", event => {
    if (event.target.nodeName === "LI") {
        event.target.style.textDecoration = "line-through"
    }
})

//6


ulEl.addEventListener("click", event => {
    if (event.shiftKey) {

        event.target.remove()
    }
})

