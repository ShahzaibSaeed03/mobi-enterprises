document.getElementById('full-screen').addEventListener('click', function() {
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) { // Firefox
        document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari, Opera
        document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
        document.documentElement.msRequestFullscreen();
    }
});

document.addEventListener('fullscreenchange', function() {
    if (!document.fullscreenElement) {
        console.log("Exited full screen mode.");
    }
});
document.addEventListener('DOMContentLoaded', function () {
    var video = document.querySelector('.video');
    var otherContent = document.getElementById('otherContent');
    let duration = 1;

    // Play video for 5 seconds
    video.play();
    setTimeout(function () {
        // Hide video and show other content
        video.style.display = 'none';
        otherContent.style.display = 'block';
    }, duration * 1000); // Adjust the time duration as needed (5000 milliseconds = 5 seconds)
});


let displayLoginButton = document.getElementById('login');
let loginForm = document.getElementsByClassName('login-container')[0]; // Get the first element with the class 'login-container'

displayLoginButton.addEventListener('click', (event) =>{ if (loginForm.classList.contains('show')) {
    loginForm.classList.remove('show');
    setTimeout(() => {
        loginForm.style.display = 'none';
    }, 100); // Match this delay with the transition duration
} else {
    loginForm.style.display = 'block';
    setTimeout(() => {
        loginForm.classList.add('show');
    }, 100); // Slight delay to ensure display is set before adding class
}
});
 



