const { GraphQLServer } = require('graphql-yoga')
const path = require('path')
const resolvers = require('./resolvers.js')
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://root:root@cluster0-bbk2g.gcp.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true
})

const server = new GraphQLServer({
	typeDefs: path.resolve(__dirname, 'schema.graphql'),
	resolvers
})

server.start()