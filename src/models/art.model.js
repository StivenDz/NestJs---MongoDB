import {Schema,model} from "mongoose";



const ArtSchema = new Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:false,
        trim:true
    },
    price:{
        type:Number,
        default:0
    },
    stock:{
        type:Number,
        default:0
    },
    imageUrl:{
        type:String,
        required:false
    },
    createAt:{
        type:Date,
        default:Date.now
    }
});

const Art = model("Art",ArtSchema);


export default Art;