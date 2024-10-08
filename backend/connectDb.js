import mongoose from "mongoose"

const connectDatabase = async () => {
    try {
        const connect = await (mongoose.connect(`${process.env.DB_URL}`))
        console.log("Connected to Database...", connect.connection.host)
    } catch (error) {
        console.log("Encountered an error...", error)
        process.exit(1)
    }
}

export default connectDatabase
