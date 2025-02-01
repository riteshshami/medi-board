import mongoose from 'mongoose';

const medicineSchema = new mongoose.Schema({
    name: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Medicine = mongoose.models.Medicine || mongoose.model('Medicine', medicineSchema);

export default Medicine;
