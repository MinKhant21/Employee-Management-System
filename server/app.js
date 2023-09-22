import express from 'express'
import cors from 'cors'
import router from './router';

const app = express();

app.use(cors({ origin: 'http://localhost:3000' }))
app.use(router)
app.use(express.json())
app.use(express.urlencoded({extended: true}))
/**-------Server Setup--------- */
const port = 2000
let server = app.listen(port, () => {
    console.log(`Server running in : ${port}`)
})
