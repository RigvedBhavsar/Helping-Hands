const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const donationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },

    service:[ {type : String}],
    ngo:[ {type : String}],
    tookBy: {
        type: ObjectId,
        ref: "User"
    }
})

mongoose.model("Donation", donationSchema)