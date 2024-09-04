import mongoose from "mongoose";
const Schema=mongoose.Schema;

const Request=new Schema({
    name:{
        type:String,
        required:true
    },
    eid:{
        type:String,
        required:true
    },
    clg:{
        type:String,
        required:true
    },
    material:{
        type:String,
        required:true
    },
    mid:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    cap:{
        type:String,
        required:true
    },
    itype:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    
    brand:{
        type:String,
        required:true
    },
});
export default mongoose.model('acceptedRequests',Request);
                        //collection name, variable