# :toolbox: Tecnologias usadas:

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![Mocha](https://img.shields.io/badge/-mocha-%238D6748?style=for-the-badge&logo=mocha&logoColor=white)
![Sinon](https://img.shields.io/badge/sinon.js-323330?style=for-the-badge&logo=sinon)
![Chai](https://img.shields.io/badge/chai.js-323330?style=for-the-badge&logo=chai&logoColor=red)

# :open_book: Objetivo do projeto car shop

<details>
  <summary>:speech_balloon: Objetivos</summary>

  ```
  1. Aplicar os princípios de Programação Orientada a Objetos (POO) para a construção de uma API com CRUD para gerenciar uma concessionária de veículos. 
  2. Utilizando o banco de dados MongoDB através do framework do Mongoose.
  ```
</details>

<details>
  <summary>:speech_balloon: Exemplo de funcionamento</summary>
  
![Captura de tela de 2023-05-25 14-50-40](https://github.com/Lucas-Israel/project-car-shop/assets/104790267/e99ef25f-64d7-412f-a2b5-9ba45db77ae8)
![Captura de tela de 2023-05-25 14-58-04](https://github.com/Lucas-Israel/project-car-shop/assets/104790267/e6abf46f-f043-4dfa-a19c-e2306069f0ae)
![Captura de tela de 2023-05-25 15-00-59](https://github.com/Lucas-Israel/project-car-shop/assets/104790267/10551fcb-8535-4186-84cb-c8e5c94ad869)
![Captura de tela de 2023-05-25 15-02-25](https://github.com/Lucas-Israel/project-car-shop/assets/104790267/d5e0ca3b-000a-49ae-bd27-07115cb2e6a7)

</details>

# :heavy_exclamation_mark: Arquivos desenvolvidos nesse projeto:

<details>
  <summary>:speech_balloon: Arquivos</summary>

  ```
  src/
    app.ts
    server.ts
  
    Controllers/
      car.controller.ts
      motorcycle.controller.ts
  
    Domains/
      Car.ts
      Motorcycle.ts
      Vehicle.ts
      VehicleFactory.ts
  
    Interfaces/
      ICar.ts
      IMotorcycle.ts
      IVehicle.ts

    Middlewares/
      ErrorHandler.ts
      AbstractODM.ts
      CarODM.ts
      MotorcycleODM.ts
      
    Routes/
      car.routes.ts
      motorcycle.routes.ts
      
    Services/
      car.service.ts
      motorcycle.service.ts

    types/
      FactoryVehiclesTypes.ts
      
  tests/
    unit/
      Models/
        abstractODM.test.ts
  
      Services/
        car.services.test.ts
        motorcycle.services.test.ts
  ```
</details

#### :warning: todos os outros arquivos foram desenvolvidos pela [Trybe](https://www.betrybe.com).

# :thinking: Como checar o projeto

```
git clone git@github.com:Lucas-Israel/project-mongodb-commerce.git
docker-compose up -d
  ( caso tenha problemas com portas, mudar no arquivo docker-compose.yml )
docker exec -it car_shop bash
npm install && clear && npm run test && npm run dev
  
no thunder client ( ou similares ) acessar a rota http://localhost:3012

body usado no exemplo: {
  "seatsQty": 4,
  "doorsQty": 4,
  "buyValue": 20,
  "color": "blue",
  "year": 2000,
  "model": "Test"
}
  POST /cars
  GET /cars
  GET /cars/:id
  PUT /cars/:id
  DELETE /cars/:id
  
  POST /motorcycles
  GET /motorcycles
  GET /motorcycles/:id
  PUT /motorcycles/:id
  DELETE /motorcycles/:id
```

# :calendar: Datas para desenvolvimento

```
início: 13/02/23 às 14h18
término: 14/02/23 às 19h31
prazo: 7 dias
dias específicos para o desenvolvimento do projéto: 3
```

# :trophy: Percentual de conclusão do projeto

![Captura de tela de 2023-05-25 15-15-21](https://github.com/Lucas-Israel/project-car-shop/assets/104790267/6da53279-05c9-4e3a-99ae-46b4c9f2affb)

<details>
  <summary>:warning: Metodo de avaliação da Trybe</summary>
  
##### A escola de programação [Trybe](https://www.betrybe.com) utiliza um sistema de avaliação baseado na conclusão de requisitos em cada projeto, considerando a porcentagem de conclusão, com um mínimo de 80% dos requisitos obrigatórios, em um prazo regular de no máximo 7 dias, tendo dias específicos para o desenvolvimento do projeto que variam de acordo com a complexidade dele.

##### Não alcançando esse patamar mímino, o aluno entra em recuperação, tendo que entregar 90% dos requisitos obrigatórios mais os bonús, em outros 7 dias, caso o aluno falhe novamente ele é mudado de turma para refazer o conteúdo e projeto, caso falhe após mudar de turma, no mesmo conteúdo/projeto, o aluno é removido do curso.
  
</details>
