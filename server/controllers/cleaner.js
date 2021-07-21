import mongoose from 'mongoose';
import Cleaner from '../models/cleaner';

export const getCleaners = (req, res) => {
  Cleaner
    .find(req.query)
    .populate('job')
    .sort({ date: -1 })
    .then(cleaners => res.json(cleaners))
    .catch(err => res.status(422).json(err))
}

export const getCleaner = async (req, res) => {

  Cleaner
    .findById(req.params.id)
    .populate('job')
    .then(cleaner => res.json(cleaner))
    .catch(err => res.status(422).json(err))

  // const { id } = req.params;

  // try {
  //   const cleaner = await Cleaner.findById(id);
  //   res.status(404).json(cleaner);
  // } catch (error) {
  //   res.status(404).json({ message: error.message });
  // }
}

//TODO export const getCleanerBySearch = async (req, res) => {
//   const { searchName, searchEmail, searchPhone } = req.query;

//   try { } catch (error) { }
// }

export const createCleaner = async (req, res) => {
  const { title, firstName, lastName, email, phone, address } = req.body;

  try {
    const existingCleaner = await Cleaner.findOne({
      $or: [{ email }, { phone }]
    });

    if (existingCleaner) return res.status(400), json({ massage: "Cleaner Already exists" });

    const newCleaner = await Cleaner.create({ title, fullname: `${firstName} ${lastName}`, email, phone, address })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export const updateCleaner = async (req, res) => {
  const { id } = req.params;
  const updatedCleaner = req.body;
  await Cleaner.findByIdAndUpdate(id, updatedCleaner, { new: true });
}

export const deleteCleaner = async (req, res) => {
  const { id } = req.params;

  await Cleaner.findByIdAndRemove(id);

  res.json({ message: 'Cleaner has been removed' })
}