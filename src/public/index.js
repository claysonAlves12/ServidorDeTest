var elementosVideosTutoriais = document.querySelectorAll('.tutoriais');

elementosVideosTutoriais.forEach(function(tutoriais) {
    tutoriais.addEventListener('click', function() {
        tutoriais.classList.toggle('active');
    });
});


var videoIframes = document.querySelectorAll('.videoIframe');

videoIframes.forEach(function(videoIframe) {
    videoIframe.addEventListener('play', function() {
        if (window.innerWidth <= 768) {
            if (videoIframe.requestFullscreen) {
                videoIframe.requestFullscreen();
            } else if (videoIframe.mozRequestFullScreen) { 
                videoIframe.mozRequestFullScreen();
            } else if (videoIframe.webkitRequestFullscreen) { 
                videoIframe.webkitRequestFullscreen();
            } else if (videoIframe.msRequestFullscreen) {
                videoIframe.msRequestFullscreen();
            }
        }
    });
});
