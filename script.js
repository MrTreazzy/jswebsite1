let input = document.getElementById("input1")
let submit = document.getElementById("submit")
let tap = document.getElementById("tap")
let body = document.getElementById("body")

submit.onclick = () => {
	if (input.value == "freddy go brrr") {
		let img = document.getElementById("img")
		img.setAttribute("src", "https://c.tenor.com/ZO1_WS7f-4YAAAAC/fnaf-freddy.gif")
		tap.setAttribute("class", "tap")
		let taptext = "TAP X 10 TIMES! "
		tap.textContent = taptext
		let n = 0
		document.addEventListener('keydown', logKey);
		function logKey(e) {
			let a = `${e.key}`
			if (a == "x") {
				n = n + 1
				if (input.value == "freddy go brrr") {
					tap.textContent = taptext + n
				}
			}
			if (n == 10) {
				img.removeAttribute("src")
				img.setAttribute("alt", "Oh im sorry)")
				tap.textContent = ""
				input.value = ""
				n = 0
			}
		}
	}

	let timerstr = input.value
	let timer = Number(timerstr);
	if (timer == 666) {
		body.style.backgroundColor = "#f00"
	}
	if (timer > 0) {
		let h3timer = document.getElementById("timer")
		timer = timer - 1
		h3timer.textContent = timer
		let time = setInterval(() => {
			timer = timer - 1
			if (timer <= 0) {
				setTimeout(()=> {
					h3timer.textContent = "Time is up!"
					clearInterval(time)
					setTimeout(()=> {
						h3timer.textContent = "Enter the time..."
					}, 3000)
				}, 1000)
			}
			h3timer.textContent = timer
		}, 1000)
	}
}



// https://i.pinimg.com/originals/24/4e/f9/244ef9485d3bff636efa9f1ee5f225a3.jpg

setTimeout(()=> {
	if (input.value == "f") {
	let item2 = document.getElementById("h1").setAttribute("class", "h1script")
	}
}, 7000)

let leth1 = document.getElementById('leth1');

var letters = "шаровнездийыубцяк"
var random1 = Math.round(Math.random() * letters.length)

leth1.onclick = () => {
	leth1.textContent = ""
	for (let i = 0; i < letters.length; i++) {
		random1 = Math.round(Math.random() * letters.length)
		if (letters[random1] != undefined) {
			leth1.textContent += letters[random1]
		}
	}
}