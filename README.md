# Facom Techweek 2017
##### Cordova, Rest e CouchDB - Abordagens de comunicação entre mobile e nuvem

Repositório com o exemplo utilizado na apresentação da TechWeek 2017

## CouchDB
### Instalar o CouchDB 2.0 via Docker
```sh
$ docker run --name couchdb -p 5984:5984 -v $(pwd):/opt/couchdb/data klaemo/couchdb
```

Neste caso pode-se substituir ``$(pwd)`` por outro diretório qualquer que se desejar utilizar como local para salvar os arquivos do banco.

### Configurando o CouchDB:

  - Acesse: http://localhost:5984/_utils para verificar que a instalação foi bem sucedida.
  - Navegue até a opção ``Configure > Cors > Enable Cors``

## Preparar ambiente
ps: requer nodejs instalado e configurado. Sugestão de instalador: ``nvm``

```sh
$ git clone https://github.com/vhmolinar/techweek-cordova-rest-pouchdb.git
$ cd techweek-cordova-rest-pouchdb
$ npm install
```

## Rodar teste
Basta servir estaticamente os arquivos na raíz.
```sh
$ npm install -g static-server
$ static-server
```
Acessar o navegador no endereço informado. Ex:
``http://localhost:9080``

Abrir /app1.html e /app2.html
