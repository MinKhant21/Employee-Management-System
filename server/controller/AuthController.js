import db from './db'
import jwt from 'jsonwebtoken'
exports.login = (req,res) => {
  let {email,password} = req.body
  let getUser = `SELECT id,name,email,role FROM USERS WHERE email = "${email}" AND  password = "${password}"`
  db.query(getUser,(error,data,fields)=>{
    if(error) throw error
    if(data[0]!=undefined && data[0]){
      let jwtSecretKey = process.env.JWT_SECRET_KEY
      let dataToken = {
        time: Date(),
        userId:data[0].id,
      }
      let token = jwt.sign(dataToken,jwtSecretKey)
      return res.json({
        'status' : 200,
        'user' : data[0],
        'token' : token
      })
    }
    if(data[0] ==undefined){
      return res.json({
        'status' : 500,
        'message' : 'Dont Match Email and Password'
      })
    }
  })
}

exports.register = (req,res) => {
    console.log(res.send('ok'))
}

exports.test = (req,res) => {
  console.log('i am test')
}


  


