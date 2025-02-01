import mongoose from "mongoose";

type ConnectioObject = {
    isConnected?: number
}

const connection: ConnectioObject = {};

async function dbConnect(): Promise<void> {
    if (connection.isConnected) {
        console.log("Already connected");
        return;
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI as string || '', {});
        connection.isConnected = db.connections[0].readyState;

        console.log("Connected to the database");
    } catch (error) {
        console.error("Error connecting to the database", error);
        process.exit(1);
    }
}

export default dbConnect;
