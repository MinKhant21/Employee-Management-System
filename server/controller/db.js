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