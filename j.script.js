document.addEventListener("DOMContentLoaded", function () {
    const triggerElement = document.querySelectorAll('.trigger');
    const mediaElement = document.querySelector('#media');
 
    triggerElement.forEach(trigger =>{
    trigger.addEventListener('click', function () {
      if (mediaElement.paused) {
        mediaElement.play();
      } else {
        mediaElement.pause();
      }
      //optionel, desactive le detecteur après usage
      triggerElement.classList.remove('play-trigger');
    });
});
});