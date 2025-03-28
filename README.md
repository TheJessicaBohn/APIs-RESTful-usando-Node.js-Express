# APIs-RESTful-usando-Node.js-Express
## Ideia de CRUD, para um sistema de vendas online

:wrench: **Ferramentas:**
  - [Node:](https://nodejs.org/en/download) permite executar o java script fora do navegador;
  - [Visual Studio Code](https://code.visualstudio.com/download);
  - Express;
  - [TypeScript](https://nodejs.org/en/learn/typescript/introduction): tipagem do JavaScript;
  - [PostMan](https://www.postman.com/downloads/);
  - [Firebase:](https://firebase.google.com/?hl=pt-br) ofereçe uma camada sobre o google cloud, para facilitar o lançamento e desenvolvimento de aplicações web ou mobile;
      - Authentication: Parte de logins;
      - [Firetore](https://firebase.google.com/docs/firestore/manage-data/add-data?hl=pt-br&authuser=2#node.js): um banco de dados não relacional em núvem, parecido com o MongoDB, NoSQL com estrutura Google;
      - Storage: Permite que façamos Uploads de arquivos, como fotos, vídeos, músicas, PDFs;
      - Functions: Hospedagem da API;
      - Emulator;
	  - [Firebase Admin SDK](https://firebase.google.com/docs/admin/setup?authuser=2&hl=pt-br);
  - EsLint;
  - [tsc-watch](https://www.npmjs.com/package/tsc-watch): compiça o código para JavaScript e executa o Node, sem que tenha que refazer os comandos.

**Comandos uteis:**

- ```cd nome-da-pasta```: entrar na pasta;
- ```ctrl + c```: parar a execução;
- ```ctrl + shift + p```: abrir a busca do vscode;
- ```Remove Unused Imports```: dentro da busca do vscode, para remover os imports inutilizados;
- ```ls```: listar o interior da pasta;
- ```mkdir nome-da-pasta```: criar pasta;
- ```node -v```: versão do node;
- ```node nomeDoArquivo.js```: executa o programa;
- ```npm -v```: versão do npm, gerenciadodr de pacotes do node;
- ```npm -h```: helper do npm;
- ```npm init -y```: criar o arquivo de configuração geral do projeto, package.json e o -y "diz" yes para tudo;
- ```npm install express```: instalar express;
- ```npm install typescript -D```: instalar TypeScript, como modo dependência para não pesar no deploy da nuvem;
- ```npm i @types/node @types/express -D```: instalação dos códigos do express no TypeScript; 
- ```npx tsc --init```: instalar as dependências do TypeScript apenas dentro do projeto, pelo executor;
- ```npm install --save-dev @tsconfig/recommended```: instalar configurações recomendadas;
- ```npm install tsc-watch --save-dev```: instalar tsc-watch;
- ```npx tsc```: após as configurações gerar as libs;
- ```node lib/index.js```: executar o arquivo gerado;
- ```npx tsc-watch --onSuccess "node ./lib/index.js"```: compila em tempo real;
- ```npm start```: simplificação do comando, ```npx tsc-watch --onSuccess "node ./lib/index.js"```;
- ```npm install firebase-admin --save```: instalar o Firebase Admin SDK;

**Fontes:**
  - https://github.com/tsconfig/bases/?tab=readme-ov-file
  - Curso: https://www.udemy.com/course/apis-restful-nodejs-express-typescript-firebase
