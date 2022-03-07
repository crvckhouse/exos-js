
// Exercice 1

function footerClick () {
  footer = document.querySelector("footer")
  i = 1
  footer.addEventListener("click", function() {
		console.log(`clique n° ` + i)
		i++
})
}

footerClick()

// Exercice 2


function hamburgerMenu() {
	nav = document.getElementById("navbarHeader")
	hambuger = document.querySelector("button", ".navbar-toggler")
	hambuger.addEventListener("click", function () {
		nav.classList.toggle("collapse")
	})
}
hamburgerMenu()

// Exercice 3


function redText() {
	editCardButtonOne = document.querySelectorAll(".btn-outline-secondary")[0]
	textCardOne = document.querySelectorAll(".card-text")[0]
	editCardButtonOne.addEventListener("click", function() {
		textCardOne.style.color = "red"
	})
}

redText()

// Exercice 4
function greenText() {
	editCardButtonOne1 = document.querySelectorAll(".btn-outline-secondary")[1]
	textCardOne1 = document.querySelectorAll(".card-text")[1]
	editCardButtonOne1.addEventListener("click", function() {
		textCardOne1.style.color = "green"
	})
}
greenText()


function nuclearPage() {
	navbar = document.querySelector("header")
	bootstrap = document.querySelector("head").querySelector("link")
	i = 1
	navbar.addEventListener("dblclick", function () {
		i++
		if( i % 2 == 0) {
			bootstrap.setAttribute("href", "#")
		} else {
			bootstrap.setAttribute("href", "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css")
		}
	})
}

nuclearPage()
