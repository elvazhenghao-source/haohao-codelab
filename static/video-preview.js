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
      if (document.fullscreenElement === preview || document.webkitFullscreenElement === preview) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        }
      } else if (preview.requestFullscreen) {
        preview.requestFullscreen();
      } else if (video.webkitEnterFullscreen) {
        video.webkitEnterFullscreen();
      }
    });
  });

  document.querySelectorAll('.trial-card-link').forEach(function (card) {
    function openForm() {
      window.open(card.getAttribute('data-form-url'), '_blank', 'noopener');
    }

    card.addEventListener('click', function (event) {
      if (event.target.closest('a')) return;
      openForm();
    });
    card.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openForm();
      }
    });
  });
}());
