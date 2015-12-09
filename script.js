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
	if (+slider.value === 10) {
		[8, 9, 7, 10, 8, 9, 7, 10].reduce(function (p, c) {
			return p.then(function () {
				return new Promise(function (resolve) {
					setTimeout(function () {
						slider.value = c
						resolve()
					}, 250)
				})
			})
		}, Promise.resolve())
	}
})
