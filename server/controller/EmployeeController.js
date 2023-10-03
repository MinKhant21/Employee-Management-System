
import db from './db'

exports.all = (req,res) => {
  db.query(`SELECT * FROM users WHERE role = 'user'`,(error,data,fields)=>{
    if(error) throw error
    return res.json({
      data:data
    })
  })
}

exports.create = (req,res) => {
  db.query(`INSERT INTO users (name,email,phone,salary,password) VALUES ('${req.body.name}','${req.body.email}','${req.body.phone}','${req.body.salary}','${req.body.password}')`,(error,data,feild)=>{
    if(error) throw error
    return res.json({
      status : '200',
      message : 'Created Employee'
    })
  })
}


  


