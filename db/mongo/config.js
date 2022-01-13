const mongoose = require('mongoose');

/**
 * establece conexión con mongoDB
 */
const dbConnection = async() => {

    try {
        await mongoose.connect(process.env.MONGODB_CNN, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            // useCreateIndex: true,
            // useFindAndModify: false
        });
        console.log(`BD online`);
    } catch (error) {
        console.log(error);
        throw new Error('Error al iniciar BD');
    }
}

module.exports = {
    dbConnection
}