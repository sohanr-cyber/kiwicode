const mongoose = require('mongoose')

const infoSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true
    },

    lastName: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      trim: true
    },
    phone: {
      type: String,
      required: true,
      trim: true
    },

    page: {
      type: String,
      trim: true
    },
    need: {
      type: String,
      required: true,
      trim: true
    },
    budget: {
      type: String,
      required: true,
      trim: true
    },
    message: {
      type: String,
      trim: true
    }
  },
  {
    timestamps: true
  }
)

const Info = mongoose.models.Info || mongoose.model('Info', infoSchema)
export default Info
