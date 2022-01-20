window.addEventListener('keydown', function (e){
    const audio = document.querySelector(`audio[data-key="${e.key}"]`)
    console.log(audio)
})

// Need to update from deprecated language some day