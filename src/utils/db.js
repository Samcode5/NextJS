import mongoose from "mongoose";


const connect = async ()=>{
    try{
        await mongoose.connect("mongodb+srv://sameer:sameer@cluster1.mnhvoeh.mongodb.net/test?retryWrites=true&w=majority");
        console.log("conected to mongodb");
    }

    catch(error)
    {
        console.log(error);
        throw new Error(error);
    }

    await connect();
}

export default connect;