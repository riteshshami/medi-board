import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema({
    email: { type: String, required: true },
    name: { type: String, required: true },
    feedback: { type: String, required: true },
});

const Feedback = mongoose.models.Feedback || mongoose.model('Feedback', feedbackSchema);

export default Feedback;
