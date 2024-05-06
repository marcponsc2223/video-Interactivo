document.addEventListener("DOMContentLoaded", function() {
    let buttonsDiv = document.getElementById('buttonsDiv')
    let video = document.getElementById("video");
    let finalButton = document.getElementById('finalButton')
    let psicologies = 7
    for (let i = 1; i <= psicologies; i++) {
        let button = document.createElement('button')
        button.textContent = 'Psicologia ' + i
        button.classList.add('btn', 'btn-primary', 'button')
        button.id = 'button' + i
        buttonsDiv.appendChild(button)
    }

    video.addEventListener("timeupdate", function() {
        if (video.currentTime >= 60 && video.currentTime <= 61 ) { 
            buttonsDiv.style.display = "block";
            video.pause()
        } else if (video.currentTime > 140 && video.currentTime < 142 ) {
            buttonsDiv.style.display = "block";
            video.pause()
        }
        else if (video.currentTime > 181 && video.currentTime < 183 ) {
            buttonsDiv.style.display = "block";
            video.pause()
        }
        else if (video.currentTime > 219 && video.currentTime < 221 ) {
            buttonsDiv.style.display = "block";
            video.pause()
        }
        else if (video.currentTime > 243 && video.currentTime < 245 ) {
            buttonsDiv.style.display = "block";
            video.pause()
        }
        else if (video.currentTime > 267 && video.currentTime < 269 ) {
            buttonsDiv.style.display = "block";
            video.pause()
        }
        else if (video.currentTime > 275 && video.currentTime < 277 ) {
            buttonsDiv.style.display = "block";
            video.pause()
        }
        else if (video.currentTime > 291 && video.currentTime < 294 ) {
            finalButton.style.display = "block";
        }
    });


    document.addEventListener('click', function (event) {
        let target = event.target
        buttonsDiv.style.display = 'none';
        if (target.id === 'button1') video.currentTime = 62; 
        else if (target.id === 'button2') video.currentTime = 142;
        else if (target.id === 'button3') video.currentTime = 183;
        else if (target.id === 'button4') video.currentTime = 221;
        else if (target.id === 'button5') video.currentTime = 245;
        else if (target.id === 'button6') video.currentTime = 269;
        else if (target.id === 'button7') video.currentTime = 277;
        else if (target.id === 'finalButton') video.currentTime = 0
        

        video.play()
        buttonsDiv.style.display = 'none';
        finalButton.style.display = 'none'
    })

})