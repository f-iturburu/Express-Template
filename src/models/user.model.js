const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Este campo es obligatorio.'],
    },
    lastName: {
      type: String,
      required: [true, 'Este campo es obligatorio.'],
    },
    email: {
      type: String,
      required: [true, 'Este campo es obligatorio.'],
      unique: true,
      lowercase: true,
    },
    role: {
      type: String,
      required: [true, 'Este campo es obligatorio.'],
      enum: ['admin', 'client'],
      default: 'client',
    },
    password: {
      type: String,
      required: [true, 'Este campo es obligatorio.'],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = model('user', userSchema);
