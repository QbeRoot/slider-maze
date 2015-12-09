var select = document.getElementById('level'),
	slider = document.getElementById('slider'),
	levels = [
	function (x) { return x },
	function (x) { return x + 1 },
	function (x) { return 11 - x }
]

for (var i = 0, l = levels.length; i < l; ++i) {
	var option = document.createElement('option')
	option.setAttribute('value', i)
	option.appendChild(document.createTextNode(i))
	select.appendChild(option)
}

select.addEventListener('change', function () {
	slider.value = 0
})

slider.addEventListener('change', function () {
	slider.value = levels[select.value](+slider.value)
})
