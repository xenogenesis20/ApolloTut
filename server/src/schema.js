const { gql } = require( 'apollo-server' )

const typeDefs = gql`

    type Query{
        tracksForHome:[Track!]!
    }

"Group of modules that teaches about a specific topic"    
type Track{
    id: ID!
    "Trackes title"
    title: String!
    "Track main author"
    author: Author!
    "Track main illustration"
    thumbnail: String
    "Appropriate length to complete in minutes"
    length: Int
    "number of modules this track contains"
    modulesCount: Int
    }

    type Author{
        id:ID!
        name:String!
        photo:String
    }

`;

module.exports = typeDefs;