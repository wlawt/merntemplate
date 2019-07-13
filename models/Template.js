const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema
const TemplateSchema = new Schema({
  template: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Template = mongoose.model("templates", TemplateSchema);
