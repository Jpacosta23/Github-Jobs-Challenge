const jobsApi=require('./Controller/functions');

const myfuntion=(app)=>{
    app.use('/api/jobs',jobsApi);
}

module.exports=myfuntion;