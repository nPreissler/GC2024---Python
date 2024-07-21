def show_menu():
    products = []
    while True :
        print('')
        print('1. Add Product\n')
        print('2. Delete Product\n')
        print('3. Search Products\n')
        print('S. Exit\n')
        opt_selected = input('Select your option: ')
        
        if opt_selected == 'S' or opt_selected == 's':
            print('Shutting down...')
            break
        
        if opt_selected == '1':
            add_product = input('Add a new product: ')
            products.append(add_product)
            for product in products: 
                print(product)
                
        if opt_selected == '2':
            print(f'{products}\n')
            delete_product = input('Enter the product you want delete here: ')
            products.remove(delete_product)
            print(f'product deleted with sucess:\n {products}')
            
        if opt_selected == '3':
            searched_product = input('Search for a product: ')
            if searched_product in products:
                print(f'- {searched_product} was found in products')
            else:
                print(f'- {searched_product} was not found in products')
                
show_menu()
            