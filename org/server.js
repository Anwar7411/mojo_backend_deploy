const mongoose = require("mongoose")
dotenv.config({ path: './config.env' })


const connection = mongoose.connect(process.env.mongo_url)


module.exports = {
    connection
}