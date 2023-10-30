let users = [];
let tasks = [];

const resolvers = {
  Query: {
    users: () => users,
    user: (parent, args) => users.find(user => user.id === args.id),
    tasks: () => tasks,
    task: (parent, args) => tasks.find(task => task.id === args.id),
    tasksByStatus: (parent, args) => {
        if (args.status) {
          return tasks.filter(task => task.status === args.status);
        } else {
          return tasks; 
        }
      }
  },
  Mutation: {
    createUser: (parent, args) => {
      const newUser = {
        id: String(users.length + 1),
        name: args.name,
        email: args.email,
      };
      users.push(newUser);
      return newUser;
    },
    createTask: (parent, args) => {
      const newTask = {
        id: String(tasks.length + 1),
        title: args.title,
        description: args.description,
        userId: args.userId,
        status: args.status,
      };
      tasks.push(newTask);
      return newTask;
    },
    updateTask: (parent, args) => {
        const taskIndex = tasks.findIndex(task => task.id === args.id)

        const task = tasks[taskIndex];

        if (args.title != null) {
            task.title = args.title            
        }

        if (args.status != null) {
            task.status = args.status
        }

        if (args.description != null) {
            task.description = args.description
        }
        
        tasks[taskIndex] = task;

        return task;
    },
    changeStatusTask: (parent, args) => {
        const taskIndex = tasks.findIndex(task => task.id === args.id)

        const task = tasks[taskIndex];
        task.status = args.status

        tasks[taskIndex] = task;
        return task;
    },
    deleteTask: (parent, args) => {
        tasks = tasks.filter(task => task.id !== args.id);
        return tasks;
    }
  },
  User: {
    tasks: (user) => tasks.filter(task => task.userId === user.id),
  },
  Task: {
    user: (task) => users.find(user => user.id === task.userId),
  },
};

module.exports = resolvers;
