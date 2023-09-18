const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const MONGODB = "mongodb+srv://jrv1295:Kikisi123@cluster0.rajlxjg.mongodb.net/?retryWrites=true&w=majority"



const typeDefs = require('./graphql/typedefs');
const resolvers = require ('./graphql/resolver');










const server = new ApolloServer({
    typeDefs,
    resolvers
})


mongoose.connect(MONGODB, {useNewUrlParser: true})
.then(() => {
    console.log('MongoDB connection successful');
    return server.listen({port: 3000})
})
.then((res) => {
  console.log(`Server running at ${res.url}`)
})