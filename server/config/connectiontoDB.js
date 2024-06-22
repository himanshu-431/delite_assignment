const mongoose = require("mongoose")

const connectiontoDB = () => {
    mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@bookingcluster.et3ayf6.mongodb.net/mernstackproject?retryWrites=true&w=majority&appName=BookingCluster`).then((resp) => {
        console.log("DB Connected to ", resp.connection.host)
    }).catch((err) => {
        console.log("Error while connecting to DB", err.message)
    })
}


module.exports = connectiontoDB
