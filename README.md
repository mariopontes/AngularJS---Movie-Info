# AngularJS---Movie-Info
Web site de informações de filmes e trailer desenvolvido em angularJS em sua ultima versão

Para rodar o projeto localmente é necessario instalar os seguintes itens abaixo:

1° Nodejs
2° NPM
3° Instar o angular-http-server ou algum outro similiar que faça a mesma função:
npm install -g angular-http-server

Após ter instalado, basta acessar o local do projeto e abrir o prompt de comando "Eu uso a do próprio VS CODE", em seguida
basta digitar angular-http-server -p 3000

O projeto estara disponivel no http://localhost:3000

O sistema em sí se trata de uma aplicação em Single Page Application angularJs que consume API's do THEMOVIEDB.

O Projeto segue o padrão MVC, no qual existe um Modulo com sistema de rotas, dois Controller para quatro templates, dois Serviços para o consumo da API.
Havendo também a pasta CSS/Assets e por ultimo o JS/LIB que estão armazenadas todas as dependencias do angularJS.

Frameworks/Bibliotecas usadas: Bootstrap e Chartist.

O intuito do sistema é mostar informações dos filmes mais atuais e que se encontram em cartaz na atualidade.


# Teste automatizado

***Talvez seja necessario instalar as seguintes dependencias para rodar o script:

1° npm install chromedriver
2° npm install selenium-webdriver

Em seguida, com o sistema rodando na porta 'http://localhost:3000' basta abrir o prompt de comando no local do arquivo que se encontra no mesmo diretorio da index e executar:

node teste_automatizado.js

O teste irá abrir uma janela anomia e acessar a HOME do projeto em questão, não havendo problemas no carregamento da página, será informado o tempo que o teste levou para fazer.
