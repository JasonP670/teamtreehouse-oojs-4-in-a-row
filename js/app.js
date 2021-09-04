const btn = document.getElementById('begin-game')
const game = new Game();


btn.addEventListener('click', (e) => {
    game.startGame();
    e.target.style.display = 'none';
    document.getElementById('play-area').style.opacity = '1';
});

document.addEventListener('keydown', (event) => {
    game.handleKeydown(event);
})