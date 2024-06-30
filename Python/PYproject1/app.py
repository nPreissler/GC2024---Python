import os

# restaurantes = ['Pizzaria', 'Churrascaria']
restaurantes = [
    {'nome': 'Pizzaria', 'origem': 'italiana', 'status': False},
    {'nome': 'Churrascaria', 'origem': 'Alemã', 'status': True},
    {'nome': 'Sushi', 'origem': 'Japonês', 'status': False}
]


def exibir_nome_do_programa():
    '''
    Returns name of app
    '''
    print('Sabor Express\n')


def exibir_opcoes():
    '''
    Returns all options for user
    '''
    print('1. Cadastrar restaurante')
    print('2. Listar restaurante')
    print('3. Alterar status do restaurante')
    print('4. Sair\n')


def finalizar_app():
    '''
    Close app
    '''
    exibir_subtitulo('Finalizando app')


def voltar():
    '''
    This function returns to main menu if you click any button
    '''
    input('\nDigite uma tecla para voltar ao menu principal: ')
    main()


def opcao_invalida():
    '''
    This function returns "Opção inválida" if code will break
    '''
    print('Opção inválida\n')
    voltar()


def exibir_subtitulo(texto):
    '''
    This function returns a subtitle with text will be passed in () during your use
    
    Output
    - *****
    - recived text
    - *****
    '''
    os.system('cls')
    linha = '*' * (len(texto) + 4)
    print(linha)
    print(texto)
    print(linha)
    print()


def cadastrar_novo_restaurante():
    '''Essa função é responsável por cadastrar um novo restaurante
    
    Inputs
    -Nome da categoria
    -categoria
    
    Outputs
    -adiciona um novo restaurante a lista de restaurantes
        
    '''
    exibir_subtitulo('Cadastre um novo restaurante')
    nome_do_restaurante = input(
        'Digite o nome do restaurante que vai cadastrar: ')
    origem = input(f'Digite o nome da origem do restaurante { nome_do_restaurante}: ')
    dados_do_restaurante = {'nome': nome_do_restaurante, 'origem': origem, 'status': False}
    restaurantes.append(dados_do_restaurante)
    print(f'Restaurante {nome_do_restaurante} cadastrado com sucesso')
    voltar()


def listar_restaurantes():
    '''
    This function is used for show all restaurants are signed in app
    
    Args: get 'nome', 'origem' and 'status' from restaurantes dicionary
    
    '''
    exibir_subtitulo('Listando restaurantes cadastrados')
    print(f'{'Nome do restaurante'.ljust(22)} | {'Categoria'.ljust(20)} | Status')
    for restaurante in restaurantes:
        nome_restaurante = restaurante['nome']
        origem = restaurante['origem']
        status = 'ativado' if restaurante['status'] else 'desativado'
        print(f'- {nome_restaurante.ljust(20)} | {origem.ljust(20)} | {status}')
    voltar()
    
def alternar_estado_do_restaurante():
    '''
    This function enable or disable activity of an restaurant
    
     Inputs
     - get text and search restaurant with name is entered
     
     Outputs
     - enable or disable restaurant is referent of input text
     
    '''
    exibir_subtitulo('Alterando status do restaurante')
    nome_restaurante = input('Digite o nome do restaurante que deseja ativar ou desativar: ')
    restaurante_encontrado = False
    for restaurante in restaurantes:
        if nome_restaurante == restaurante['nome']:
            restaurante_encontrado = True
            restaurante['status'] = not restaurante['status']
            mensagem = f'o restaurante {nome_restaurante} foi ativado com sucesso' if restaurante['status'] else f'o restaurante {nome_restaurante} foi desativado com sucesso'
            print(mensagem)
            
    if not restaurante_encontrado:
        print('O restaurante não foi encontrado')
    voltar()


def escolher_opcao():
    '''
    execute codig block is referent a number option is entered
    '''
    try:
        opcao_escolhida = int(input('Escolha uma opção: '))

        if opcao_escolhida == 1:
            cadastrar_novo_restaurante()
        elif opcao_escolhida == 2:
            listar_restaurantes()
        elif opcao_escolhida == 3:
            alternar_estado_do_restaurante()
        elif opcao_escolhida == 4:
            finalizar_app()
        else:
            opcao_invalida()
    except:
        opcao_invalida()


def main():
    '''
    This function is a predefinition of initial menu
    '''
    os.system('cls')
    exibir_nome_do_programa()
    exibir_opcoes()
    escolher_opcao()


if __name__ == '__main__':
    main()