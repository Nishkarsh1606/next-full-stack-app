import mongoose from "mongoose";

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DRIVER, { useNewUrlParser: true, useUnifiedTopology: true })
    }
    catch (error) {
        throw new Error('Failed to connect to database')
    }
}

export default connect