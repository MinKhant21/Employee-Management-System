import socket from '../socket'
import db from './db'
exports.notification = (req,res) => {
    let message = req.body.message
    let user = req.body.user
    db.query(
        `INSERT INTO notification  (user_id,message) values ('${user.id}','${message}') `,
        (error,data,field) => {
            if (error) throw error
            socket.getIo().emit('noti',{message})
            return res.json({
                status:'200',
                message: 'successfully'
            })
        }
    )
    
}