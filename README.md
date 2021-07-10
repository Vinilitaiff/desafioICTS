# Índice

- [Como Usar](#como-usar)

<a id="como-usar"></a>

## :fire: Como usar

- ### **Pré-requisitos**

  - É **necessário** possuir o **[Node.js](https://nodejs.org/en/)** instalado na máquina
  - Também, é **preciso** ter um gerenciador de pacotes seja o **[NPM](https://www.npmjs.com/)** ou **[Yarn](https://yarnpkg.com/)**.
  - Por fim, é **essencial** ter o **[MySQL](https://duckduckgo.com/?q=mysql)** instalado na máquina

1. Faça um clone :

```sh
  $ git clone https://github.com/Vinilitaiff/desafioICTS.git
```

2. Executando a Aplicação:

```sh
  # Instale as dependências
  $ yarn

  ## Crie o banco de dados  
  $ yarn typeorm migration:run   

  # Inicie a API
  $ yarn dev

  # Inicie a aplicação web
  $ cd frontend

  # Instale as dependências
  $ yarn

   # Inicie a Frontend
  $ yarn start

```

## :memo: License

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

<h4 align="center">
    Feito com 💜 by Vinicius Vasconcelos
</h4>
