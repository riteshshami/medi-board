import mongoose from 'mongoose';

const medicineSchema = new mongoose.Schema({
    type: { type: String, required: true },
    name: { type: String, required: true },
    treatment: { type: String, required: true },
    userId: { type: String, required: true},
});

const Medicine = mongoose.models.Medicine || mongoose.model('Medicine', medicineSchema);

export default Medicine;
