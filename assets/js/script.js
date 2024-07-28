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
    }, duration * 5000); // Adjust the time duration as needed (5000 milliseconds = 5 seconds)
});
let displayLoginButton = document.getElementById('logins'); // Assuming this is your button ID
let loginForm = document.getElementById('login-container');

displayLoginButton.addEventListener('click', (event) => {
    if (loginForm.classList.contains('show')) {
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

 
    // var myCarousel = document.querySelector('#carouselExampleIndicators');
    //     var carousel = new bootstrap.Carousel(myCarousel, {
    //         interval: 2000, // Adjust the interval as needed
    //         ride: 'carousel'
    //     });

    document.getElementById('loginCheckbox').addEventListener('change', function() {
        var loginForm = document.getElementById('loginForm');
        var registerCheckbox = document.getElementById('registerCheckbox');
        var registerForm = document.getElementById('registerForm');
    
        if (this.checked) {
            loginForm.style.display = 'block';
            registerCheckbox.checked = false;
            registerForm.style.display = 'none';
        } else {
            loginForm.style.display = 'none';
            // alert('Login form display done');
        }
    });
    
    document.getElementById('registerCheckbox').addEventListener('change', function() {
        var loginCheckbox = document.getElementById('loginCheckbox');
        var loginForm = document.getElementById('loginForm');
        var registerForm = document.getElementById('registerForm');
    
        if (this.checked) {
            registerForm.style.display = 'block';
            loginCheckbox.checked = false;
            loginForm.style.display = 'none';
        } else {
            registerForm.style.display = 'none';
        }
    });
    var closeIcons = document.getElementsByClassName('close-icon');
for (var i = 0; i < closeIcons.length; i++) {
    closeIcons[i].addEventListener('click', function() {
        this.parentElement.style.display = 'none';
        document.getElementById('loginCheckbox').checked = false;
        document.getElementById('registerCheckbox').checked = false;
    });
}