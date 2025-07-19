require('dotenv').config();

const express = require('express');

const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000 ;
const connectDB = require('./config/db')
const authRoutes = require('./routes/authRoutes')
const incomeRoutes = require('./routes/incomeRoutes')
const expenseRoutes = require('./routes/expenseRoutes')
const dashboardRoutes = require('./routes/dashboardRoute')

// Middlewares to handle CORS

app.use(
    cors({
        origin:process.env.CLIENT_URL || "*",
        methods: ["GET","POST","PUT","DELETE"],
        allowedHeaders:["Content-Type","Authorization"],
    })
)


app.use(express.json())
app.use(express.urlencoded({extended:true}))


connectDB();

app.use('/api/v1/auth',authRoutes)
app.use('/api/v1/income',incomeRoutes)
app.use('/api/v1/expense',expenseRoutes)
app.use('/api/v1/dashboard',dashboardRoutes)


// Serve uploads folder
app.use("/uploads",express.static(path.join(__dirname,"uploads")));


// app.get(('/'),(req,res)=>{
//     res.send('Hello')
// })

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})