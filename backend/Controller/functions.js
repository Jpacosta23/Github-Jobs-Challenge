const {Router} = require('express');
const jobs=require('../Job_list/jobs.json')
const router=new Router();

router.get('/',(req,res)=>{
    if(jobs){
        res.json(jobs);
    }
    else{
        res.status(404);
    }
})

router.get('/keyword',(req,res)=>{
    // if(jobs){
    //     res.json(jobs);
    // }
    // else{
    //     res.status(404);
    // }
})



module.exports = router;