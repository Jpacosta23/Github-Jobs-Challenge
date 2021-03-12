const express=require('express');
const cors=require('cors');
const app=express();
app.use(express.json()); 
app.use(cors());
const PORT= process.env.PORT || 3001

const routes=require('./routes');

routes(app);

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})  