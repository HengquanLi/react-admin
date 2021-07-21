import mongoose from 'mongoose';

const customerSchema = mongoose.Schema({
  companyName: { type: String },
  address: { type: String },
  contactNum: { type: String },
  email: { type: String },
  title: { type: String },
  fullName: { type: String },
  email: { type: String },
  jobs: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Job'
    }
  ],
  invoices: [
    {
      billingMonth:{type:Date},
      visitedDates: { type: [Date] },
    }
  ]
})

const Customer = mongoose.model('Customer', customerSchema);

export default Customer;