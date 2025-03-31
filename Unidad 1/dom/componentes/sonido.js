const sound = new Audio('click.mp3');
const playButton = document.querySelector('.btnCreate');
 
playButton.addEventListener('click', () => {
sound.play();
});
export default sonido