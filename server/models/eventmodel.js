const mongoose = require("mongoose");
const schema = mongoose.Schema;

const eventmodel = new schema(
  {
    userId: { type: String },
    organiseId: { type: mongoose.Schema.Types.ObjectId, ref: "Organiser" },
    name: { type: String, require: "Please provide an Event Name" },
    type: { type: String },
    capacity: { type: [Number] },
    price: { type: [Number] },
    rating: { type: Number },
    image: { type: Buffer },
    video: { type: Buffer },
    status: { type: Boolean },
    createOn: { type: Date, default: Date.now },
    totalbooking: { type: Number, default: 0 },
    noofcomment: { type: Number, default: 0 },
    comment: [
      {
        commentBody: String,
        commentDate: { type: Date, default: Date.now() },
        userId: String,
      },
    ],
    description: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("events", eventmodel);
