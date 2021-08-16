# Projeto crudDev

Desenvolvido em Laravel, React e Mysql.
O sistema apresenta as funções Criar/Editar/Excluir/Listar Desenvolvedores.

Seguem os atributos da tabela:

## - DESENVOLVEDOR:
1. Nome;
2. Sexo;
3. Idade;
4. Data de Nascimento;
5. Hobbie;

## Configuração do projeto para execução
 
### DOCKER
O projeto utiliza Docker e Docker Compose para criação do ambiente de desenvolvimento.

### Build e execução dos containers Docker
Observação: A configuração do docker-compose.yml foi configurado para ser executado 
em uma máquina linux.

Para construir a imagem do app
```docker-compose build app```

Para iniciar os containers do app
```docker-compose up -d```

### Para ver os containers rodando
```docker ps```

### Para instalar as dependências do composer
```docker exec -it crud-dev-app composer install```

### Definir chave do app
```docker exec -it crud-dev-app php artisan key:generate```

### Para construir o banco de dados
```docker exec -it crud-dev-app php artisan migrate```

### Acessar projeto pelo Browser
```localhost:8080```

#### Para executar o Teste;
Para executar o teste, execute o comando ```docker exec -it crud-dev-app php ./vendor/bin/phpunit``` 
A saída do comando acima deverá ser:
```
PHPUnit 9.5.8 by Sebastian Bergmann and contributors.

..                                                                  2 / 2 (100%)

Time: 00:00.068, Memory: 20.00 MB

OK (2 tests, 2 assertions)
```
