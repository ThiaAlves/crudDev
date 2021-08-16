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


### EXECUÇÂO DIRETA

1) Clone esse repositório para a sua máquina:
```git clone https://github.com/ThiaAlves/crudDev.git```

2) Instale as dependências necessárias para execução do projeto
```composer install```
```npm install```

3) Defina as configurações de conexão ao banco de dados no arquivo .env
```
DB_CONNECTION=mysql
DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=crudDev
DB_USERNAME=username
DB_PASSWORD=password
```
4) Importar o banco de dados:
```php artisan migrate```

5) Gerar a chave para execução do projeto:
```php artisan key:generate

6) Abra dois terminais e execute os comandos simultaneamente:

```npm run watch```
```php artisan serve```
 
 
### EXECUÇÂO EM DOCKER
O projeto utiliza Docker e Docker Compose como padrão para criação do ambiente de desenvolvimento.

### Build e execução dos containers Docker
Observação: A configuração do docker-compose.yml foi configurado para ser executado 
em uma máquina linux, em execuções no windows será necessário fazer alguns ajustes.

1) Clone esse repositório para a sua máquina:
```git clone https://github.com/ThiaAlves/crudDev.git```

2) Copie o arquivo .env.example para o diretorio do projeto com o comando:
```cp .env.example .env```

3) Para construir a imagem do app
```docker-compose build app```

4) Para iniciar os containers do app
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
