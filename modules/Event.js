const express = require("express")
const { default: mongoose } = require("mongoose")

const Schema = mongoose.Schema;

const EventSchema = new Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    location:{type:String,required:true},
    starttime:{type:String,required:true},
    endtime:{type:String,required:true}
})

const Event = mongoose.model("Event",EventSchema)

module.exports = Event