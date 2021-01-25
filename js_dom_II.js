//törles
div.remove()

//elem letrehozas

let h2El = document.createElement("h2")
h2El.textContent="Hello world"
document.body.append(h2El)
div.append(h2El) // A div vegehez adja hozza az elemet
div.prepend(h2El)  //A div elejere adja hozza az elemet
div.prepend(h2El)  //A div elejere adja hozza az elemet (csak egyszer fog kiirodni, efy for ciklusba kell meghivni ha tobbszor szeretnenk kiiratni)

//event bubbling
event.stopPropagation() //megszunteti a bubbles effektust
event.preventDefault() //megszunteti a beepitett clikk esemenyt pl egy linknel