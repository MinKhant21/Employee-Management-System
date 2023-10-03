// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient;
// let _db;
// const mongodbConnet = callback => {
//     MongoClient.connect('mongodb+srv://kaungminkhant:dxEjYeRrWgRDDEWS@cluster0.kvquvff.mongodb.net/?retryWrites=true&w=majority',{ useNewUrlParser: true })
//     .then(client=>{
//         _db = client.db('test')
//         console.log('connected Mongodb')
//     })
//     .then(err=>console.error(err))
// }
// const getDb = () => {
//     if(_db){
//         return _db
//     }
//     throw ('no database found')
// }

// module.exports = { mongodbConnet, getDb }; // Export the functions

// Mysql SetUp

import mysql from 'mysql'

var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'managementSystem'
})
connection.connect(()=>{
    console.log("Connected Mysql Server")
})

export default connection