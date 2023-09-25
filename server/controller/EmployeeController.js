
import db from './db'

exports.all = (req,res) => {
  db.query('SELECT * FROM users ',(error,data,fields)=>{
    if(error) throw error
    return res.json({
      data:data
    })
  })
}


  


