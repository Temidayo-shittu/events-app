const Joi = require("joi");
const mongoose = require("mongoose");



const Organiser = mongoose.model("Organiser",new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    }
  }));

function validateOrganiser(organiser) {
  const schema = {
    name: Joi.string().min(5).max(50).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required() 
  };
  return Joi.validate(organiser, schema);
}


exports.Organiser = Organiser;
exports.validate = validateOrganiser;
