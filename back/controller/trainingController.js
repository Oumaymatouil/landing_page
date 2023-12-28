const TrainingModel = require("../models/training");

const addTraining = async (req, res) => {
    try {
        const { filename } = req.file || {};
        const { libelle , price} = req.body;

        const training = new TrainingModel({
            libelle,
            price,
            photo : filename,
        });
        const addedtraining = await training.save();
        console.log(addedtraining);
        res.status(201).json(addedtraining);
    } catch (error) {
        console.error('Error adding training:', error);
        res.status(500).json({ message: error.message });
    }
};

const updateTraining = async (req, res) => {
    try {
        const { id } = req.params;
        const { filename } = req.file || {};
        const { libelle, price } = req.body;

        const checkIftrainingExists = await TrainingModel.findById(id);
        if (!checkIftrainingExists) {
            throw new Error("training not found!");
        }

        const updatedtraining = await TrainingModel.findByIdAndUpdate(
            id,
            {
                $set: {
                    libelle,
                    price,
                    photo: filename,
                },
            },
            { new: true }
        );

        res.status(200).json(updatedtraining);
    } catch (error) {
        console.error('Error updating training:', error);
        res.status(500).json({ message: error.message });
    }
};

const getTrainings = async (req, res) => {
    try {
        const trainings = await TrainingModel.find();

        if (!trainings || trainings.length === 0) {
            throw new Error('trainings not found');
        }

        res.status(200).json(trainings);
    } catch (error) {
        console.error('Error fetching trainings:', error);
        res.status(500).json({ message: error.message });
    }
};

const deleteTraining = async (req, res) => {
    try {
        const { id } = req.params;
        const checktrainingIfExists = await TrainingModel.findById(id);

        if (!checktrainingIfExists) {
            throw new Error('training not found');
        }

        await TrainingModel.findByIdAndDelete(id);

        res.status(204).json();
    } catch (error) {
        console.error('Error deleting training:', error);
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    addTraining,
    getTrainings,
    updateTraining,
    deleteTraining,
};
