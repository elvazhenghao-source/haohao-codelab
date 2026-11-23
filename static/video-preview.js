(function () {
  'use strict';

  document.querySelectorAll('.video-preview').forEach(function (preview) {
    var video = preview.querySelector('video');
    var playButton = preview.querySelector('.video-play-button');
    var fullscreenButton = preview.querySelector('.video-fullscreen-button');

    if (!video || !playButton || !fullscreenButton) return;

    function toggleVideo() {
      if (video.paused) {
        preview.classList.add('is-playing');
        playButton.setAttribute('aria-label', 'Pause project video');
        video.play().catch(function () {
          preview.classList.remove('is-playing');
        });
      } else {
        video.pause();
        playButton.setAttribute('aria-label', 'Play project video');
      }
    }

    function resetPreview() {
      video.pause();
      video.currentTime = 0;
      preview.classList.remove('is-playing');
      playButton.setAttribute('aria-label', 'Play project video');
    }

    playButton.addEventListener('click', toggleVideo);
    video.addEventListener('ended', resetPreview);

    fullscreenButton.addEventListener('click', function () {
      if (preview.requestFullscreen) {
        preview.requestFullscreen();
      } else if (video.webkitEnterFullscreen) {
        video.webkitEnterFullscreen();
      }
    });
  });
}());
