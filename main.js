window.onload=function() {
	const button = document.querySelector("button")
	const audio = document.querySelector("audio") 

	function ponerPlay () {
		button.onclick = function () {
			audio.play()
		}
	} 	
	function ponerPausa () {
		button.onclick = function () {
			audio.pause()
		}
	}

	button.onclick = ponerPausa; ponerPlay;

	if (audio.pause) {
		return ponerPlay()
	} else {
		return ponerPausa()
	}
}