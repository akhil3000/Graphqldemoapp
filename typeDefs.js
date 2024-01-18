const data={

    authors:[
    {id:"1",name:"Chirag Goel",bookIds:["101","102"]},
    {id:"2",name:"Akshay Saini",bookIds:["103"]}
    ],
    books:[
    {id:"101",title:"Namasthe FSD",publishedYear:2000,authorId:"1"},
    {id:"102",title:"Book 2",publishedYear:2010,authorId:"1"},
    {id:"103",title:"Book 3",publishedYear:2020,authorId:"2"}
 
    ],
 
 
 
 
 };


export const typeDefs=`#graphql

    type Author{
        id:ID!
        name:String!
        books:[Book]
    }

    type Book{
        id:ID!
        title:String!
        publishedYear:Int
        author:Author
    }

    type Query{
        authors:[Author]
        books:[Book]

    }

    type Mutation{
        addBook(title:String!,publishedYear:Int,authorId:ID!):Book!
    }




`