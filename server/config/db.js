const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://wkg22:rGaLrMWDUl3Kz1xY@projectcluster.26tn0.mongodb.net/?retryWrites=true&w=majority&appName=ProjectCluster", {
            dbName: 'Book',
        });
        console.log("MongoDB connected...");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;

//"mongodb+srv://<username>:<password>@cluster.mongodb.net/library"