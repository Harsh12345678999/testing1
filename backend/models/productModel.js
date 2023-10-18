const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please Enter Product Name"]
    },
    price:{
        type:Number,
        required:[true,"Please Enter Product Price"]
    },
    description:{
        type:String,
        required:[true,"Please Enter Product Description"]
    },
    category:{
        type:String,
        required:[true, "Please Enter Product Category"]
    },
    stock:{
        type:Number,
        required:true,
        default:1
    },
    ratings:{
        type:Number,
        required:true,
        default:0
    },
    reviews:[
        {
            name:{
                type:String,
                required:true,
            },
            ratings:{
                type:Number,
                required:true
            },
            comment:{
                type:String,
                required:true
            }
        }
    ],
    images:[
        {
            public_id:{
                type:String,
                required:true,
            },
            url:{
                type:String,
                required:true
            }
        }
    ],
    createAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("Product", productSchema)