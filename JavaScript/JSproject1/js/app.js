function alterarStatus(num) {
    let selectedGame = document.getElementById('game-' + num)
    let rentedImg = selectedGame.querySelector('.dashboard__item__img');
    let btn = selectedGame.querySelector('.dashboard__item__button');
    if (btn.classList.contains('dashboard__item__button--return')){
        btn.classList.remove('dashboard__item__button--return');
        btn.textContent = 'Alugar';
        rentedImg.classList.remove('dashboard__item__img--rented');
    } else {
        btn.classList.add('dashboard__item__button--return');
        btn.textContent = 'Devolver';
        rentedImg.classList.add('dashboard__item__img--rented');
    }
}