setTimeout(function(){
	document.body.classList.add('body_visible');
}, 500);

// 3D Scroll

let zSpacing = -1500,
    lastPos = zSpacing / 5,
    $frames = document.getElementsByClassName('frame'),
    frames = Array.from($frames),
    zVals = []



window.onscroll = function () {

    let top = document.documentElement.scrollTop,
        delta = lastPos - top

    lastPos = top

    frames.forEach(function (n, i) {
        zVals.push((i * zSpacing) + zSpacing)
        zVals[i] += delta * -2
        let frame = frames[i],
            transform = `translateZ(${zVals[i]}px)`,
            opacity = zVals[i] < Math.abs(zSpacing) / 2 ? 1 : 0
        frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
    })

}    

window.scrollTo(0, 10)

// Audio

let soundButton = document.querySelector('.soundbutton'),
    audio = document.querySelector('.audio')

    soundButton.addEventListener('click', e => {
        soundButton.classList.toggle('paused')
        audio.paused ? audio.play() : audio.pause ()
    })

    window.onblur = function () {
        audio.pause ()
        // soundButton.classList.toggle('paused')
    }
    
