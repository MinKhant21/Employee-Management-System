import express from 'express'
import cors from 'cors'
import router from './router';
import dotenv from 'dotenv'
import multer from 'multer'
const app = express();

// Set up Global configuration access
dotenv.config();

app.use(cors({ origin: 'http://localhost:3000' }))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(router)
app.use(multer().single('file'))
/**-------Server Setup--------- */
  
    let PORT = process.env.PORT || 2000;
    let server = app.listen(PORT, () => {
        console.log(`Server running in : ${PORT}`)
    })

    const io = require('./socket').init(server, {
      cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
      },
    });
    // ...other Socket.IO server code
    io.on('connection',(socket)=>{
      console.log("Client Connected")
        // socket.on('noti',(data)=>{
        //   console.log(data)
        // })
    })
        