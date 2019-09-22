import mongoose from 'mongoose';

const TaskListSchema = mongoose.Schema({
    title: String,
    content: String
}, {
    timestamps: true
});

export default mongoose.model('TaskList', TaskListSchema);