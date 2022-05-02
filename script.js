const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const nameInput = document.getElementById('name')
const Download = document.getElementById('Download')

const image = new Image()
image.src = 'certificate.jpg'
image.onload = function () {
	drawImage()
}

function drawImage() {
	// ctx.clearRect(0, 0, canvas.width, canvas.height)
	ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
	ctx.font = '40px TheSans'
	ctx.fillStyle = '#ffffff'
	ctx.fillText(nameInput.value, 330, 500)
}

nameInput.addEventListener('input', function () {
	drawImage()
})

Download.addEventListener('click', function () {
	Download.href = canvas.toDataURL('image/jpg')
	Download.download = 'معايدة نادي الفضل بالفضول - ' + nameInput.value
})