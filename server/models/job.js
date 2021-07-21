import mongoose from 'mongoose';

const jobSchema = mongoose.Schema({
  type: { type: String },
  startDate: { type: Date },
  reapts: { type: String },
  description: { type: String },
  price: { type: Currency},
  assigned: { type: Boolean, default: false },
  from: { type: String },
  to: { type: String },
  createdAt: {
    type: Date,
    default: new Date()
  },
})

const Job = mongoose.model('Job', jobSchema);

export default Job;