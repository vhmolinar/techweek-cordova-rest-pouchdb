# Facom Techweek
##### Cordova, Rest e CouchDB - Abordagens de comunicação entre mobile e nuvem

Repositório com o exemplo utilizado na apresentação da TechWeek 2017

### Instalar o CouchDB 2.0 via Docker
```sh
$ docker run -p 5984:5984 -v $(pwd):/opt/couchdb/data klaemo/couchdb
```

Neste caso pode-se substituir ``$(pwd)`` por outro diretório qualquer que se desejar utilizar como local para salvar os arquivos do banco.
