# AngularJS---Movie-Info


#Projeto hospedado no FireBase => https://trailerdefilmes.firebaseapp.com

**O intuito do sistema é mostar informações e trailers dos filmes mais atuais e que se encontram em cartaz na atualidade.**
Versão 1 - 100% funcional em desktops, próxima versão será implementado a responsividades para aparelhos móveis.

Para rodar o projeto localmente é necessario instalar os seguintes itens abaixo:

1° Nodejs
2° NPM
3° Instar o angular-http-server ou algum outro similiar que faça a mesma função:
npm install -g angular-http-server

Após ter instalado, basta acessar o local do projeto e abrir o prompt de comando "Eu uso a do próprio VS CODE", em seguida
basta digitar angular-http-server -p 3000

O projeto estara disponivel no http://localhost:3000

O sistema em sí se trata de uma aplicação Single Page Application em AngularJs que consume API's do THEMOVIEDB.

O Projeto segue o padrão MVC.

#Informação sobre a estrututa do sistema

* Modulo "main" é responsavel por todo o sistema e possui um controle de rotas.

* Controller "videoController" responsavel por controlar e exibir informações em templates.html
* Controller "chartistController" responsavel por controlar e exibir um gráfico contendo informações de (Nota x Video).

* Template "video.html" responsavel pela view da home.
* Template "video-paginados.html" quando clicado no botão de paginação é esse html que é renderizado na tela.
* Template "information.html" responsavel pela view de detalhes dos videos.
* Template "chartist.html" responsavel pela view de gráficos.
* Template "ui-alert.html" responsavel pela view reutilizavel de mensagens de erro.

* Service "videosAPI" responsavel por consumir dados da API e fornecer ao controller "videoController" que renderiza dados da "/home".
* Service "chartistService" responsavel por consumir dados da API e fornecer ao controller "chartistController" que renderiza dados da "/chartist".

* Directive "uiAlert" responsavel por modularizar mensagem de erro que pode ser usada em qualquer lugar com informações diferentes de acordo com a necessidade.

* Pasta CSS/Assets local em que se armazena os arquivos .css e documentos como imagens, gifs e etcs... para estilização dos templates.

* Pasta JS/LIB local que fica armazenado as dependencias do AngularJs.

* Frameworks/Bibliotecas usadas: Bootstrap e Chartist.

# Performace

1° Para ganho de performance existe um sistema de paginação o qual traz um array de 20 objetos por pagina. O metodo para chamar API é usado apenas 1 unica vez
na construção da pagina

2° Afim de não ultilizar o filter de angular de forma desnecessaria, foi incluido o Denbounce "O disparo do filter só ira acontecer após 500 ms".

# Teste automatizado

***Talvez seja necessario instalar as seguintes dependencias para rodar o script:

***1° npm install chromedriver
***2° npm install selenium-webdriver

Em seguida, com o sistema rodando na porta 'http://localhost:3000' basta abrir o prompt de comando no local do arquivo que se encontra no mesmo diretorio da index e executar:

node teste_automatizado.js

O teste irá abrir uma janela anomia e acessar a HOME do projeto em questão, não havendo problemas no carregamento da página, será informado o tempo que o teste levou para fazer no console.
