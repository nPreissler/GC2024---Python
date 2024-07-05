import random

Título = 'Pedra, Papel e Tesoura'

pedra_papel_tesoura = ['Pedra','Papel','Tesoura']
maquina = random.choice(pedra_papel_tesoura)
print(maquina)
print('Escolha sua opção')
print('1. Pedra')
print('2. Papel')
print('3. Tesoura')

player = int(input('Digite sua opção: '))
player = pedra_papel_tesoura[player - 1]

vitoria = {
    'Pedra':'Tesoura',
    'Tesoura':'Papel',
    'Papel':'Pedra'
}

vitoria.get('Pedra')

if player == maquina:
    print('Empate')
elif vitoria[player] == maquina:
    print('Você venceu')
else: 
    print('Você Perdeu')
    
    print(f'{player} vs {maquina}')
