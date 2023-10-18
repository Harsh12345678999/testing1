const mongoose = require("mongoose")
const connectDatabase = () => {
    mongoose.connect('mongodb+srv://hg863546:mohan215489@cluster0.cua4gca.mongodb.net/ecommerceF3?retryWrites=true&w=majority')
}

module.exports = connectDatabase;