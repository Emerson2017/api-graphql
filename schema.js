const { gql } = require('apollo-server');

const typeDefs = gql`

  type User {
    id: ID
    name: String
    email: String
    tasks: [Task]
  }

  enum TaskStatus {
    PENDENTE
    CONCLUIDA
  }

  type Task {
    id: ID
    title: String
    description: String
    status: TaskStatus
    userId: ID
    user: User
  }

  type Query {
    users: [User]
    user(id: ID!): User
    tasks: [Task]
    task(id: ID!): Task
    tasksByStatus(status: TaskStatus): [Task]
  }

  type Mutation {
    createUser(name: String, email: String): User
    updateUser(name: String, email: String): User
    createTask(title: String, description: String, userId: ID, status: TaskStatus): Task
    updateTask(id: ID, title: String, description: String, userId: ID, status: TaskStatus): Task
    deleteTask(id: ID): Task
    changeStatusTask(id: ID, status: TaskStatus): Task
  }
`;

module.exports = typeDefs;
