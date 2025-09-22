const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    title: {
        type: String,
        default: "New Chat",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
      },
    ],
}, 
    { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
