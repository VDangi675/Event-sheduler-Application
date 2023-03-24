const express = require("express")
const bodyparser = require("body-parser")
const Event = require("../modules/Event")


const route = express.Router()



route.get("/v1/event",async (req,res)=>{
try{
const event = await Event.find();
res.status(200).json({
    status:"Sucess",
    event
 })
}catch(e){
        res.status(500).json({
            status:"failed",
            message:e.message
        })
    }
})


route.get("/v1/event/:id",async (req,res)=>{
    try{

    const event = await Event.findOne({_id:req.params.id});
    if(!event){
        return res.status(404).json({
            err:"There is no event with that id"
        })
    }else
    {
        res.status(200).json({
            status:"Sucess",
            event
         })
    }
   
    }catch(e){
            res.status(500).json({
                status:"failed",
                message:e.message
            })
        }
    })

route.post("/v1/Event",async(req,res)=>{
   
    try{
        let {title,description,location,starttime,endtime} = req.body;

        if(title===null||title.length===0)
        {
            return res.status(400).json({err:"title is required"})
        }

        if(description===null||description.length===0)
        {
            return res.status(400).json({err:"description is required"})
        } 
        if(location===null||location.length===0)
        {
            return res.status(400).json({err:"location is required"})
        }
         if(starttime===null||starttime.length===0)
        {
            return res.status(400).json({err:"starttime is required"})
        }
        if(endtime===null||endtime.length===0)
        {
            return res.status(400).json({err:"endtime is required"})
        }
        const event = await Event.create(req.body)
        res.status(201).json({
           status:"Sucess",
           event
        })

    }catch(e){
        res.status(500).json({
            status:"failed",
          message:e.message
        })
    }
})


route.delete("/v1/event/:id",async(req,res)=>{


    const event = await Event.findOne({_id:req.params.id});
     if(!event){
        return res.status(204).json({
            err:"There is no event with that id"
        })
    }else{
       const event = await Event.deleteOne({_id:req.params.id})
        res.status(200).json({
            Status:"Deleted"
         })
    }
    
})

route.put("/v1/event/:id",async (req,res)=>{
    try{
        let {title,description,location,starttime,endtime} = req.body;

        if(title===null||title.length===0)
        {
            return res.status(400).json({err:"title is required"})
        }

        if(description===null||description.length===0)
        {
            return res.status(400).json({err:"description is required"})
        } 
        if(location===null||location.length===0)
        {
            return res.status(400).json({err:"location is required"})
        }
         if(starttime===null||starttime.length===0)
        {
            return res.status(400).json({err:"starttime is required"})
        }
        if(endtime===null||endtime.length===0)
        {
            return res.status(400).json({err:"endtime is required"})
        }
            const event = await Event.updateOne({_id:req.params.id},req.body);
            res.status(200).json({
                status:"Sucess",
                event
             })
        
       
        }catch(e){
                res.status(500).json({
                    status:"failed",
                    message:e.message
                })
            }
})


module.exports = route