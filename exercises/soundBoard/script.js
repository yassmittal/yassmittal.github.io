	// const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
	// let btn_container = document.querySelector(".btn-container")
	
	// for(let i = 0; i < sounds.length; i++){
	//   let sound = sounds[i];
	//   let buttonEl = document.createElement("btn"); // why 'btn' is created as element in this line instead of 'button'..
	//   buttonEl.classList.add("sound-btn");
	//   buttonEl.innerText = sound;
	//   btn_container.appendChild(buttonEl)
	  
	//   buttonEl.addEventListener("click", function(){
	//     stopSongs();
	//     const soundEl = document.querySelector(`.${sound}`)
	//     soundEl.play();
	//   })
	// }
	
	// first method above full working is below***************
	
	let sound_btns = document.querySelectorAll(".sound-btn")
	
	sound_btns.forEach((btn) => {
	  btn.addEventListener("click", function(){
	    stopSongs()
	    const sound = btn.innerText;
	    const soundEl = document.querySelector(`.${sound}`)
	    soundEl.play();
	  })
	})
	
	function stopSongs(){
	  sound_btns.forEach((sound_text) => {
	   const sound = sound_text.innerText
	    const soundEl = document.querySelector(`.${sound}`)
	    soundEl.pause();
	    soundEl.currentTime = 0;
	  })
	}
	
