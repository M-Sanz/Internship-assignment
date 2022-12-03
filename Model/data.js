const mongoose = require('mongoose');
mongoose.pluralize(null);

// Membuat schema
const Data = mongoose.model('data', {
    cpuname: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    platform: {
        type: String,
        required: true
    },
    release: {
        type: String,
        required: true
    },
    remainingRam: {
        type: Number,
        required: true
    },
    totalRam: {
        type: Number,
        required: true
    },
});

module.exports = Data