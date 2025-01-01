const video = document.querySelector(".tr");

const img = document.querySelector(".play");

img.addEventListener('click', () => {
    video.play();
    img.style.display = "none";
    video.controls = true;

});


const playButton = document.querySelector('.play img');
const omnivideo = document.querySelector('.omnivdo video');

playButton.addEventListener('click', () => {
    omnivideo.play(); 
    omnivideo.controls = true; 
    playButton.style.display = 'none'; 
});
