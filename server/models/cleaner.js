import mongoose from 'mongoose';

const cleanerSchema = mongoose.Schema({
  title: { type: String },
  fullName: { type: String },
  phone: { type: Number },
  email: { type: String },
  address: { type: String },
  jobs: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Job'
    }
  ]
})

const Cleaner = mongoose.model('Cleaner', cleanerSchema);

export default Cleaner;