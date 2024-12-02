import express from 'express'
import { connectDB} from './config/db.js';
import { apiRouter } from './routes/index.js';
import cookieParser from 'cookie-parser';
import { handlerError } from './utils/error.js';
import cors from "cors"

connectDB()

const app = express()
app.use(express.json());
app.use(cors({
  origin:"http://localhost:5173",
  credentials:true,
  methods:["GET","POST","PUT","DELETE"]
}))
app.use(cookieParser());


const port = 3000


app.get('/test', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

app.use('/api',apiRouter)

app.use(handlerError)

app.all("*",(req,res)=>{
  res.status(404).json({ message:"end point does not exist"});
});
