const mongoose = require('mongoose');
const trainingSchema = new mongoose.Schema(
    {
        photo : String,
        libelle: String,
        price : Number,

    }
);
const TrainingModel=mongoose.model("TrainingModel",trainingSchema);
module.exports = TrainingModel;