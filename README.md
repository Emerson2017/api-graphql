
## API Reference


## Para iniciar o projeto

Para instalar os módulos, execute:

```
npm i
```

Para iniciar o projeto, execute:

```
node ./server.js
```

Para visualizar o Dashboard do Apollo Server, acesse o endereço:

```
localhost:4000
```


#### Get all Tasks and Users

```graphql
  query {
    tasks {
      id
      title
      description
      status
      user {
        id
        name
        email
      }
    }
  }
```

#### Get Task By ID

```graphql
  query {
    task(id: 1) {
      description
      title
      status
    }
}
```

#### Create new Task 

```graphql
mutation {
  createTask(title: "Nova Tarefa, user 2", description: "Descrição da nova, user 2", userId: "2", status: PENDENTE) {
    id
    title
    description
    status
  }
}
```

#### Update Task By ID

```graphql
mutation {
   updateTask ( id: 1, title: "TESTE TESTE", description: " TESTE 2", status: CONCLUIDA) {
    id
    title
    description
    status
  }
}
```

#### Update Status Task By ID

```graphql
mutation {
   changeStatusTask (id: 1, status: CONCLUIDA){
     description
     title
   }
}
```

#### GET Task By Status

```graphql
query {
  tasksByStatus(status: CONCLUIDA) {
    id
    title
    description
    status
  }
}
```

#### Delete Task By ID

```graphql
mutation {
   deleteTask(id: 2) {
     title
   }
}
```



#### Get all Users and Tasks

```graphql
  query {
    users {
      name
      email
      tasks {
          id
          title
          description
          status
      }
    } 
  }
```

#### Get User By ID

```graphql
  query {
    user(id: 1) {
      name
      email
    }
  }
```


#### Create New User 

```graphql
mutation {
  createUser( name: "João da Silva", email: "joao@example.com") {
    id
    name
    email
  }
}
```