let list = []

function adicionar() {
    let friendName = document.getElementById('nome-amigo').value;
    if (friendName == '') {
        alert('O campo "nome" não pode ser vazio');
        return;
    }
    if(list.includes(friendName)){
        alert('Esse nome já foi adicionado');
        return;
    }
    let listOfFriends = document.getElementById('lista-amigos');
    listOfFriends.textContent = friendName + ',' + list
    list.push(friendName);
    document.getElementById('nome-amigo').value = '';
}

function sortear() {
    if(list.length < 4){
        alert('O sorteio só funciona a partir de 4 pessoas');
        return;
    }
    for (let i = list.length - 1; i > 0; i--) {
        const randomNumber = Math.floor(Math.random() * (i + 1));
        const temporaryName = list[i];
        list[i] = list[randomNumber];
        list[randomNumber] = temporaryName;
    }
    let sortedList = document.getElementById('lista-sorteio');
    console.log(list);

    for (let i = 0; i < list.length; i++) {
        if (i == list.length - 1) {
            sortedList.innerHTML = sortedList.innerHTML + list[i] + '-->' + list[0] + '<br>'
        } else {
            sortedList.innerHTML = sortedList.innerHTML + list[i] + '-->' + list[i + 1] + '<br>'
        }
    }
}


function reiniciar() {
    window.location.reload();
}