# API-TypeScript-Node
☑ My first project using TypeScript, creating a API Rest with Node.js

## Setup

1. Criar o repositório do projeto e o README no github com as suas informações.

![Untitled](TypeScript%20Project%20b71cb45442a9490ca22a03f8e2584688/Untitled.png)

1. Com o projeto ja clonado, inicializar o node, baixar o express e o nodemon.

![Untitled](TypeScript%20Project%20b71cb45442a9490ca22a03f8e2584688/Untitled%201.png)

![Untitled](TypeScript%20Project%20b71cb45442a9490ca22a03f8e2584688/Untitled%202.png)

![Untitled](TypeScript%20Project%20b71cb45442a9490ca22a03f8e2584688/Untitled%203.png)

1. Adicionar o comando **************run dev************** no **************************package.json**************************  utilizando o nodemon

![Untitled](TypeScript%20Project%20b71cb45442a9490ca22a03f8e2584688/Untitled%204.png)

1. Baixar a versão do typescript do express

![Somente como desenvolvimento](TypeScript%20Project%20b71cb45442a9490ca22a03f8e2584688/Untitled%205.png)

Somente como desenvolvimento

1. Baixar e inicializar o Typescript

![Untitled](TypeScript%20Project%20b71cb45442a9490ca22a03f8e2584688/Untitled%206.png)

![Untitled](TypeScript%20Project%20b71cb45442a9490ca22a03f8e2584688/Untitled%207.png)

Quando crio arquivos typescript, preciso passa-los para javascript para roda-los, através do comando ********npx tsc******** 

![Untitled](TypeScript%20Project%20b71cb45442a9490ca22a03f8e2584688/Untitled%208.png)

![Arquivo transformado para JavaScript](TypeScript%20Project%20b71cb45442a9490ca22a03f8e2584688/Untitled%209.png)

Arquivo transformado para JavaScript

Para que esses arquivos malucos não fiquem na mesma pasta que os que eu escrevo, preciso mudar algo no ******************tsconfig.json******************

![Untitled](TypeScript%20Project%20b71cb45442a9490ca22a03f8e2584688/Untitled%2010.png)

![Untitled](TypeScript%20Project%20b71cb45442a9490ca22a03f8e2584688/Untitled%2011.png)

![Untitled](TypeScript%20Project%20b71cb45442a9490ca22a03f8e2584688/Untitled%2012.png)

## 1.0 Iniciando o projeto

Começarei criando um básico com 3 arquivos, um deles será o ********************server.ts,******************** o segundo **************routes.ts,************** e o **CreateCourseService.ts**

### **CreateCourseService.ts**

Neste arquivo, vou criar apenas uma classe de mesmo nome, com um método que recebe 3 parâmetros e os printa

![Untitled](TypeScript%20Project%20b71cb45442a9490ca22a03f8e2584688/Untitled%2013.png)

Perceba que, por usarmos o TypeScript, preciso passar o tipo de cada parâmetro que o metodo recebe, caso não faça isso, este erro aparece

![Untitled](TypeScript%20Project%20b71cb45442a9490ca22a03f8e2584688/Untitled%2014.png)

### routes.ts

Neste arquivo, eu crio uma função que executa a função do **CreateCourseService.ts** e apenas usa o **res.send()**

![Untitled](TypeScript%20Project%20b71cb45442a9490ca22a03f8e2584688/Untitled%2015.png)

Perceba que como eu não tenho a const **app,** precisei importar o ******Request****** e o ******************Response****************** para usa-los na minha função. Também importei o objeto **CreateCouseService**

### **server.ts**

Neste arquivo, eu faço o básico do express e crio apenas um metodo ********get******** que utiliza do método **createCourse** que eu importei anteriormente do **routes**.

![Untitled](TypeScript%20Project%20b71cb45442a9490ca22a03f8e2584688/Untitled%2016.png)

- Eu não preciso passar o **(req, res)** no get pq o **createCourse** ja os possui.

## 2.0 Interfaces para passar dados

### CreateCourse.js

Modifiquei o meu arquivo adicionando uma interface Course e a forma de passar parametros no metodo

![Untitled](TypeScript%20Project%20b71cb45442a9490ca22a03f8e2584688/Untitled%2017.png)

Tendo uma interface Course, eu não preciso mais passar os parametros e os seus tipos separadamente em todos os metodos da minha classe. 

- Eu so preciso passar o meu Course como interface

![Untitled](TypeScript%20Project%20b71cb45442a9490ca22a03f8e2584688/Untitled%2018.png)

- Ou até mesmo usar a atribuição por desestruturação

![Untitled](TypeScript%20Project%20b71cb45442a9490ca22a03f8e2584688/Untitled%2019.png)

A diferença fica entre ter o data. se usar a interface toda.

Com a desestruturação eu só pego os que eu preciso.

### routes.ts