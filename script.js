document.getElementById('text').addEventListener('click', text)
document.getElementById('image').addEventListener('click', image)
document.getElementById('hide').addEventListener('click', hide)
document.getElementById('show').addEventListener('click', show)
document.getElementById('background').addEventListener('click', background)

function text () {
  document.getElementById('paragraph').innerHTML= "You changed the text!"
}

function image () {
  document.getElementById('dog').src="Images/cat.jpeg"
}

function hide () {
  document.getElementById('paragraph').style.display= "none"
}

function show () {
  document.getElementById('paragraph').style.display="block"
}

function background () {
  document.body.style.backgroundColor= "HoneyDew"
}
