import mongoose from 'mongoose';

const boardSchema = mongoose.Schema({
  title: String,
  taskListIds: Array,
  background: {
    bgType: String,
    data: {
      color: String,
    },
  },
  deleted: Number,
}, {
  timestamps: true,
});

export default mongoose.model('Board', boardSchema);
