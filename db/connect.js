const mongoose = require('mongoose')


// const connectionString = 
// 'mongodb+srv://Admin:6123@cluster0.kzo4s.mongodb.net/Todo-App?retryWrites=true&w=majority'

const connectDB = (url) =>{
    return mongoose
    .connect(url,{
     useNewUrlParser: true,
     useCreateIndex: true,
     useFindAndModify: false,
     useUnifiedTopology: true,
    })
}

// mongoose
// .connect(connectionString,{
//  useNewUrlParser: true,
//  useCreateIndex: true,
//  useFindAndModify: false,
//  useUnifiedTopology: true,
// })
// .then(()=>console.log('connected to DB...'))
// .catch((err)=>console.log(err))

module.exports = connectDB