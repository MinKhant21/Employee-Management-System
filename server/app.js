import express from 'express'
import cors from 'cors'
import router from './router';
import dotenv from 'dotenv'

const app = express();

// Set up Global configuration access
dotenv.config();

app.use(cors({ origin: 'http://localhost:3000' }))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(router)

/**-------Server Setup--------- */
  

    let PORT = process.env.PORT || 2000;
    let server = app.listen(PORT, () => {
        console.log(`Server running in : ${PORT}`)
    })