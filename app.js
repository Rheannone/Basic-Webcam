let canvas = document.querySelector('#canvas')
let context = canvas.getContext('2d')
let video = document.querySelector('#video')


// checks for devices
if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
//     gets permission
    navigator.mediaDevices.getUserMedia({video: true}).then(stream => {
        video.srcObject = stream;
        video.play()
    })
}

document.getElementById('capture').addEventListener('click', () => {
//     takes a screenshot from the video stream.
    context.drawImage(video, 0,0,640, 480)
})
